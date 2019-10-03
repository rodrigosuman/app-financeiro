import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Main from '~/pages/Main';

const mainNavigation = createStackNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: () => ({
        title: 'Home',
        headerStyle: {
          backgroundColor: '#1abc9c',
        },
        headerTintColor: '#fff',
      }),
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const RoutesMain = createAppContainer(mainNavigation);

export default RoutesMain;
