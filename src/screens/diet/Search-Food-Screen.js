import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, TouchableOpacity, StatusBar, Text, TextInput, ScrollView, Button } from 'react-native';
import { searchFoodItems } from '../../logic/diet-api'
import { COLORS } from '../../theme/theme';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

let DEBUG = false;

let oldSearchInput = "INITIALISED";

const SearchFoodScreen = (props) => {
  const { navigation, route } = props;
  const meal = route.params.meal;
  const mealId = route.params.meal.id;
  DEBUG && console.log(`Search Food mealId: ${mealId}`);
  const [foodItems, setFoodItems] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const MAX_NAME_LENGTH = 45;
  useEffect(() => {
    searchFoodItems(searchTerm, setFoodItems);
  }, []);
  return (
    <>
      <StatusBar barStyle="default" backgroundColor={COLORS.lightGreen} />
      <SafeAreaView>
        <View style={styles.header}>
          <View style={styles.tableHeadContainer}> 
            <Button 
              style = {styles.button}
              title='All Food'
              onPress={() => console.log("Pressed 1")}
            />
            <Button 
              style = {styles.button}
              title='My Food'
              onPress={() => console.log("Pressed 2")}
            />
            <Button 
              style = {styles.button}
              title='Favorites'
              onPress={() => console.log("Pressed 3")}
            />
            <Button 
              style = {styles.button}
              title='New'
              onPress={() => navigation.navigate('Modify Food', { meal })} 
            />
          </View>
          <Text style={styles.title}>Search Food</Text>
          <TextInput
            style={styles.searchInputText}
            placeholder="Enter Food Here"
            onChangeText={async (input) => { 
              setSearchTerm(input);
              await searchFoodItems(searchTerm, setFoodItems); }} 
            />
        </View>

        <Text style={styles.resultsText}>Search Results:</Text>

        <View style={styles.tableHeadContainer}>
          <Text style={styles.tableHeadText}>Food Name</Text>
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
                  <TouchableOpacity onPress={() => navigation.navigate('Add Food', { foodItem:item, meal })}>
                    <View style={styles.tableTextContainer}>
                      <Text style={styles.tableText}>{item.name.length < MAX_NAME_LENGTH
                        ? `${item.name}`
                        : `${item.name.substring(0,MAX_NAME_LENGTH)}`}</Text>
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
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  }
});