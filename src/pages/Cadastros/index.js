import React from 'react';
import {Text} from 'react-native';
import {Container} from '~/pages/Cadastros/styles';

// import { Container } from './styles';

export default function Lancamentos() {
  return (
    <Container>
      <Text style={{color: '#5C6672', fontSize: 20, textAlign: 'center'}}>
        Cadastros
      </Text>
      <Text style={{color: '#FE9339', fontSize: 15, textAlign: 'center'}}>
        Por Rodrigo Suman
      </Text>
    </Container>
  );
}