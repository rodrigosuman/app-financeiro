import React from 'react';
import FAB from 'react-native-fab';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

      <FAB
        buttonColor="#2A2082"
        iconTextColor="#FFFFFF"
        onClickAction={() => {
          console.log('FAB pressed');
        }}
        visible={true}
        iconTextComponent={<Icon name="add" />}
      />
    </Container>
  );
}
