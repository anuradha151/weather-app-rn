import React from 'react';
import {  StyleSheet, FlatList, StatusBar, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListItem from '../components/ListItem';

const UpComingWeather = ({ weatherData }) => {

    const renderItem = ({ item }) => (
        <ListItem
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    )

    const { container, image } = styles;

    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/clouds.jpg')}
                style={image} >
                <FlatList
                    data={weatherData}
                    renderItem={renderItem}
                    keyExtractor={item => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
    }

});

export default UpComingWeather;