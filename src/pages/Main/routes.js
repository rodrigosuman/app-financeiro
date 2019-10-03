import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '~/pages/Main';

const mainNavigation = createStackNavigator(
  {
    Dashboard: {
      screen: Main,
      navigationOptions: () => ({
        title: 'Dashboard',
        headerStyle: {
          backgroundColor: '#1abc9c',
        },
        headerTintColor: '#fff',
      }),
    },
  },
  {
    initialRouteName: 'Dashboard',
  },
);

const RoutesMain = createAppContainer(mainNavigation);

export default RoutesMain;
