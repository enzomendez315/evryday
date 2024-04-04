import {StyleSheet} from 'react-native';

const dietHomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    },
    calorieHeader: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 25,
        color: 'black',
    },
    calorieText: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 20,
    },
    pieChart: {
        marginTop: 40,
        marginBottom: 40,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
    },
    macroContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 10,
    },
    macroText: {
        textAlign: 'left',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
        color: 'black',
    },
    mealsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    mealNameText: {
        fontSize: 25,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        color: 'black',
    },
    mealText: {
        fontSize: 25,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 'auto',
        marginLeft: 'auto',
        flexDirection: 'row',
    },
    addMealButton: {
        backgroundColor: 'blue',
        borderRadius: 8,
        padding: 10,
        margin: 10,
        justifyContent: 'center',
        height: 50,
    },
    addMealButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export {dietHomeStyles};