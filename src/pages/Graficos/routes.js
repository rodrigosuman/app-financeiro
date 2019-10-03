import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {headerStyle} from '~/variables/headerStyle';

import Graficos from '~/pages/Graficos';

const mainNavigation = createStackNavigator(
  {
    Graficos: {
      screen: Graficos,
      navigationOptions: () => ({
        title: 'Gráficos',
        headerStyle: headerStyle,
        headerTintColor: '#fff',
      }),
    },
  },
  {
    initialRouteName: 'Graficos',
  },
);

const RoutesGraficos = createAppContainer(mainNavigation);

export default RoutesGraficos;
