import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {screens} from '../config';
import {Home, ProductDetail, Cart} from '../screens';

const RootStack = createStackNavigator();
const AppNavigator = props => {
  return (
    <>
      <RootStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Home'}>
        <RootStack.Screen name={screens.home} component={Home} />
        <RootStack.Screen name={screens.cart} component={Cart} />
        <RootStack.Screen name={screens.detail} component={ProductDetail} />
      </RootStack.Navigator>
    </>
  );
};

export default AppNavigator;
