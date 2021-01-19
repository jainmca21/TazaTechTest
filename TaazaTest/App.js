/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './screens/Home';
import { Detail } from './screens/Detail';



const stack = createStackNavigator()

const HomeStack = ()=>{
  return(
    <NavigationContainer>
    <stack.Navigator initialRouteName='Home' mode='modal' >
      <stack.Screen name='Home' component = {Home}/>
      <stack.Screen name='Detail' component = {Detail}/>
    </stack.Navigator>
  </NavigationContainer>
  )
}


const App: () => React$Node = () => {
  return (
    <>
    <HomeStack/>
    </>
  );
};


export default App;
