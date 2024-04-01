import React from 'react';
import { Text, StyleSheet, FlatList, View, StatusBar, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Fontisto } from '@expo/vector-icons';

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

const Item = (props) => {
    const { dt_txt, min, max, condition } = props;
    return (
        <View style={styles.item}>
            <Fontisto name="day-sunny" size={50} color="white" />
            <Text style={styles.date}>{dt_txt}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>
    )
}

const UpComingWeather = () => {

    const renderItem = ({ item }) => (
        <Item
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    )

    return (
        <SafeAreaView style={styles.container}>
            <Text>Upcoming Weather</Text>
            <ImageBackground
                source={require('../../assets/clouds.jpg')}
                style={styles.image} >
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
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink'

    },
    temp: {
        fontSize: 20,
        color: 'white',
    },
    date: {
        fontSize: 15,
        color: 'white',
    },
    image: {
        flex: 1,
    }

});

export default UpComingWeather;