import React from 'react';
import {StyleSheet} from 'react-native';

import {FAB} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
  <>
    <Routes />
    <FAB
      style={styles.fab}
      icon={() => {
        return <Icon name="add" size={23} color="#fff" />;
      }}
      onPress={() => console.log('Pressed')}
    />
  </>
);

export default App;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 28,
    right: 0,
    bottom: 57,
  },
});
