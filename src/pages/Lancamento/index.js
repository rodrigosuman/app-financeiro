import React from 'react';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  RegistryTitle,
  RegistryDate,
  RegistryValue,
  Header,
  RegistryDescription,
} from './styles';

export default function Lancamento({data}) {
  return (
    <Container
      style={
        data.pago === true
          ? {borderLeftColor: '#22D278'}
          : {borderLeftColor: '#EF335E'}
      }>
      <Header>
        <RegistryTitle>{data.descricao}</RegistryTitle>
        <RegistryValue> R$ {data.valor.toFixed(2)}</RegistryValue>
      </Header>

      <RegistryDescription>
        {data.tipo.receita === true ? (
          <Icon name="arrow-upward" color="#0DAB76" size={12} />
        ) : (
          <Icon name="arrow-downward" color="#FF3C38" size={12} />
        )}
        {data.tipo.descricao},{' '}
        <RegistryDate>{moment(data.data).format('DD/MM/YYYY')}</RegistryDate>
      </RegistryDescription>
    </Container>
  );
}
