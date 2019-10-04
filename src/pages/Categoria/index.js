import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  RegistryTitle,
  RegistryDescription,
  Actions,
} from './styles';

function description(receita) {
  if (receita === true) {
    return {
      color: '#1ABC9C',
      text: 'Receita',
    };
  } else {
    return {
      color: '#FB6107',
      text: 'Despesa',
    };
  }
}

export default function Categoria({data}) {
  let {color, text} = description(data.receita);

  return (
    <Container>
      <Header>
        <RegistryTitle>{data.descricao}</RegistryTitle>

        <Actions>
          <Icon size={22} name="edit" color="#5F85BA" />
        </Actions>
      </Header>
      <RegistryDescription style={{color: color}}>{text}</RegistryDescription>
    </Container>
  );
}
