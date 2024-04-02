import {StyleSheet} from 'react-native';

const addMealStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    mealContainer: {
        justifyContent: 'space-around',
        marginTop: 40,
    },
    addMealButton: {
        width: 100,
        height: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 40,
    },
    pieMacroContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 10,
        marginTop: 40,
        marginRight: 30,
    },
    macroContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 10,
    },
    pieChart: {
        marginTop: 40,
        marginBottom: 40,
        marginLeft: 40,
        marginRight: 'auto',
        borderRadius: 10,
    },
});

export {addMealStyles};