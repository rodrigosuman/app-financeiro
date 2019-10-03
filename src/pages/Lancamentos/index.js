import React, {useState, useEffect} from 'react';

import {FloatingAction} from 'react-native-floating-action';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Container, ViewSearch, SearchInput, List, TextFeedback} from './styles';

import {save, getObjects} from '~/services/realm';

import Lancamento from '~/pages/Lancamento';
import NovoLancamento from '~/pages/NovoLancamento';

export default function Lancamentos() {
  const [input, setInput] = useState('');
  const [lancamentos, setLancamentos] = useState([]);
  const [receita, setReceita] = useState(false);
  const [modalLancamentoOpen, setOpenLancamento] = useState(false);

  useEffect(() => {
    getObjects('lancamentos', setLancamentos);
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

      <NovoLancamento
        open={modalLancamentoOpen}
        setModalVisible={setOpenLancamento}
        receita={receita}
      />

      <FloatingAction
        actions={actions}
        buttonSize={40}
        onPressItem={name => {
          switch (name) {
            case 'bt_receita':
              setReceita(true);
              setOpenLancamento(true);
              break;

            case 'bt_despesa':
              setReceita(false);
              setOpenLancamento(true);
              break;

            default:
              setOpenLancamento(false);
              break;
          }
        }}
      />
    </Container>
  );
}

const actions = [
  {
    text: 'Receita',
    icon: <Icon color="#fff" name="line-chart" />,
    color: '#2ECC71',
    name: 'bt_receita',
    position: 1,
  },
  {
    text: 'Despesa',
    icon: <Icon color="#fff" name="level-down" />,
    color: '#EE2E31',
    name: 'bt_despesa',
    position: 2,
  },
];
