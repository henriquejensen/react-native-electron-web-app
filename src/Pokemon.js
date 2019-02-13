import React from 'react';
import { View, Text, Image } from 'react-native';
import { Link } from './routing';

const Pokemon = props => {
  const { pokemon } = props;

  const backButton = (
    <View>
      <Link to='/' >
        <Text>{'Go back'}</Text>
      </Link>
    </View>
  )

  if (!pokemon) {
    return (
      <View>
        {backButton}
        <Text>{'No pokemon selected'}</Text>
      </View>
    )
  }

  return (
    <View>
      {backButton}
      <View>
        <View>
          <Text>{`#${pokemon.number}`}</Text>
        </View>
        <View>
          <Text>{`Name: ${pokemon.name}`}</Text>
        </View>
        <View>
          <Text>{`Type: ${pokemon.type}`}</Text>
        </View>
        <View>
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: pokemon.photoUrl }}
          />
        </View>
      </View>
    </View>
  );
};
export default Pokemon;