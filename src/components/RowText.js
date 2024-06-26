import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RowText = (props) => {

    const { messageOne, messageTwo, containerStyles, messageOneStyles, messageTwoStyles } = props;

    return (
        <View style={containerStyles}>
            <Text style={messageOneStyles}>{messageOne}</Text>
            <Text style={messageTwoStyles}>{messageTwo}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    rowLayout: {
        flexDirection: 'row'
    },
    text: {
        color: "black",
        fontSize: 20,
    }
});

export default RowText;

