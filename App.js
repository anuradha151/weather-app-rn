
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tabs from './src/components/Tabs';
import Counter from './src/demonstration/Counter';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Counter />
    </NavigationContainer>
  );
}

export default App;