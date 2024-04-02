import React from 'react';
import {Button, FlatList, SafeAreaView, StatusBar, Text, TextInput} from 'react-native';
import {searchFoodStyles} from '../../styles/dietStyles/searchFoodStyles';

const SearchFoodScreen = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={searchFoodStyles.title}>Search Food</Text>
        <TextInput placeholder="Enter Food Here" />

        <Text>Search Results:</Text>
        
        <Text>Food 1</Text>
        <Text>Food 2</Text>
        <Text>Food 3</Text>
        <Button title="Food 4" onPress={() => navigation.navigate('Add Food')} />
      </SafeAreaView>
    </>
  );
};

export default SearchFoodScreen;