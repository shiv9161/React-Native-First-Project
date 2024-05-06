import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Setting from './Setting';
import Chat from './Chat';
import Ionicons from 'react-native-vector-icons/AntDesign';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabBased() {
  return (
    <NavigationContainer>
      <Tab.Navigator  
    //   options={({ route }) => ({
    //       tabBarIcon: ({ focused, color, size }) => {

    //         return <Ionicons name='stepforward'  size={20} color={'black'} />;
    //      0 },
    //       tabBarActiveTintColor: 'tomato',
    //       tabBarInactiveTintColor: 'gray',
    //     })} 
        
        

        // options={{
        //     tabBarIcon: ({ focused, color, size }) => {

        //         return <Ionicons name='stepforward'  size={20} color={'black'} />;
        //      0 },  
        // }}
        >
      <Tab.Screen name="Chat" component={Chat}
                options={{  
                    tabBarIcon: ({ focused, color, size }) => {
                        // return <Ionicons name='stepforward'  size={20} color={'black'} />;
                        return <Image source={{ uri : 'https://static.vecteezy.com/system/resources/previews/005/337/802/non_2x/icon-symbol-chat-outline-illustration-free-vector.jpg'}} resizeMode='contain' style={{width:35 , height:35}}/>
                      },  
                }}
      />
      <Tab.Screen name="Setting" component={Setting} 
      options={{  
        tabBarIcon: ({ focused, color, size }) => {
            // return <Ionicons name='stepforward'  size={20} color={'black'} />;
            return <Image source={{ uri : 'https://static-00.iconduck.com/assets.00/settings-icon-2048x2046-cw28eevx.png'}} resizeMode='contain' style={{width:20 , height:20}}/>
          },  
    }}
       />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
