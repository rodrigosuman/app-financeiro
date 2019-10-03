import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {headerStyle} from '~/variables/headerStyle';

import Cadastros from '~/pages/Cadastros';

const mainNavigation = createStackNavigator(
  {
    Cadastros: {
      screen: Cadastros,
      navigationOptions: () => ({
        title: 'Cadastros',
        headerStyle: headerStyle,
        headerTintColor: '#fff',
      }),
    },
  },
  {
    initialRouteName: 'Cadastros',
  },
);

const RoutesCadastros = createAppContainer(mainNavigation);

export default RoutesCadastros;
