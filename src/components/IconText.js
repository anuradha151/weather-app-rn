import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Feather } from '@expo/vector-icons';

const IconText = (props) => {

    const { icon, text, color, bodyTextStyles } = props;

    return (
        <View>
            <Feather name={icon} size={24} color={color} />
            <Text style={[styles.textTheme, bodyTextStyles]}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textTheme: {
        fontWeight: "bold",
    },
});

export default IconText;