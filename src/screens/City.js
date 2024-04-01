import React from "react";
import { View, Text, StyleSheet, ImageBackground, StatusBar } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const City = () => {

    const { wrapper, image, cityName, countryName } = styles;

    return (
        <SafeAreaView style={wrapper}>
            <ImageBackground source={require('../../assets/city-back.jpg')} style={image}>
                <Text style={cityName}>Galle</Text>
                <Text style={countryName}>Sri Lanka</Text>
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
        justifyContent: "center",
        alignSelf: "center",
        color: "white",
        fontSize: 40,
        fontWeight: "bold"
    },
    countryName: {
        justifyContent: "center",
        alignSelf: "center",
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    },

});

export default City;