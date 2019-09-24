import React from 'react';

import Lancamento from '~/pages/Lancamento';

import {
  Container,
  ViewSearch,
  SearchInput,
  List,
} from '~/pages/Lancamentos/styles';

import {registrys} from '~/variables/registrys';

export default function Lancamentos() {
  return (
    <Container>
      <ViewSearch>
        <SearchInput placeholder="Buscar lançamento..." />
      </ViewSearch>

      <List
        keyboardShouldPersistTaps="handle"
        data={registrys}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <Lancamento data={item} />}
      />
    </Container>
  );
}
