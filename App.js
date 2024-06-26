
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useGetWeather } from './hooks/useGetWeather';

import Tabs from './src/components/Tabs';
import ErrorItem from './src/components/ErrorItem';


const Tab = createBottomTabNavigator();

const App = () => {

  const [loading, weather, error] = useGetWeather();

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      {error
        ? <ErrorItem />
        : <ActivityIndicator size="large" color="blue" />
      }
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default App;