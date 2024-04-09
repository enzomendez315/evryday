import { ScrollView, StyleSheet } from 'react-native';

const searchFoodStyles = StyleSheet.create({
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
    searchInputText: {
        fontSize: 20,
        color: 'black',
        textAlign: 'left',
        borderWidth: 1,
        marginTop: 20,
        marginBottom: 20,
    },
    resultsText: {
        fontSize: 20,
        color: 'black',
        textAlign: 'left',
    },
    tableContainer: {
        padding: 10,
        justifyContent: 'center',
    },
    tableHeadContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
    },
    tableHeadText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },
    tableTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    tableText: {
        margin: 6,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    listContainer: {
        padding: 1,
        scrollEnabled: true,
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: 'black',
    },
});

export { searchFoodStyles };