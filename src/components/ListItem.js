
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utilities/WeatherType';

const ListItem = (props) => {

    const { dt_txt, min, max, condition } = props;
    const { item, temp, date } = styles;

    return (
        <View style={item}>
            <Feather name={weatherType[condition].icon} size={50} color="white" />
            <Text style={date}>{dt_txt}</Text>
            <Text style={temp}>{`${Math.round(min)}\u00B0/${Math.round(max)}\u00B0`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
});


export default ListItem;