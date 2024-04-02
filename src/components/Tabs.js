

import React from 'react';
import CurrentWeather from '../screens/CurrentWeather';
import UpComingWeather from '../screens/UpComingWeather';
import City from '../screens/City';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: 'black',
                },

            }}
        >
            <Tab.Screen name="CurrentWeather" component={CurrentWeather} options={{
                tabBarIcon: ({ focused }) => (
                    <Feather name="droplet" size={25} color={focused ? 'tomato' : 'white'} />
                )
            }} />
            <Tab.Screen name="UpComingWeather" component={UpComingWeather} options={{
                tabBarIcon: ({ focused }) => (
                    <Feather name="clock" size={25} color={focused ? 'tomato' : 'white'} />
                )

            }} />
            <Tab.Screen name="City" component={City} options={{
                tabBarIcon: ({ focused }) => (
                    <Feather name="map-pin" size={25} color={focused ? 'tomato' : 'white'} />
                )

            }} />
        </Tab.Navigator>
    )
}

export default Tabs;