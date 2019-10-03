import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import RoutesMain from '~/pages/Main/routes';

import Lancamentos from '~/pages/Lancamentos';
import Graficos from '~/pages/Graficos';
import Cadastros from '~/pages/Cadastros';

const mainNavigation = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: RoutesMain,
      navigationOptions: () => ({
        tabBarIcon: <Icon name="home" size={23} color="#559680" />,
      }),
    },
    Transações: {
      screen: Lancamentos,
      navigationOptions: () => ({
        tabBarIcon: <Icon name="list" size={23} color="#559680" />,
      }),
    },
    Gráficos: {
      screen: Graficos,
      navigationOptions: () => ({
        tabBarIcon: <Icon name="pie-chart" size={23} color="#559680" />,
      }),
    },
    Cadastros: {
      screen: Cadastros,
      navigationOptions: () => ({
        tabBarIcon: <Icon name="cog" size={23} color="#559680" />,
      }),
    },
  },
  {
    shifting: true,
    initialRouteName: 'Home',
    activeColor: '#666',
    barStyle: {
      backgroundColor: '#fff',
    },
  },
);

const Routes = createAppContainer(mainNavigation);

export default Routes;
