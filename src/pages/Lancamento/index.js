import React from 'react';

import {
  Container,
  RegistryTitle,
  RegistryDate,
  RegistryValue,
  Header,
} from './styles';

export default function Lancamento({data}) {
  return (
    <Container>
      <Header>
        <RegistryTitle>{data.title}</RegistryTitle>
        <RegistryValue>{data.value}</RegistryValue>
      </Header>
      <RegistryDate>{data.date}</RegistryDate>
    </Container>
  );
}
