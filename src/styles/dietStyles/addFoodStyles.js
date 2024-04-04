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
});

export { addFoodStyles };