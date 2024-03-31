import {StyleSheet} from 'react-native';

const dietStyles = StyleSheet.create({
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
    },
    calorieHeader: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 30,
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
    },
    mealContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    mealText: {
        fontSize: 25,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
    },
});

export {dietStyles};