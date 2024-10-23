import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, TouchableOpacity, StatusBar, Text, TextInput, ScrollView, Button } from 'react-native';
import { searchFoodItems } from '../../logic/diet-api'
import { COLORS } from '../../theme/theme';
import { AccountContext } from '../../../App';
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
  const MAX_NAME_LENGTH = 45;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create Food Item', { meal: meal, nextPage: 'Add Food' })}>
          <View>
            <Ionicons name="add-outline" size={36} color={COLORS.darkBlue} />
          </View>
        </TouchableOpacity>
      ),
    })
    searchFoodItems(searchTerm, setFoodItems, userId);
  }, []);

  const handleSearch = () => {
    searchFoodItems(searchTerm, setFoodItems, userId);
  };

  return (
    <>
      <StatusBar barStyle="default" backgroundColor={COLORS.lightGreen} />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Foods</Text>
        <View style={styles.searchSection}>
          <TextInput
            style={styles.searchInput}
            placeholder="Type here to search..."
            placeholderTextColor="black"
            value={searchTerm}
            onChangeText={(input) => {
              setSearchTerm(input);
              searchFoodItems(input, setFoodItems, userId);
            }}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          style={styles.listContainer}
          data={foodItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <>
              <TouchableOpacity onPress={() => navigation.navigate('Add Food', { foodItem: item, meal })}>
                <View style={styles.foodItem}>
                  <Text style={styles.foodName}>
                    {item.name.length < MAX_NAME_LENGTH
                      ? item.name
                      : `${item.name.substring(0, MAX_NAME_LENGTH)}...`}
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          )}
          ListEmptyComponent={() => (
            <Text style={styles.noResultsText}>No Food Found</Text>
          )}
        />
      </SafeAreaView>
    </>
  );
};
export default SearchFoodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.peach,
    padding: 20,
    paddingHorizontal: 15,
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'left'
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
    height: 40,
    borderColor: COLORS.dustyOrange,
    borderWidth: 1,
    paddingLeft: 10,
    fontSize: 16,
    color: 'white',
  },

  searchSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  searchButton: {
    backgroundColor: COLORS.dustyOrange,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  searchButtonText: {
    fontSize: 16,
    color: COLORS.whiteHex,
    textAlign: 'center',
    fontWeight: 'bold'
  },

  resultsText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'left',
  },
  
  listContainer: {
    flex: 1,
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
  },

  foodItem: {
    backgroundColor: COLORS.dustyOrange,
    borderRadius: 15,
    padding: 12,
    marginBottom: 8,
  },

  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },

  noResultsText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },


});