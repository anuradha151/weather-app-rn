import React from "react";
import { View, Text, StyleSheet, ImageBackground, StatusBar } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import IconText from "../components/IconText";

const City = () => {



    return (
        <SafeAreaView style={styles.wrapper}>
            <ImageBackground source={require('../../assets/city-back.jpg')} style={styles.image}>
                <Text style={[styles.cityText, styles.cityName]}>Galle</Text>
                <Text style={[styles.cityText, styles.countryName]}>Sri Lanka</Text>
                <View style={styles.populationWrapper}>
                    <IconText icon="user" text="8000" color="black" bodyTextStyles={styles.populationText} />
                </View>
                <View style={styles.riseSetWrapper}>
                    <IconText icon="sunrise" text="10:46:56am" color="black" bodyTextStyles={styles.riseSetText} />
                </View>
                <View style={styles.riseSetWrapper}>
                    <IconText icon="sunset" text="18:30:34pm" color="black" bodyTextStyles={styles.riseSetText} />
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    populationText: {
        color: "black",
        fontSize: 25,
        marginLeft: 7.5,
    },
    riseSetWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: "black",
        fontWeight: "bold"
    }

});

export default City;