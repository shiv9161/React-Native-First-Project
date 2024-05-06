import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={style.main}>
    <Text style={style.homeHeading}>Home Screen</Text>
    <TouchableOpacity  onPress={() =>{navigation.navigate('Status')}}>
        <Text  style={style.lastHeading}>See Status--</Text>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() =>{navigation.navigate('Notifi')}}>
        <Text  style={[style.lastHeading, style.notifiHead]}>Check Notification--</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Home;

const style = StyleSheet.create({
    main:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    homeHeading: {
        fontSize: 30,
        color: 'green',
        fontWeight: '800'
    },
    lastHeading: {
        fontSize: 20, 
        borderStyle: 'solid', 
        color: 'orange', 
        borderColor: 'black', 
        borderWidth: 1, 
        borderRadius: 10
    },
    notifiHead:{
        color: 'red',
    }
})