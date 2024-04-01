import React from 'react';
import { Text, StyleSheet, FlatList, View, StatusBar, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListItem from '../components/ListItem';

const DATA = [
    {
        dt_txt: "2021-03-01 12:00:00",
        main: {
            temp_min: 4.89,
            temp_max: 8.56
        },
        weather: [
            {
                main: "Sunny"
            }
        ]
    },
    {
        dt_txt: "2021-03-02 12:00:00",
        main: {
            temp_min: 4.89,
            temp_max: 8.56
        },
        weather: [
            {
                main: "Clear"
            }
        ]
    },
    {
        dt_txt: "2021-03-03 12:00:00",
        main: {
            temp_min: 4.89,
            temp_max: 8.56
        },
        weather: [
            {
                main: "Clouds"
            }
        ]
    },
    {
        dt_txt: "2021-03-04 12:00:00",
        main: {
            temp_min: 4.89,
            temp_max: 8.56
        },
        weather: [
            {
                main: "Rains"
            }
        ]
    }
]



const UpComingWeather = () => {

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
            <Text>Upcoming Weather</Text>
            <ImageBackground
                source={require('../../assets/clouds.jpg')}
                style={image} >
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue',
    },
    image: {
        flex: 1,
    }

});

export default UpComingWeather;