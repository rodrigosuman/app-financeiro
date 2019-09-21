import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Main from '~/pages/Main';

const mainNavigation = createDrawerNavigator({
  Home: {
    screen: Main,
  },
});

const Routes = createAppContainer(mainNavigation);

export default Routes;
