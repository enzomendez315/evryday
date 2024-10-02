import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../theme/theme';
import { fetchWorkoutHistory } from '../../logic/workout-api';

const WorkingHistoryOverview = () => {
    const [workoutHistory, setWorkoutHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch workout history from the API
    useEffect(() => {

        const loadWorkoutHistory = async () => {
            try {
                const history = await fetchWorkoutHistory();
                setWorkoutHistory(history);
            } catch (error) {
                console.error("Error loading workout history:", error);
            } finally {
                setIsLoading(false);
            }
        };
        loadWorkoutHistory();
    }, []);

    if (isLoading) {
        return <Text>Loading workout history...</Text>;
    }

    if (workoutHistory.length === 0) {
        return <Text>No workout history found.</Text>; // Handle the case where no data is available
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Workout History</Text>
            <ScrollView>
                {workoutHistory.map((session) => (
                    <TouchableOpacity key={session.id} style={styles.sessionContainer}>
                        <Text style={styles.sessionDate}>Date: {session.date}</Text>
                        <Text style={styles.containerStats}>Duration: {session.durationMinutes} minutes</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingHorizontal: 15,
        backgroundColor: COLORS.backgroundBlue,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
        textAlign: 'left'
    },

    sessionContainer: {
        marginBottom: 20,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 15,
        backgroundColor: COLORS.darkBlue,
    },

    sessionDate: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.lightBlue,
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
        marginLeft: 10,
    },
    exerciseName: {
        fontWeight: 'bold',
        color: COLORS.whiteHex,
        fontSize: 16,
    },

    detailExercise: {
        color: COLORS.lightBlue,
        fontSize: 14,
    },

    containerStats: {
        fontWeight: 'bold',
        color: COLORS.lightGray,
    }
});

export default WorkingHistoryOverview;
