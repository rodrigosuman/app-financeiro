import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import Main from '~/pages/Main';
import Lancamentos from '~/pages/Lancamentos';
import Graficos from '~/pages/Graficos';
import Cadastros from '~/pages/Cadastros';

import {
  BACKGROUND_COLOR_DN,
  COLOR_INACTIVE_DN,
  COLOR_ICON_DN,
} from '~/config/colors';

const mainNavigation = createDrawerNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: () => ({
        drawerIcon: <Icon name="home" size={20} color={COLOR_ICON_DN} />,
      }),
    },
    Lançamentos: {
      screen: Lancamentos,
      navigationOptions: () => ({
        drawerIcon: <Icon name="list" size={20} color={COLOR_ICON_DN} />,
      }),
    },
    Gráficos: {
      screen: Graficos,
      navigationOptions: () => ({
        drawerIcon: <Icon name="pie-chart" size={20} color={COLOR_ICON_DN} />,
      }),
    },
    Cadastros: {
      screen: Cadastros,
      navigationOptions: () => ({
        drawerIcon: <Icon name="cog" size={20} color={COLOR_ICON_DN} />,
      }),
    },
  },
  {
    initialRouteName: 'Home',
    drawerBackgroundColor: BACKGROUND_COLOR_DN,
    drawerPosition: 'left',
    contentOptions: {
      inactiveTintColor: COLOR_INACTIVE_DN,
    },
  },
);

const Routes = createAppContainer(mainNavigation);

export default Routes;
