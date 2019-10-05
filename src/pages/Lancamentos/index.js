import React, {useState, useEffect} from 'react';
import {RefreshControl} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {getObjects} from '~/services/realm';

import Lancamento from '~/pages/Lancamento';

import {
  Container,
  List,
  Header,
  Mes,
  ResumoDoMes,
  Content,
  TextFeedback,
} from './styles';

export default function Lancamentos({navigation}) {
  const [fetching, setfetching] = useState(false);
  const [lancamentos, setLancamentos] = useState([]);
  const {navigate} = navigation;

  const lancamento = {
    id: null,
    valor: 0,
    descricao: '',
    data: new Date(),
    tipo: {
      id: 1,
    },
    observacoes: '',
    pago: false,
  };

  useEffect(() => {
    fetchingList();
  }, []);

  function fetchingList() {
    getObjects('lancamentos', setLancamentos, false, '', true, 'data', true);
  }

  return (
    <>
      <Header>
        <Icon name="chevron-left" color="#fff" size={23} />
        <Mes>Setembro, 2019</Mes>
        <Icon name="chevron-right" color="#fff" size={23} />
      </Header>

      <ResumoDoMes>
        <Content>
          <Icon name="arrow-downward" color="#FFB800" size={23} />
          <TextFeedback>R$ 0.00</TextFeedback>
        </Content>

        <Content>
          <Icon name="arrow-upward" color="#00FFFF" size={23} />
          <TextFeedback>R$ 3900.00</TextFeedback>
        </Content>

        <Content>
          <Icon name="chevron-right" color="#2E008B" size={23} />
          <TextFeedback>R$ 3900.00</TextFeedback>
        </Content>
      </ResumoDoMes>

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
            <Lancamento
              key={item.id}
              data={item}
              callBack={fetchingList}
              navigation={navigation}
            />
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
                  insert: true,
                  lancamento: lancamento,
                });
                break;

              case 'bt_despesa':
                navigate('NovoLancamento', {
                  receita: false,
                  callBack: fetchingList,
                  insert: true,
                  lancamento: lancamento,
                });
                break;

              default:
                break;
            }
          }}
        />
      </Container>
    </>
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
