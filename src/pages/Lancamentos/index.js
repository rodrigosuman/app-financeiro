import React, {useState, useEffect} from 'react';

import {RefreshControl} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Container, List, TextFeedback} from './styles';

import {save, getObjects, deleteAll} from '~/services/realm';

import Lancamento from '~/pages/Lancamento';

export default function Lancamentos({navigation}) {
  const [fetching, setfetching] = useState(false);

  const [input, setInput] = useState('');
  const [lancamentos, setLancamentos] = useState([]);
  const {navigate} = navigation;

  useEffect(() => {
    fetchingList();
  }, []);

  function fetchingList() {
    getObjects('lancamentos', setLancamentos, false, '', true, 'data', true);
  }

  return (
    <Container>
      {lancamentos.length ? (
        <>
          <List
            onEndReachedThreshold={0.3}
            onEndReached={() => fetchingList}
            refreshControl={
              <RefreshControl
                refreshing={fetching}
                onRefresh={() => fetchingList}
              />
            }
            keyboardShouldPersistTaps="handle"
            data={lancamentos}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => <Lancamento key={item.id} data={item} />}
          />
        </>
      ) : (
        <TextFeedback>Não há lancamentos.</TextFeedback>
      )}

      <FloatingAction
        actions={actions}
        buttonSize={40}
        onPressItem={name => {
          switch (name) {
            case 'bt_receita':
              navigate('NovoLancamento', {receita: true});
              break;

            case 'bt_despesa':
              navigate('NovoLancamento', {receita: false});
              break;

            default:
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
    color: '#1abc9c',
    name: 'bt_receita',
    position: 1,
  },
  {
    text: 'Despesa',
    icon: <Icon color="#fff" name="level-down" />,
    color: '#FF431B',
    name: 'bt_despesa',
    position: 2,
  },
];
