import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {FloatingAction} from 'react-native-floating-action';
import {RefreshControl} from 'react-native';

import {getObjects} from '~/services/realm';

import {
  Container,
  Section,
  SectionHeader,
  SectionDescription,
  SectionContent,
} from './styles';

import Categoria from '~/pages/Categoria';

export default function Cadastros({navigation}) {
  const {navigate} = navigation;
  const [tipos, setTipos] = useState([]);
  const [fetching, setfetching] = useState(false);

  useEffect(() => {
    getObjects('tipos', setTipos);
  }, []);

  return (
    <>
      <Container>
        <Section style={{borderTopColor: '#FBB02D'}}>
          <SectionHeader>
            <SectionDescription>Categorias</SectionDescription>
          </SectionHeader>

          <SectionContent
            onEndReachedThreshold={0.3}
            onEndReached={() => getObjects('tipos', setTipos)}
            refreshControl={
              <RefreshControl
                refreshing={fetching}
                onRefresh={() => getObjects('tipos', setTipos)}
              />
            }
            keyboardShouldPersistTaps="handle"
            data={tipos}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => <Categoria key={item.id} data={item} />}
          />
        </Section>
      </Container>

      <FloatingAction
        actions={actions}
        color="#F7385E"
        onPressItem={name => {
          switch (name) {
            case 'bt_categoria':
              navigate('NovaCategoria');
              break;

            default:
              break;
          }
        }}
      />
    </>
  );
}

const actions = [
  {
    text: 'Categoria',
    icon: <Icon color="#fff" name="playlist-add" size={22} />,
    color: '#00FFFF',
    name: 'bt_categoria',
    position: 1,
  },
];
