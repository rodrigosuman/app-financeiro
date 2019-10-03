import React, {useState, useEffect} from 'react';

import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ViewSearch,
  SearchInput,
  List,
  TextFeedback,
} from '~/pages/Lancamentos/styles';

import {save, getObjects, deleteAll} from '~/services/realm';

import Lancamento from '~/pages/Lancamento';
import ModalNovoLancamento from '~/pages/ModalNovoLancamento';

export default function Lancamentos() {
  const [input, setInput] = useState('');
  const [lancamentos, setLancamentos] = useState([]);
  const [modalOpen, setOpen] = useState(false);

  useEffect(() => {
    getObjects('lancamentos', setLancamentos);
    // deleteAll();
  }, []);

  return (
    <Container>
      {lancamentos.length ? (
        <>
          <ViewSearch>
            <SearchInput
              placeholder="Buscar lançamento..."
              onChangeText={txt => setInput(txt)}
              onBlur={() => {
                save('lancamentos', {
                  descricao: input,
                  observacoes: 'teste obs',
                  valor: 1000.0,
                  data: Date('2019-01-01'),
                  conciliado: false,
                });
              }}
            />
          </ViewSearch>
          <List
            keyboardShouldPersistTaps="handle"
            data={lancamentos}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => <Lancamento key={item.id} data={item} />}
          />
        </>
      ) : (
        <TextFeedback>Não há lancamentos.</TextFeedback>
      )}

      <ModalNovoLancamento open={modalOpen} setModalVisible={setOpen} />

      <FAB
        style={styles.fab}
        small
        icon={() => {
          return <Icon name="add" size={23} color="#fff" />;
        }}
        onPress={() => setOpen(true)}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    color: '#fff',
  },
});
