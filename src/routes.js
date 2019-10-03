import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import RoutesMain from '~/pages/Main/routes';
import RoutesLancamentos from '~/pages/Lancamentos/routes';
import RoutesGraficos from '~/pages/Graficos/routes';
import RoutesCadastros from '~/pages/Cadastros/routes';

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
      screen: RoutesLancamentos,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => {
          return IconBar(focused, 'view-list');
        },
      }),
    },
    Gráficos: {
      screen: RoutesGraficos,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => {
          return IconBar(focused, 'pie-chart');
        },
      }),
    },
    Cadastros: {
      screen: RoutesCadastros,
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
