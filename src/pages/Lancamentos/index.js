import React, {useState, useEffect} from 'react';

import {RefreshControl} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, List, TextFeedback} from './styles';

import {getObjects, deleteAll} from '~/services/realm';

import Lancamento from '~/pages/Lancamento';

export default function Lancamentos({navigation}) {
  const [fetching, setfetching] = useState(false);
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
      <List
        onEndReachedThreshold={0.3}
        onEndReached={() => fetchingList()}
        refreshControl={
          <RefreshControl
            refreshing={fetching}
            onRefresh={() => fetchingList()}
          />
        }
        keyboardShouldPersistTaps="handle"
        data={lancamentos}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <Lancamento key={item.id} data={item} callBack={fetchingList} />
        )}
      />

      <FloatingAction
        actions={actions}
        color="#F7385E"
        onPressItem={name => {
          switch (name) {
            case 'bt_receita':
              navigate('NovoLancamento', {
                receita: true,
                callBack: fetchingList,
              });
              break;

            case 'bt_despesa':
              navigate('NovoLancamento', {
                receita: false,
                callBack: fetchingList,
              });
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
    icon: <Icon color="#fff" name="arrow-upward" size={22} />,
    color: '#00FFFF',
    name: 'bt_receita',
    position: 2,
  },
  {
    text: 'Despesa',
    icon: <Icon color="#fff" name="arrow-downward" size={22} />,
    color: '#FFB800',
    name: 'bt_despesa',
    position: 1,
  },
];
