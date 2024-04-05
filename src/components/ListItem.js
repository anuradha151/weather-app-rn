
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utilities/WeatherType';
import moment from 'moment';

const ListItem = (props) => {

    const { dt_txt, min, max, condition } = props;
    const { item, temp, date } = styles;

    return (
        <View style={item}>
            <Feather name={weatherType[condition]?.icon} size={50} color="white" />
            <View styles={styles.dateTextWrapper}>
                <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
                <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
            </View>
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
        backgroundColor: 'indianred'

    },
    temp: {
        fontSize: 20,
        color: 'white',
    },
    date: {
        fontSize: 15,
        color: 'white',
    },
    dateTextWrapper: {
        flexDirection: 'column'
    }
});


export default ListItem;