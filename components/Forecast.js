import React from "react";
import { Text, View, StyleSheet } from 'react-native'

export default function Forecast(props) {
    return (
        <View >
            <Text>{props.line}</Text>
            <Text style={style.Text}>main</Text>
            <Text style={style.normalText}>{props.main}</Text>
            <Text>{props.line}</Text>
            <Text style={style.desText}>description</Text>
            <Text style={style.normalText}>{props.description}</Text>
            <View style= {{
                flexDirection: "row",
                justifyContent: 'center',
            }}></View>
            <Text style={style.Text}>{props.temp} <Text style={style.normalText}>°C</Text></Text>
        </View>
    );
}

const style = StyleSheet.create(
    {
        normalText: {
            textAlign: 'center',
            fontSize: 20,
            fontWeight: "bold",
            color: 'white',
            fontWeight: '300'

        },

        Text: {
            fontSize: 35, 
            fontWeight: "bold", 
            color: 'white', 
            textAlign: 'center',
            lineHeight: 60,
            fontWeight: '400'
        },

        desText: {
            textAlign: 'center',
            fontSize: 20,
            fontWeight: "bold",
            color: 'white',
            fontWeight: '400'

        }
    }
) 