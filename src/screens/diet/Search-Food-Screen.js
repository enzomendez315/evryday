import React, {useState, useEffect} from 'react';
import { View, FlatList, SafeAreaView, TouchableOpacity, StatusBar, Text, TextInput, ScrollView } from 'react-native';
import { searchFoodStyles } from '../../styles/dietStyles/searchFoodStyles';
import { getFoodItems } from '../../logic/diet-api'
import { FoodItem } from '../../models';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

// let initialisedDiet = false;
let oldSearchInput = "INITIALISED";

async function updateFoodItems(setFoodItems, searchInput = "") {
  // initialisedDiet = true;
  if (searchInput == oldSearchInput) return;
  oldSearchInput = searchInput;
  await getFoodItems(searchInput).then((getFood) => {setFoodItems(getFood)});
}

const SearchFoodScreen = ({ navigation }) => {
  // const [foodItems, setFoodItems] = useState<FoodItem>([]);
  const [foodItems, setFoodItems] = useState();
  useEffect(() => {
    updateFoodItems(setFoodItems);
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={searchFoodStyles.header}>
          <Text style={searchFoodStyles.title}>Search Food</Text>
          <TextInput 
          style={searchFoodStyles.searchInputText}
           placeholder="Enter Food Here" 
           onChangeText={async (input) => { updateFoodItems(setFoodItems, input); }}/>
        </View>

        <Text style={searchFoodStyles.resultsText}>Search Results:</Text>

        <View style={searchFoodStyles.tableHeadContainer}>
          <Text style={searchFoodStyles.tableHeadText}>Food Name</Text>
          <Text style={searchFoodStyles.tableHeadText}>Serving</Text>
          <Text style={searchFoodStyles.tableHeadText}>Calories</Text>
        </View>

        <ScrollView>
          <View style={searchFoodStyles.tableContainer}>
            <FlatList
              style={searchFoodStyles.listContainer}
              scrollEnabled={false}
              data={foodItems}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <>
                  <TouchableOpacity onPress={() => navigation.navigate('Add Food', { item })}>
                    <View style={searchFoodStyles.tableTextContainer}>
                      <Text style={searchFoodStyles.tableText}>{item.name}</Text>
                      <Text style={searchFoodStyles.tableText}>{item.serving}</Text>
                      <Text style={searchFoodStyles.tableText}>{item.calories}</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={searchFoodStyles.separator} />
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