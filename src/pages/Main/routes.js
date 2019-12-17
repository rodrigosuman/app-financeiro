import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {headerStyle} from '~/variables/headerStyle';

import Main from '~/pages/Main';

const mainNavigation = createStackNavigator(
  {
    Dashboard: {
      screen: Main,
      navigationOptions: () => ({
        title: 'Dashboard',
        headerStyle: headerStyle,
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
