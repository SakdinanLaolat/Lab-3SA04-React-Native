import React, { useState } from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import Forecast from './Forecast';
import Constants from 'expo-constants';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        line: '',
        main: '',
        description: '',
        temp: 0
    })

    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View style={styles.highlight}>
                    <Text style={styles.titleText}>Zip code is {props.zipCode}.</Text>
                    <Forecast {...forecastInfo}/>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    highlight: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width:"100%", 
        height:"45%", 
        paddingTop: Constants.statusBarHeight, 
        alignItems: 'center'
    },

    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'white',
        textAlign: 'center'
    }
});