import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    Switch,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { initFoodItems } from '../logic/diet-api';
import { useNavigation } from '@react-navigation/native';
import { userSignOut } from '../logic/account';
import { getUserDBEntry } from '../logic/account';
import { AccountContext } from '../../App';

let userID;

const SettingsScreen = () => {
    const navigation = useNavigation();
    const [form, setForm] = useState({
        userName: "",
        dietTracking: true,
        sleepTracking: true,
        workoutTracking: true,
    });

    userID = React.useContext(AccountContext);

    useEffect(() => {
        // fetch user settings
        getUserDBEntry(userID).then((user) => {
            setForm({ ...form, userName: user.name });
        });
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={styles.container}>
                <View style={styles.profile}>
                    <TouchableOpacity
                        onPress={() => {
                            // handle onPress
                        }}>
                        <View style={styles.profileAvatarWrapper}>

                            <TouchableOpacity
                                onPress={() => {
                                    // handle onPress
                                }}>
                                <View style={styles.profileAction}>
                                    <FeatherIcon
                                        color="#fff"
                                        name="edit-3"
                                        size={15} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                    <View>
                        <Text style={styles.profileName}>{form.userName}</Text>

                        <Text style={styles.profileAddress}>
                            123 Maple Street. Anytown, PA 17101
                        </Text>
                    </View>
                </View>

                <ScrollView>
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
    profile: {
        padding: 24,
        backgroundColor: 'lightgray',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileAvatarWrapper: {
        position: 'relative',
    },
    profileAction: {
        position: 'absolute',
        right: -4,
        bottom: -10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 28,
        height: 28,
        borderRadius: 9999,
        backgroundColor: '#007bff',
    },
    profileName: {
        marginTop: 20,
        fontSize: 19,
        fontWeight: '600',
        color: 'black',
        textAlign: 'center',
    },
    profileAddress: {
        marginTop: 5,
        fontSize: 16,
        color: '#989898',
        textAlign: 'center',
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