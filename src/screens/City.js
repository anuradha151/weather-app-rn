import React from "react";
import { View, Text, StyleSheet, ImageBackground, StatusBar } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import IconText from "../components/IconText";
import moment from 'moment';

const City = ({ weatherData }) => {

    const { name, country, population, sunrise, sunset } = weatherData;

    return (
        <SafeAreaView style={styles.wrapper}>
            <ImageBackground source={require('../../assets/city-back.jpg')} style={styles.image}>
                <Text style={[styles.cityText, styles.cityName]}>{name}</Text>
                <Text style={[styles.cityText, styles.countryName]}>{country}</Text>
                <View style={[styles.populationWrapper, styles.rowLayout]}>
                    <IconText
                        icon="user"
                        text={`Population: ${population}`}
                        color="white"
                        bodyTextStyles={styles.populationText}
                    />
                </View>
                <View style={styles.riseSetWrapper}>
                    <IconText
                        icon="sunrise"
                        text={moment(sunrise).format('h:mm:ss a')}
                        color="white"
                        bodyTextStyles={styles.riseSetText}
                    />
                </View>
                <View style={styles.riseSetWrapper}>
                    <IconText
                        icon="sunset"
                        text={moment(sunset).format('h:mm:ss a')}
                        color="white"
                        bodyTextStyles={styles.riseSetText}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        flex: 1,
    },
    cityName: {
        fontSize: 40
    },
    countryName: {
        fontSize: 30
    },
    cityText: {
        justifyContent: "center",
        alignSelf: "center",
        color: "white",
        fontWeight: "bold",
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        color: "white",
        fontSize: 25,
        marginLeft: 7.5,
    },
    riseSetWrapper: {
        justifyContent: 'center',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    }

});

export default City;