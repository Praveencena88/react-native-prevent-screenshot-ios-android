import * as React from 'react';

import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DetailsScreen } from './SecureScreen.tsx';
import { HomeScreen } from './HomeScreen.tsx';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: '#1E90FF',
          headerStyle: { backgroundColor: '#1E90FF' },
          
        }}
      >
      <Tab.Screen name="Home" component={HomeScreen}  options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon name="home-account" color={color} size={30} />
          ),
        }}/>
      <Tab.Screen name="Secure Screen" component={DetailsScreen}  options={{
          tabBarLabel: 'Secure Screen',
          tabBarIcon: ({color}) => (
            <Icon name="lock-open" color={color} size={28} />
          ),
        }}/>
    </Tab.Navigator>
  );
}


export default function App() {

  return (
    <NavigationContainer>
        <MyTabs/>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
