import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Setting from './Setting';
import Chat from './Chat';
import Ionicons from 'react-native-vector-icons/AntDesign';
import {Image} from 'react-native';
import Call from './Call';
import Update from './Update';

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
        <Tab.Screen
          name="Update"
          component={Update}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Image
                  source={{
                    uri: 'https://png.pngtree.com/png-clipart/20230817/original/pngtree-update-icon-on-white-background-picture-image_8005789.png',
                  }}
                  resizeMode="contain"
                  style={{width: 35, height: 35}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Image
                  source={{
                    uri: 'https://thumbs.dreamstime.com/b/android-messages-app-logo-meet-google-s-official-texting-chat-web-kyiv-ukraine-june-186059519.jpg',
                  }}
                  resizeMode="contain"
                  style={{width: 35, height: 35}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Call"
          component={Call}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/217/217887.png',
                  }}
                  resizeMode="contain"
                  style={{width: 25, height: 25}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/3405/3405846.png',
                  }}
                  resizeMode="contain"
                  style={{width: 30, height: 30}}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
