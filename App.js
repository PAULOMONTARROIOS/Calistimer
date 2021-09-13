import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {initialRouteNAme: 'Home'},
);

const App = () => {
  return (
    <View>
      <Text style={styles.texto}> CalisTimer </Text>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    fontSize: 48,
    fontFamily: 'Ubuntu-Bold',
    textAlign: 'center',
    color: 'red',
  },
});

export default App;
