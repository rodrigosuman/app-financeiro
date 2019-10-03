import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {headerStyle} from '~/variables/headerStyle';

import Lancamentos from '~/pages/Lancamentos';
import NovoLancamento from '~/pages/NovoLancamento';

const mainNavigation = createStackNavigator(
  {
    Lancamentos: {
      screen: Lancamentos,
      navigationOptions: () => ({
        title: 'Lancamentos',
        headerStyle: headerStyle,
        headerTintColor: '#fff',
      }),
    },
    NovoLancamento: {
      screen: NovoLancamento,
      navigationOptions: () => ({
        title: 'Novo Lancamento',
        headerStyle: headerStyle,
        headerTintColor: '#fff',
      }),
    },
  },
  {
    initialRouteName: 'Lancamentos',
  },
);

const RoutesLancamentos = createAppContainer(mainNavigation);

export default RoutesLancamentos;
