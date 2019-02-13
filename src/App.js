/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Switch, Router, Route } from './routing';
import Home from './Home';
import Pokemon from './Pokemon';

type Props = {};
export default class App extends Component<Props> {

  state = {
    selectedPokemon: null
  }

  selectPokemon = (selectedPokemon) => {
    this.setState({ selectedPokemon })
  }

  render() {
    return (
      <View style={styles.container} >
        <Router>
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => <Home {...props} selectPokemon={this.selectPokemon} />}
            />
              
            <Route
              exact
              path='/pokemon'
              render={(props) => <Pokemon {...props} pokemon={this.state.selectedPokemon} />}
            />
          </Switch>
        </Router>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 50,
    padding: 50
  }
});
