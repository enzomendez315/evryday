import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, TouchableOpacity, StatusBar, Text, TextInput, ScrollView, Button } from 'react-native';
import { searchFoodItems } from '../../logic/diet-api'
import { COLORS } from '../../theme/theme';
import { AccountContext } from '../../../App';
import { NavMenuPopupComponent } from '../../components/PopupMenu';
import Ionicons from 'react-native-vector-icons/Ionicons';

let DEBUG = false;

const SearchFoodScreen = (props) => {
  const { navigation, route } = props;
  const userId = React.useContext(AccountContext);
  const meal = route.params.meal;
  const mealId = route.params.meal.id;
  DEBUG && console.log(`Search Food mealId: ${mealId}`);
  const [foodItems, setFoodItems] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [navMenuVisible, setNavMenuVisible] = useState(false);

  const addNavTab = {
    id: 0,
    name: 'Create New Food Item',
    onPress: async () => {
      navigation.navigate('Create Food Item', { meal:meal, nextPage:'Add Food' })
    }
  }

  const scanNavTab = {
    id: 1,
    name: 'Scan Barcode',
    onPress: async () => {
      navigation.navigate('Scan Barcode', { meal:meal })
    }
  }

  const navPopupTabs = [addNavTab, scanNavTab];

  const MAX_NAME_LENGTH = 45;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setNavMenuVisible(!navMenuVisible)}>
          <View>
            <Ionicons name="menu-outline" size={36} color={COLORS.darkBlue} />
          </View>
        </TouchableOpacity>
      ),
    })
    searchFoodItems(searchTerm, setFoodItems, userId);
  }, []);
  return (
    <>
      <StatusBar barStyle="default" backgroundColor={COLORS.lightGreen} />
      <SafeAreaView>
        <NavMenuPopupComponent
          isVisible={navMenuVisible}
          setIsVisible={setNavMenuVisible}
          data={navPopupTabs}
        />
        <View style={styles.header}>
          <TextInput
            style={styles.searchInputText}
            placeholder="Enter Food Here"
            onChangeText={(input) => {
              setSearchTerm(input);
              searchFoodItems(input, setFoodItems, userId);
            }}
          />
        </View>
        <Text style={styles.resultsText}>Search Results:</Text>
        <View style={styles.tableHeadContainer}>
        </View>

        <ScrollView>
          <View style={styles.tableContainer}>
            <FlatList
              style={styles.listContainer}
              scrollEnabled={false}
              data={foodItems}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <>
                  <TouchableOpacity onPress={() => navigation.navigate('Add Food', { foodItem: item, meal })}>
                    <View style={styles.tableTextContainer}>
                      <Text style={styles.tableText}>{item.name.length < MAX_NAME_LENGTH
                        ? `${item.name}`
                        : `${item.name.substring(0, MAX_NAME_LENGTH)}`}</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.separator} />
                </>
              )}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SearchFoodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundBlue,
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
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  }
});