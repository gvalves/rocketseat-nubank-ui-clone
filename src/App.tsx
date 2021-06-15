import React from 'react';
import { StatusBar } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '~/screens/MainScreen';

import Colors from '~/constants/Colors';

// const Stack = createStackNavigator();

const App: React.FC = () => (
  <NavigationContainer>
    {/* <Stack.Navigator>
      <Stack.Screen name="Home" component={MainScreen} />
    </Stack.Navigator> */}
    <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
    <MainScreen />
  </NavigationContainer>
);

export default App;
