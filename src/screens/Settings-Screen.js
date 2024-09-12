import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    Switch,
    Image,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { initFoodItems } from '../logic/diet-api';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { userSignOut } from '../logic/account';
import { getUserDBEntry } from '../logic/account';
import { AccountContext } from '../../App';
import { getUserGoals } from '../logic/user-goals';

let userID;

const SettingsScreen = () => {
    const navigation = useNavigation();
    const [form, setForm] = useState({
        userName: "",
        userAge: 0,
        userHeight: 0,
        userWeight: 0,
        userGender: "",
        dietTracking: true,
        sleepTracking: true,
        workoutTracking: true,
    });

    userID = React.useContext(AccountContext);

    useEffect(() => {
        // fetch user settings
        getUserDBEntry(userID).then((user) => {
            // if the user doesn't exist, redirect to the basic info screen
            if (user == null) {
                console.log("User info isn't made yet");
                navigation.navigate('Basic Info');
                return;
            }
            // set the user's name at top of screen
            setForm({ ...form, userName: user.name, userAge: user.age, userHeight: user.height, userWeight: user.weight, userGender: user.gender });
        });
    }, []);

    // called every time the screen is opened
    useFocusEffect(
        React.useCallback(() => {
            // fetch user settings
            getUserDBEntry(userID).then((user) => {
                if (user == null) {
                    console.log("User info isn't made yet");
                    navigation.navigate('Basic Info');
                    return;
                }
                setForm({ ...form, userName: user.name, userAge: user.age, userHeight: user.height, userWeight: user.weight, userGender: user.gender });
                // if the user has already entered their basic info, 
                // check if user goals are made
                getUserGoals(userID).then((goals) => {
                    if (goals == null) {
                        console.log("User goals aren't made yet");
                        navigation.navigate('Daily Goals');
                        return;
                    }
                });
            });
            return;
        }, [])
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={styles.container}>
                <View style={styles.profileHeader}>

                    <View style={styles.nameAndPic}>
                        <Text style={styles.profileName}>{form.userName}</Text>
                        <View>
                            {form.userGender == "male" ? <Image style={styles.image}
                                source={require('../images/boy_profile_icon.png')} />
                                : <Image style={styles.image}
                                    source={require('../images/girl_profile_icon.png')} />}
                        </View>
                    </View>

                    <View style={styles.profileInfo}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>Age: </Text>
                            <Text>{form.userAge} yrs</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>Height: </Text>
                            <Text>{form.userHeight} in</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>Weight: </Text>
                            <Text>{form.userWeight} lbs</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>Gender: </Text>
                            <Text>{form.userGender}</Text>
                        </View>
                    </View>
                </View>

                <ScrollView>
                    {/* Preferences , might use this later
                    <View style={styles.section}>
                        
                        <Text style={styles.sectionTitle}>Preferences</Text>

                        <View style={styles.row}>
                            <View style={[styles.rowIcon, { backgroundColor: '#38C959' }]}>
                                <FeatherIcon color="#fff" name="home" size={20} />
                            </View>

                            <Text style={styles.rowLabel}>Diet Tracking</Text>

                            <View style={styles.rowSpacer} />

                            <Switch
                                onValueChange={dietTracking =>
                                    setForm({ ...form, dietTracking })
                                }
                                value={form.dietTracking} />
                        </View>

                        <View style={styles.row}>
                            <View style={[styles.rowIcon, { backgroundColor: '#38C959' }]}>
                                <FeatherIcon color="#fff" name="home" size={20} />
                            </View>

                            <Text style={styles.rowLabel}>Sleep Tracking</Text>

                            <View style={styles.rowSpacer} />

                            <Switch
                                onValueChange={sleepTracking =>
                                    setForm({ ...form, sleepTracking })
                                }
                                value={form.sleepTracking} />
                        </View>

                        <View style={styles.row}>
                            <View style={[styles.rowIcon, { backgroundColor: '#38C959' }]}>
                                <FeatherIcon color="#fff" name="home" size={20} />
                            </View>

                            <Text style={styles.rowLabel}>Workout Tracking</Text>

                            <View style={styles.rowSpacer} />

                            <Switch
                                onValueChange={workoutTracking =>
                                    setForm({ ...form, workoutTracking })
                                }
                                value={form.workoutTracking} />
                        </View>
                    </View>
                    */}

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Resources</Text>

                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Basic Info');
                            }}
                            style={styles.row}>
                            <View style={[styles.rowIcon, { backgroundColor: '#007afe' }]}>
                                <FeatherIcon color="#fff" name="mail" size={20} />
                            </View>

                            <Text style={styles.rowLabel}>Edit User Information</Text>

                            <View style={styles.rowSpacer} />

                            <FeatherIcon
                                color="#C6C6C6"
                                name="chevron-right"
                                size={20} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Daily Goals');
                            }}
                            style={styles.row}>
                            <View style={[styles.rowIcon, { backgroundColor: '#007afe' }]}>
                                <FeatherIcon color="#fff" name="mail" size={20} />
                            </View>

                            <Text style={styles.rowLabel}>Edit Daily Goals</Text>

                            <View style={styles.rowSpacer} />

                            <FeatherIcon
                                color="#C6C6C6"
                                name="chevron-right"
                                size={20} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                // TODO:: REMOVE used to add sample date to master food and servings
                                initFoodItems();
                            }}
                            style={styles.row}>
                            <View style={[styles.rowIcon, { backgroundColor: '#32c759' }]}>
                                <FeatherIcon color="#fff" name="star" size={20} />
                            </View>

                            <Text style={styles.rowLabel}>ADD FOOD MASTER ITEMS</Text>

                            <View style={styles.rowSpacer} />

                            <FeatherIcon
                                color="#C6C6C6"
                                name="chevron-right"
                                size={20} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={async () => {
                                await userSignOut();
                            }}
                            style={styles.row}>
                            <View style={[styles.rowIcon, { backgroundColor: '#007afe' }]}>
                                <FeatherIcon color="#fff" name="user" size={20} />
                            </View>
                            <Text style={styles.rowLabel}>Sign Out</Text>
                            <View style={styles.rowSpacer} />
                            <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
                        </TouchableOpacity>


                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default SettingsScreen;


const styles = StyleSheet.create({
    container: {
        padding: 0,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    /** Profile */
    profileHeader: {
        padding: 10,
        backgroundColor: 'lightgray',
        flexDirection: 'row',
    },
    nameAndPic: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    image: {
        width: 100,
        height: 100,
        margin: 10,
    },
    profileName: {
        margin: 10,
        fontSize: 19,
        color: 'black',
    },
    profileInfo: {
        margin: 10,
        flex: .7,
        justifyContent: 'space-evenly',
    },
    /** Section */
    section: {
        paddingHorizontal: 24,
    },
    sectionTitle: {
        paddingVertical: 12,
        fontSize: 12,
        fontWeight: '600',
        color: '#9e9e9e',
        textTransform: 'uppercase',
        letterSpacing: 1.1,
    },
    /** Row */
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 50,
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        marginBottom: 12,
        paddingLeft: 12,
        paddingRight: 12,
    },
    rowIcon: {
        width: 32,
        height: 32,
        borderRadius: 9999,
        marginRight: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowLabel: {
        fontSize: 17,
        fontWeight: '400',
        color: '#0c0c0c',
    },
    rowSpacer: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
});