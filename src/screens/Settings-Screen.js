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
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { userSignOut, getUserDBEntry } from '../logic/account';
import { AccountContext } from '../../App';
import { getUserGoals } from '../logic/user-goals';
import { RefreshLocalStorage } from '../logic/devFunctions';
import { COLORS } from '../theme/theme';

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
        <SafeAreaView style={{ flex: 1, backgroundColor: "#f0f8ff" }}>
            <View style={styles.container}>
                <View style={styles.profileHeader}>

                    <View style={styles.nameAndPic}>
                        <Text style={styles.profileName}>{form.userName}</Text>
                        <View>
                            {form.userGender == "Male" ? <Image style={styles.image}
                                source={require('../images/boy_profile_icon.png')} />
                                : <Image style={styles.image}
                                    source={require('../images/girl_profile_icon.png')} />}
                        </View>
                    </View>

                    <View style={styles.profileInfo}>
                        <View style={styles.profileInfoRow}>
                            <Text style={styles.profileInfoLabel}>Age: </Text>
                            <Text style={styles.profileInfoLabel}>{form.userAge} yrs</Text>
                        </View>
                        <View style={styles.profileInfoRow}>
                            <Text style={styles.profileInfoLabel}>Height: </Text>
                            <Text style={styles.profileInfoLabel}>{form.userHeight} in</Text>
                        </View>
                        <View style={styles.profileInfoRow}>
                            <Text style={styles.profileInfoLabel}>Weight: </Text>
                            <Text style={styles.profileInfoLabel}>{form.userWeight} lbs</Text>
                        </View>
                        <View style={styles.profileInfoRow}>
                            <Text style={styles.profileInfoLabel}>Gender: </Text>
                            <Text style={styles.profileInfoLabel}>{form.userGender}</Text>
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
                            <View style={[styles.rowIcon, { backgroundColor: COLORS.primaryBlueHex }]}>
                                <FeatherIcon color="#fff" name="info" size={20} />
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
                            <View style={[styles.rowIcon, { backgroundColor: COLORS.lightGreen }]}>
                                <FeatherIcon color="#fff" name="check-square" size={20} />
                            </View>

                            <Text style={styles.rowLabel}>Edit Daily Goals</Text>

                            <View style={styles.rowSpacer} />

                            <FeatherIcon
                                color="#C6C6C6"
                                name="chevron-right"
                                size={20} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={RefreshLocalStorage}
                            style={styles.row}>
                            <View style={[styles.rowIcon, { backgroundColor: COLORS.primaryRed }]}>
                                <FeatherIcon color="#fff" name="trash-2" size={20} />
                            </View>

                            <Text style={styles.rowLabel}>Clear Local Storage</Text>

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
                            <View style={[styles.rowIcon, { backgroundColor: COLORS.primaryGrayHex }]}>
                                <FeatherIcon color="#fff" name="log-out" size={20} />
                            </View>
                            <Text style={styles.rowLabel}>Sign Out</Text>
                            <View style={styles.rowSpacer} />
                            <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Onboarding'); // Navigate to the Onboarding screen
                            }}
                            style={styles.row}>
                            <View style={[styles.rowIcon, { backgroundColor: COLORS.primaryGrayHex }]}>
                                <FeatherIcon color="#fff" name="help-circle" size={20} />
                            </View>
                            <Text style={styles.rowLabel}>Go to Onboarding</Text>
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
        flexDirection: 'row',
        backgroundColor: 'white',
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
        marginLeft: 40,
        flex: .8,
        justifyContent: 'space-evenly',
    },
    profileInfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profileInfoLabel: {
        color: 'black',
    },
    /** Section */
    section: {
        paddingHorizontal: 24,
    },
    sectionTitle: {
        paddingVertical: 12,
        fontSize: 12,
        fontWeight: '600',
        color: 'black',
        textTransform: 'uppercase',
        letterSpacing: 1.1,
    },
    /** Row */
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 12,
        paddingLeft: 12,
        paddingRight: 12,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 5,
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