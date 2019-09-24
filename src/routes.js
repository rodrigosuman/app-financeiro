import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Main from '~/pages/Main';
import Lancamentos from '~/pages/Lancamentos';
import Graficos from '~/pages/Graficos';
import Cadastros from '~/pages/Cadastros';

const mainNavigation = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: () => ({
        tabBarIcon: <Icon name="home" size={20} color="#fff" />,
        tabBarColor: '#574BDD',
      }),
    },
    Lançamentos: {
      screen: Lancamentos,
      navigationOptions: () => ({
        tabBarIcon: <Icon name="list" size={20} color="#fff" />,
        tabBarColor: '#2A2082',
      }),
    },
    Gráficos: {
      screen: Graficos,
      navigationOptions: () => ({
        tabBarIcon: <Icon name="pie-chart" size={20} color="#fff" />,
        tabBarColor: '#372E9B',
      }),
    },
    Cadastros: {
      screen: Cadastros,
      navigationOptions: () => ({
        tabBarIcon: <Icon name="cog" size={20} color="#fff" />,
        tabBarColor: '#473EAD',
      }),
    },
  },
  {
    shifting: true,
    initialRouteName: 'Lançamentos',
  },
);

const Routes = createAppContainer(mainNavigation);

export default Routes;
