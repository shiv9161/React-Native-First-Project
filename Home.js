import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FadeInLeft } from 'react-native-reanimated';

const Home = ({navigation}) => {
  return (
    <View style={style.main}>
    <Text style={style.homeHeading}>New Movie Collection</Text>
    <TouchableOpacity  onPress={() =>{navigation.navigate('Status')}}>
        <Text  style={style.lastHeading}>New Release</Text>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() =>{navigation.navigate('Notifi')}}>
        <Text  style={[style.lastHeading, style.notifiHead]}>Check Notification</Text>
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
        fontWeight: '800',
    },
    lastHeading: {
        fontSize: 20, 
        borderStyle: 'solid', 
        color: 'orange', 
        borderColor: 'black', 
        borderWidth: 1, 
        borderRadius: 5,
        marginTop: 20,
    },
    notifiHead:{
        color: 'red',
        padding: '50px'
    }
})