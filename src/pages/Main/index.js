import React from 'react';

import {Text, StatusBar} from 'react-native';

import {Container} from '~/pages/Main/styles';

const Main = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#2d324c" />
    <Container>
      <Text style={{color: '#fff'}}>
        App para controle financeiro utilizando ReactNative e Realm
      </Text>
    </Container>
  </>
);

export default Main;
