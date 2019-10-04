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

function IconCategoria({receita}) {
  let icon = <></>;

  if (receita) {
    icon = <Icon name="arrow-upward" color="#0DAB76" size={12} />;
  } else {
    icon = <Icon name="arrow-downward" color="#FF3C38" size={12} />;
  }

  return icon;
}

function CategoriaDescricao({descricao}) {
  return <>{descricao}, </>;
}

export default function Lancamento({data}) {
  const {tipo} = data;

  console.tron.log(tipo);

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
        {tipo ? (
          <>
            <IconCategoria receita={tipo.receita} />
            <CategoriaDescricao descricao={tipo.descricao} />
          </>
        ) : (
          <></>
        )}
        <RegistryDate>{moment(data.data).format('DD/MM/YYYY')}</RegistryDate>
      </RegistryDescription>
    </Container>
  );
}
