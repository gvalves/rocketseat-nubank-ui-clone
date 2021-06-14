import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from 'screens/MainScreen';

// const Stack = createStackNavigator();

const App: React.FC = () => (
  <NavigationContainer>
    {/* <Stack.Navigator>
      <Stack.Screen name="Home" component={MainScreen} />
    </Stack.Navigator> */}
    <MainScreen />
  </NavigationContainer>
);

export default App;
