import React from 'react';
import { View, FlatList, SafeAreaView, TouchableOpacity, StatusBar, Text, TextInput } from 'react-native';
import { searchFoodStyles } from '../../styles/dietStyles/searchFoodStyles';

const tableData = {
  tableHead: ['Food Name', 'Serving', 'Calories'],
  tableData: [
    ['Bread', '200g', '100'],
    ['Rice', '300g', '200'],
    ['Chicken', '100g', '150'],
    ['Beef', '200g', '300'],
    ['Pasta', '250g', '250'],
    ['Salad', '150g', '50'],
    ['Apple', '100g', '50'],
    ['Banana', '100g', '100'],
    ['Orange', '100g', '70'],
    ['Milk', '200g', '120'],
    ['Yogurt', '150g', '80'],
    ['Cheese', '100g', '200'],
    ['Egg', '50g', '70'],
    ['Fish', '150g', '120'],
    ['Pork', '200g', '250'],
    ['Lamb', '200g', '300'],
    ['Turkey', '200g', '200'],
    ['Bacon', '100g', '150'],
    ['Sausage', '100g', '200'],
    ['Ham', '100g', '150'],
    ['Tuna', '150g', '100'],
    ['Crab', '150g', '100'],
    ['Lobster', '200g', '200'],
    ['Shrimp', '150g', '100'],
    ['Oyster', '100g', '50'],
    ['Clam', '100g', '50'],
    ['Mussel', '100g', '50'],
    ['Scallop', '100g', '50'],
    ['Squid', '150g', '100'],
    ['Octopus', '150g', '100'],
    ['Snail', '100g', '50'],
    ['Peanut', '100g', '600'],
    ['Almond', '100g', '600'],
    ['Cashew', '100g', '600'],
    ['Walnut', '100g', '600'],
    ['Pecan', '100g', '600'],
    ['Pistachio', '100g', '600'],
    ['Macadamia', '100g', '600'],
    ['Hazelnut', '100g', '600'],
    ['Brazil Nut', '100g', '600'],
    ['Coconut', '100g', '600'],
    ['Avocado', '100g', '600'],
    ['Olive', '100g', '600'],
    ['Sunflower Seed', '100g', '600'],
    ['Pumpkin Seed', '100g', '600'],
    ['Chia Seed', '100g', '600'],
    ['Flaxseed', '100g', '600'],
    ['Sesame Seed', '100g', '600'],
    ['Quinoa', '100g', '600'],
    ['Buckwheat', '100g', '600'],
    ['Barley', '100g', '600'],
    ['Oat', '100g', '600'],
    ['Rye', '100g', '600'],
    ['Wheat', '100g', '600'],
    ['Corn', '100g', '600'],
    ['Pea', '100g', '600'],
    ['Lentil', '100g', '600'],
    ['Bean', '100g', '600'],
    ['Chickpea', '100g', '600'],
    ['Kidney Bean', '100g', '600'],
  ],
};

const SearchFoodScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={searchFoodStyles.title}>Search Food</Text>
        <TextInput style={searchFoodStyles.searchInputText}
          placeholder="Enter Food Here" />

        <Text style={searchFoodStyles.resultsText}>Search Results:</Text>

        <View style={searchFoodStyles.tableContainer}>
          <View style={searchFoodStyles.tableHeadContainer}>
            <Text style={searchFoodStyles.tableHeadText}>{tableData.tableHead[0]}</Text>
            <Text style={searchFoodStyles.tableHeadText}>{tableData.tableHead[1]}</Text>
            <Text style={searchFoodStyles.tableHeadText}>{tableData.tableHead[2]}</Text>
          </View>
          <FlatList
            data={tableData.tableData}
            renderItem={({ item }) => (
              <>
                <TouchableOpacity onPress={() => navigation.navigate('Add Food', { item })}>
                  <View style={searchFoodStyles.tableTextContainer}>
                    <Text style={searchFoodStyles.tableText}>{item[0]}</Text>
                    <Text style={searchFoodStyles.tableText}>{item[1]}</Text>
                    <Text style={searchFoodStyles.tableText}>{item[2]}</Text>
                  </View>
                </TouchableOpacity>
                <View style={searchFoodStyles.horizontalLine} />
              </>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default SearchFoodScreen;