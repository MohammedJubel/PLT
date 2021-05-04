import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AcceptScreen from '../screens/AcceptScreen';
import DeniedScreen from '../screens/DeniedScreen';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen
          name='Denied'
          component={DeniedScreen}
          options={{
            headerTitleAlign: 'center',
            headerLeft: () => null,
          }}
        />
        <Stack.Screen
          name='Accepted'
          component={AcceptScreen}
          options={{
            headerTitleAlign: 'center',
            headerLeft: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
