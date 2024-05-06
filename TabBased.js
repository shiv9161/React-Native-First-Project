import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Setting from './Setting';
import Chat from './Chat';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabBased() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Chat') {
              iconName = focused ? 'chatbox' : 'chatbox-outline'; // Updated icon names
            } else if (route.name === 'Setting') {
              iconName = focused ? 'settings' : 'settings-outline'; // Updated icon names
            }

            // Return Ionicons component with the calculated iconName
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
