import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity} from 'react-native';
import HomeScreen from '../screens/HomeScreen';


function PlaceholderScreen({name}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{name} Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();8

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let icon;
          if (route.name === 'Feed') icon = '🏠';
          else if (route.name === 'Search') icon = '🔍';
          else if (route.name === 'Post') icon = '➕';
          else if (route.name === 'Chat') icon = '💬';
          else if (route.name === 'Profile') icon = '👤';

          return <Text style={{fontSize: size, color}}>{icon}</Text>;
        },
        tabBarActiveTintColor: '#4f46e5',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {height: 60, paddingBottom: 5},
      })}>
      <Tab.Screen name="Feed" component={HomeScreen} />
      <Tab.Screen
        name="Search"
        children={() => <PlaceholderScreen name="Search" />}
      />
      <Tab.Screen
        name="Post"
        children={() => <PlaceholderScreen name="Post" />}
      />
      <Tab.Screen
        name="Chat"
        children={() => <PlaceholderScreen name="Chat" />}
      />
      <Tab.Screen
        name="Profile"
        children={() => <PlaceholderScreen name="Profile" />}
      />
    </Tab.Navigator>
  );
}
