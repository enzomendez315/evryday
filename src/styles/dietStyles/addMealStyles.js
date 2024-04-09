import { StyleSheet } from 'react-native';

const addMealStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    mealContainer: {
        justifyContent: 'space-around',
        marginTop: 40,
    },
    foodItem: {
        fontSize: 20,
        textAlign: 'left',
        padding: 10,
        margin: 5,
        color: 'black',
    },
    Button: {
        backgroundColor: 'blue',
        borderRadius: 8,
        padding: 10,
        margin: 10,
        justifyContent: 'center',
        height: 50,
    },
    ButtonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 40,
    },
    pieMacroContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 10,
        marginTop: 40,
        marginRight: 30,
    },
    pieTextContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 10,
    },
    pieText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    macroContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginTop: 30,
        marginBottom: 30,
    },
    macroSquareTextContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    macroText: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    proteinSquare: {
        width: 15,
        height: 15,
        backgroundColor: 'lightblue',
        borderWidth: 1,
        marginRight: 5,
    },
    carbsSquare: {
        width: 15,
        height: 15,
        backgroundColor: 'lightgreen',
        borderWidth: 1,
        marginRight: 5,
    },
    fatSquare: {
        width: 15,
        height: 15,
        backgroundColor: 'pink',
        borderWidth: 1,
        marginRight: 5,
    },
    pieChart: {
        marginTop: 40,
        marginBottom: 40,
    },
    // Popup styles
    popupOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    popup: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        width: '90%',
    },
    popupHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    popupTitle: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    editButton: {
        fontSize: 18,
        color: '#0000ff', // Replace with your theme color
    },
});

export { addMealStyles };