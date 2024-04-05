import React from "react";
import { View , Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const ErrorItem = () => {
    return (
        <View style={styles.container}>
            <Feather name="frown" size={100} color="white" />
            <Text style={styles.text}>Something went wrong!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 30,
        marginHorizontal: 10,
        textAlign: 'center'
    }
})

export default ErrorItem;