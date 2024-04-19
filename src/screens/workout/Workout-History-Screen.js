import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const WorkingHistoryOverview = () => {
    const workoutHistory = [
        {
            id: 1,
            date: "Thursday, Mar 14, 2024",
            duration: "52m",
            totalWeight: "25118 lbs",
            prCount: "0 PRs",
            details: [
                { exercise: 'Squat', sets: 4, weight: '185 lb', reps: 10 },
                { exercise: 'Chest Press', sets: 3, weight: '100 lb', reps: 12 },
                { exercise: 'Seated Row', sets: 3, weight: '110 lb', reps: 12 },
                { exercise: 'Leg Extension', sets: 3, weight: '80 lb', reps: 15 },
                { exercise: 'Incline Chest Press', sets: 3, weight: '30 lb', reps: 12 },
            ]
        },

        {
            id: 2,
            date: "Wednesday, Mar 20, 2024",
            duration: "48m",
            totalWeight: "24300 lbs",
            prCount: "1 PRs",
            details: [
                { exercise: 'Deadlift', sets: 4, weight: '225 lb', reps: 8 },
                { exercise: 'Lat Pull-down', sets: 3, weight: '120 lb', reps: 10 },
                { exercise: 'Overhead Press', sets: 3, weight: '75 lb', reps: 12 },
                { exercise: 'Barbell Curl', sets: 3, weight: '45 lb', reps: 15 },
                { exercise: 'Tricep Extension', sets: 3, weight: '50 lb', reps: 12 },
            ]
        },
        {
            id: 3,
            date: "Friday, Mar 22, 2024",
            duration: "60m",
            totalWeight: "26700 lbs",
            prCount: "2 PRs",
            details: [
                { exercise: 'Bench Press', sets: 4, weight: '135 lb', reps: 10 },
                { exercise: 'Dumbbell Fly', sets: 3, weight: '40 lb', reps: 12 },
                { exercise: 'T-Bar Row', sets: 3, weight: '115 lb', reps: 10 },
                { exercise: 'Front Squat', sets: 3, weight: '100 lb', reps: 12 },
                { exercise: 'Shoulder Press', sets: 3, weight: '85 lb', reps: 10 },
            ]
        },
        {
            id: 4,
            date: "Monday, Mar 25, 2024",
            duration: "55m",
            totalWeight: "27500 lbs",
            prCount: "3 PRs",
            details: [
                { exercise: 'Pull Up', sets: 4, weight: '135 lb', reps: 12 },
                { exercise: 'Dips', sets: 4, weight: '135 lb', reps: 15 },
                { exercise: 'Power Clean', sets: 3, weight: '135 lb', reps: 8 },
                { exercise: 'Push Press', sets: 3, weight: '95 lb', reps: 10 },
                { exercise: 'Hyperextension', sets: 3, weight: '65 lb', reps: 15 },
            ]
        }
        
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Workout History</Text>
            <ScrollView>
                {workoutHistory.map((session) => (
                    <View key={session.id} style={styles.sessionContainer}>
                        <Text style={styles.sessionDate}>{session.date}</Text>
                        <View style={styles.statsContainer}>
                            <Image source={require('../../images/apple.png')} style={styles.icon} />
                            <Text>{session.duration}</Text>
                            <Image source={require('../../images/apple.png')} style={styles.icon} />
                            <Text>{session.totalWeight}</Text>
                            <Image source={require('../../images/apple.png')} style={styles.icon} />
                            <Text>{session.prCount}</Text>
                        </View>
                        {session.details.map((detail, index) => (
                            <View key={index} style={styles.detailContainer}>
                                <Text style={styles.exerciseName}>
                                    {`${detail.sets} x ${detail.exercise}`}
                                </Text>
                                <Text>
                                    {`${detail.weight} - ${detail.reps} reps`}
                                </Text>
                            </View>
                        ))}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    sessionContainer: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
    },
    sessionDate: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
    },
    icon: {
        width: 20,
        height: 20,
    },
    detailContainer: {
        marginTop: 10,
    },
    exerciseName: {
        fontWeight: 'bold',
    },
});

export default WorkingHistoryOverview;
