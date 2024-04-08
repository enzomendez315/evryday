import React from 'react';
import { View, FlatList, SafeAreaView, TouchableOpacity, StatusBar, Text, TextInput, ScrollView } from 'react-native';
import { searchFoodStyles } from '../../styles/dietStyles/searchFoodStyles';

const foodsList = [
  { name: 'Rice', calories: 200, protein: 10, carbs: 20, fat: 5, serving: '200g' },
  { name: 'Chicken', calories: 300, protein: 15, carbs: 30, fat: 15, serving: '100g' },
  { name: 'Broccoli', calories: 50, protein: 5, carbs: 10, fat: 5, serving: '100g' },
  { name: 'Salmon', calories: 250, protein: 20, carbs: 0, fat: 15, serving: '150g' },
  { name: 'Banana', calories: 100, protein: 1, carbs: 25, fat: 0, serving: '1 medium' },
  { name: 'Eggs', calories: 70, protein: 6, carbs: 0, fat: 5, serving: '1 large' },
  { name: 'Spinach', calories: 10, protein: 1, carbs: 2, fat: 0, serving: '100g' },
  { name: 'Milk', calories: 150, protein: 8, carbs: 12, fat: 8, serving: '1 cup' },
  { name: 'Pasta', calories: 250, protein: 10, carbs: 50, fat: 5, serving: '200g' },
  { name: 'Apple', calories: 50, protein: 0, carbs: 15, fat: 0, serving: '1 medium' },
  { name: 'Bread', calories: 100, protein: 5, carbs: 15, fat: 2, serving: '2 slices' },
  { name: 'Yogurt', calories: 150, protein: 10, carbs: 15, fat: 5, serving: '1 cup' },
  { name: 'Orange', calories: 50, protein: 1, carbs: 12, fat: 0, serving: '1 medium' },
  { name: 'Beef', calories: 200, protein: 20, carbs: 0, fat: 15, serving: '100g' },
  { name: 'Cheese', calories: 100, protein: 5, carbs: 0, fat: 10, serving: '1 slice' },
  { name: 'Carrots', calories: 25, protein: 1, carbs: 5, fat: 0, serving: '100g' },
  { name: 'Peanuts', calories: 200, protein: 10, carbs: 5, fat: 15, serving: '50g' },
  { name: 'Turkey', calories: 150, protein: 15, carbs: 0, fat: 10, serving: '100g' },
  { name: 'Potatoes', calories: 150, protein: 2, carbs: 30, fat: 0, serving: '150g' },
  { name: 'Tomatoes', calories: 20, protein: 1, carbs: 5, fat: 0, serving: '100g' },
  { name: 'Avocado', calories: 200, protein: 2, carbs: 10, fat: 15, serving: '1 medium' },
  { name: 'Grapes', calories: 50, protein: 1, carbs: 10, fat: 0, serving: '100g' },
];

const SearchFoodScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={searchFoodStyles.header}>
          <Text style={searchFoodStyles.title}>Search Food</Text>
          <TextInput style={searchFoodStyles.searchInputText} placeholder="Enter Food Here" />
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
              data={foodsList}
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