import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import RoutesMain from '~/pages/Main/routes';

import Lancamentos from '~/pages/Lancamentos';
import Graficos from '~/pages/Graficos';
import Cadastros from '~/pages/Cadastros';

let IconBar = (focused, icon) => {
  return <Icon name={icon} size={23} color={focused ? '#1abc9c' : '#aaa'} />;
};

const mainNavigation = createMaterialBottomTabNavigator(
  {
    Dashboard: {
      screen: RoutesMain,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => {
          return IconBar(focused, 'dashboard');
        },
      }),
    },
    Transações: {
      screen: Lancamentos,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => {
          return IconBar(focused, 'view-list');
        },
      }),
    },
    Gráficos: {
      screen: Graficos,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => {
          return IconBar(focused, 'pie-chart');
        },
      }),
    },
    Cadastros: {
      screen: Cadastros,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => {
          return IconBar(focused, 'settings');
        },
      }),
    },
  },
  {
    initialRouteName: 'Dashboard',
    activeColor: '#666',
    barStyle: {
      backgroundColor: '#fff',
    },
  },
);

const Routes = createAppContainer(mainNavigation);

export default Routes;
