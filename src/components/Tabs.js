

import React from 'react';
import CurrentWeather from '../screens/CurrentWeather';
import UpComingWeather from '../screens/UpComingWeather';
import City from '../screens/City';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: 'black',
                },
                headerStyle: {
                    backgroundColor: 'black',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: 'tomato'

                }
            }}
        >
            <Tab.Screen
                name="CurrentWeather"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="droplet"
                            size={25}
                            color={focused ? 'tomato' : 'white'} />
                    )
                }} >
                {() => <CurrentWeather weatherData={weather.list[0]} />}
            </Tab.Screen>
            <Tab.Screen
                name="UpComingWeather"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="clock"
                            size={25}
                            color={focused ? 'tomato' : 'white'} />
                    )

                }}>
                {() => <UpComingWeather weatherData={weather.list} />}
                </Tab.Screen>
            <Tab.Screen name="City" component={City} options={{
                tabBarIcon: ({ focused }) => (
                    <Feather name="map-pin" size={25} color={focused ? 'tomato' : 'white'} />
                )

            }} />
        </Tab.Navigator>
    )
}

export default Tabs;