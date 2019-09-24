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
        tabBarIcon: <Icon name="home" size={23} color="#22D278" />,
      }),
    },
    Lançamentos: {
      screen: Lancamentos,
      navigationOptions: () => ({
        tabBarIcon: <Icon name="list" size={23} color="#22D278" />,
      }),
    },
    Gráficos: {
      screen: Graficos,
      navigationOptions: () => ({
        tabBarIcon: <Icon name="pie-chart" size={23} color="#22D278" />,
      }),
    },
    Cadastros: {
      screen: Cadastros,
      navigationOptions: () => ({
        tabBarIcon: <Icon name="cog" size={23} color="#22D278" />,
      }),
    },
  },
  {
    shifting: true,
    initialRouteName: 'Lançamentos',
    activeColor: '#666',
    barStyle: {backgroundColor: '#111'},
  },
);

const Routes = createAppContainer(mainNavigation);

export default Routes;
