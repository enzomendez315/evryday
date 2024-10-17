import React, { useEffect } from 'react';
import { AccountContext } from '../../../App';
import { getUserDBEntry } from '../../logic/account';
import { createWeightLog, updateWeightLog, getAllWeightLogs } from '../../logic/user-goals';
import { getActiveDate } from '../../logic/date-time';
import { View, Text, StyleSheet, Button } from 'react-native';

let userID;

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
            <Text>Weight Screen</Text>
            <Text>This is your current weight: {userBasicWeight}</Text>
            <Button title="cool button"
                onPress={() => {
                    createWeightLog(userID, 170, getActiveDate()).then(
                        (res) => {
                            console.log(`Created weight log: ${res}`);
                        }
                    )
                }} />
            <Text>This is the big list:</Text>
            {allWeightLogs && allWeightLogs.map((log, index) => (
                <Text key={index}>
                    Date: {log.date}, Weight: {log.weight}
                </Text>
            ))}
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