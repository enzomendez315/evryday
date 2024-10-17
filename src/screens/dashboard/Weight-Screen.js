import React, { useEffect } from 'react';
import { AccountContext } from '../../../App';
import { getUserDBEntry } from '../../logic/account';
import { createWeightLog, updateWeightLog, getAllWeightLogs, getDayWeightLog } from '../../logic/user-goals';
import { getActiveDate } from '../../logic/date-time';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { COLORS } from '../../theme/theme';
import { LineChart } from 'react-native-chart-kit';

let userID;

// chart that renders sleepData on UI
const MyLineChart = ({ weightArray_ }) => {
    let largestDay = Math.max(...weightArray_.map(date => parseInt(date.date.split('-')[2])));
    let daysArray = Array.from({ length: largestDay }, (_, index) => (index + 1).toString().padStart(2, '0'));
    let minimumWeight = Math.min(...weightArray_.map(entry => entry.weight));
    let weightArray = daysArray.map(date => {
        const weightEntry = weightArray_.find(entry => entry.date.split('-')[2] === date);
        return weightEntry ? weightEntry.weight : minimumWeight;
    });
    return (
        <>
            <LineChart
                data={{
                    labels: daysArray,
                    datasets: [
                        {
                            data: weightArray,
                        },
                        // hack so that chart starts at 0
                        { data: [minimumWeight - 2, minimumWeight - 2], color: () => 'transparent', strokeWidth: 0, withDots: false, }
                    ],
                    legend: ["Weight"]
                }}
                width={350}
                height={200}
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
    const [userBasicWeight, setUserBasicWeight] = React.useState(0);
    const [allWeightLogs, setAllWeightLogs] = React.useState(null);

    userID = React.useContext(AccountContext);

    // fetch user settings
    useEffect(() => {
        // gets the basic info weight
        // TODO: match this with the user's current weight
        getUserDBEntry(userID).then((user) => {
            if (user == null) {
                console.log("User info isn't made yet");
                navigation.navigate('Basic Info');
                return;
            }
            setUserBasicWeight(user.weight);
        });

        // gets all weight logs from DB and sets the hook
        getAllWeightLogs(userID).then((logs) => {
            let tempWeightData = [];
            // filter the weight and date from each entry then set the hook
            logs.forEach(element => {
                tempWeightData.push({ date: element.date, weight: element.weight });
            });
            console.log(`All weight logs: ${tempWeightData[0]}`);
            setAllWeightLogs(tempWeightData);
        });
    }, []);


    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.tabHeaderText}>Goal Progress</Text>
                <View style={styles.goalProgressContainer}>
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <Text style={{ color: 'black', fontSize: 24 }}>Current Weight</Text>
                        <Text style={{ color: 'black', fontSize: 16 }}>{userBasicWeight}</Text>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <Text style={{ color: 'black', fontSize: 24 }}>Goal Weight</Text>
                        <Text style={{ color: 'black', fontSize: 16 }}>Idk mane ...</Text>
                    </View>
                </View>
            </View>

            <View>
                <Text style={styles.tabHeaderText}>Statistics</Text>
                <View style={styles.statisticsContainer}>
                    {allWeightLogs && <MyLineChart weightArray_={allWeightLogs} />}
                </View>
            </View>

            {/* Overly Intricate and Complex Add weight button */}
            <TouchableOpacity style={styles.addWeightButton}
                onPress={() => {
                    getDayWeightLog(userID, getActiveDate()).then((res1) => {
                        if (res1 == null) {
                            console.log("what");
                            createWeightLog(userID, 170, getActiveDate()).then(
                                (res) => {
                                    console.log(`Created weight log: ${res}`);
                                    // gets all weight logs from DB and sets the hook
                                    getAllWeightLogs(userID).then((logs) => {
                                        let tempWeightData = [];
                                        // filter the weight and date from each entry then set the hook
                                        logs.forEach(element => {
                                            tempWeightData.push({ date: element.date, weight: element.weight });
                                        });
                                        console.log(`All weight logs: ${tempWeightData[0]}`);
                                        setAllWeightLogs(tempWeightData);
                                    });
                                }
                            )
                        } else {
                            console.log("what part 2");
                            updateWeightLog(userID, 170, getActiveDate()).then(
                                (res) => {
                                    console.log(`Updated weight log: ${res}`);
                                    // gets all weight logs from DB and sets the hook
                                    getAllWeightLogs(userID).then((logs) => {
                                        let tempWeightData = [];
                                        // filter the weight and date from each entry then set the hook
                                        logs.forEach(element => {
                                            tempWeightData.push({ date: element.date, weight: element.weight });
                                        });
                                        console.log(`All weight logs: ${tempWeightData[0]}`);
                                        setAllWeightLogs(tempWeightData);
                                    });
                                }
                            )
                        }
                    });
                }} >
                <Text style={styles.addWeightButtonText}> + Add Weight</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: COLORS.backgroundBlue,
    },
    goalProgressContainer: {
        margin: 10,
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 8,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 5,
    },
    statisticsContainer: {
        margin: 10,
        height: 250,
        padding: 8,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 5,
    },
    tabHeaderText: {
        fontSize: 20,
        color: 'black',
        marginTop: 10,
        marginLeft: 10,
    },
    addWeightButton: {
        margin: 10,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.lightBlue,
    },
    addWeightButtonText: {
        color: 'black',
    },
});

export default WeightScreen;