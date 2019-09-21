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
      <Text style={{color: '#5C6672', fontSize: 20, textAlign: 'center'}}>
        App para controle financeiro utilizando ReactNative e Realm
      </Text>
      <Text style={{color: '#FE9339', fontSize: 15, textAlign: 'center'}}>
        Por Rodrigo Suman
      </Text>
    </Container>
  </>
);

export default Main;
