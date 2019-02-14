import React from 'react';
import { View, Text, Image, Platform, Button, Share } from 'react-native';
import { Link } from './routing';

const Pokemon = props => {
  const { pokemon } = props;
  const handlePress = () => {
    Share.share({
      message: 'Check out my favourite pokemon',
      url: pokemon.photoUrl
    })
  }

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
      {
        Platform.OS !== 'web' && (
          <View>
            <Button title='Share' onPress={handlePress} />
          </View>
        )
      }
    </View>
  );
};
export default Pokemon;