import React, { useEffect } from 'react';
import { AccountContext } from '../../../App';
import { getUserDBEntry } from '../../logic/account';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

let userID;

// chart that renders sleepData on UI
const MyLineChart = ({ weightData }) => {
    let largestDay = Math.max(...weightData.map(day => parseInt(day.day.split('-')[2])));
    let daysArray = Array.from({ length: largestDay }, (_, index) => (index + 1).toString().padStart(2, '0'));
    return (
        <>
            <LineChart
                data={{
                    labels: weightData,
                    datasets: [
                        {
                            data: hoursArray,
                        },
                        // hack so that chart starts at 0
                        { data: [0, 0], color: () => 'transparent', strokeWidth: 0, withDots: false, }
                    ],
                    legend: ["Weight"]
                }}
                width={Dimensions.get('window').width - 16}
                height={220}
                yAxisInterval={1}
                chartConfig={{
                    fromZero: true,
                    withHorizontalLabels: true,
                    backgroundColor: "#00a8e2",
                    backgroundGradientFrom: "#00c6ff",
                    backgroundGradientTo: "#0072ff",
                    decimalPlaces: 1, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#00c6ff"
                    }
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </>
    );
};

const WeightScreen = () => {
    const [userWeight, setUserWeight] = React.useState(0);

    userID = React.useContext(AccountContext);

    // fetch user settings
    useEffect(() => {
        getUserDBEntry(userID).then((user) => {
            if (user == null) {
                console.log("User info isn't made yet");
                navigation.navigate('Basic Info');
                return;
            }
            setUserWeight(user.weight);
        });
    }, []);

    return (
        <View style={styles.container}>
            <Text>Weight Screen</Text>
            <Text>This is your current weight: {userWeight}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

export default WeightScreen;