import React from 'react';

import {Text, StatusBar} from 'react-native';

import {Container} from '~/pages/Main/styles';

const Main = () => (
  <>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <Container>
      <Text style={{color: '#fff', textAlign: 'center'}}>
        App para controle financeiro utilizando ReactNative e Realm
      </Text>
    </Container>
  </>
);

export default Main;
