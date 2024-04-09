import { StyleSheet } from 'react-native';

const addFoodStyles = StyleSheet.create({
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
        color: 'black',
    },
    text: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginBottom: 20,
    },
    macroContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        marginLeft: 40,
        marginRight: 40,
    },
    servingInputContainer: {
        flexDirection: 'row',
        margin: 5,
        marginTop: 50,
    },
    textInput: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        borderWidth: 1,
        width: 50,
    },
    metricText: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
    },
    caloriesText: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        margin: 10,
        marginLeft: 40,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        margin: 10,
        marginTop: 40,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
});

export { addFoodStyles };