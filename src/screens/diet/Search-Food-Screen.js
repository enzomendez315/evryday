import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, TouchableOpacity, StatusBar, Text, TextInput, ScrollView } from 'react-native';
import { getFoodItems } from '../../logic/diet-api'
import { FoodItem } from '../../models';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

// let initialisedDiet = false;
let oldSearchInput = "INITIALISED";

async function updateFoodItems(setFoodItems, searchInput = "") {
  // initialisedDiet = true;
  if (searchInput == oldSearchInput) return;
  oldSearchInput = searchInput;
  await getFoodItems(searchInput).then((getFood) => { setFoodItems(getFood) });
}

const SearchFoodScreen = ({ route, navigation }) => {
  // const [foodItems, setFoodItems] = useState<FoodItem>([]);
  const meal = route.params.meal;
  const mealId = route.params.meal.mealId;
  console.log(`mealId: ${mealId}`);
  const [foodItems, setFoodItems] = useState();
  useEffect(() => {
    updateFoodItems(setFoodItems);
  }, []);
  return (
    <>
      <StatusBar barStyle="default" backgroundColor="#6a5" />
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.title}>Search Food</Text>
          <TextInput
            style={styles.searchInputText}
            placeholder="Enter Food Here"
            //  onChangeText={async (input) => { setFoodItems(await getFoodItems(input)); }}/>
            onChangeText={async (input) => { await updateFoodItems(setFoodItems, input); }} />
        </View>

        <Text style={styles.resultsText}>Search Results:</Text>

        <View style={styles.tableHeadContainer}>
          <Text style={styles.tableHeadText}>Food Name</Text>
          <Text style={styles.tableHeadText}>Serving</Text>
          <Text style={styles.tableHeadText}>Calories</Text>
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
                  <TouchableOpacity onPress={() => navigation.navigate('Add Food', { item, meal })}>
                    <View style={styles.tableTextContainer}>
                      <Text style={styles.tableText}>{item.name}</Text>
                      <Text style={styles.tableText}>{item.serving}</Text>
                      <Text style={styles.tableText}>{item.calories}</Text>
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