import React from 'react';
import moment from 'moment';
import {
  Container,
  RegistryTitle,
  RegistryDate,
  RegistryValue,
  Header,
} from './styles';

export default function Lancamento({data}) {
  console.tron.log(data);

  return (
    <Container
      style={
        data.conciliado
          ? {borderLeftColor: '#22D278'}
          : {borderLeftColor: '#EF335E'}
      }>
      <Header>
        <RegistryTitle>{data.descricao}</RegistryTitle>
        <RegistryValue>R$ {data.valor.toFixed(2)}</RegistryValue>
      </Header>
      <RegistryDate>{moment(data.data).format('DD/MM/YYYY')}</RegistryDate>
    </Container>
  );
}
