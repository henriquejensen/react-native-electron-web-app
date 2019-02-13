
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import pokemon from './pokemonStore';
const Home = props => {

  const handleClick = (pokemon) => {
    props.selectPokemon(pokemon);
    props.history.push('pokemon');
  }

  return (
    <View>
      <FlatList
        keyExtractor={pokemon => pokemon.number}
        data={pokemon}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleClick(item)} >
            <Text>{item.name}</Text>
          </TouchableOpacity>          
        )}
      />
    </View>
  );
};
export default Home;