import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
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

export default function Lancamentos({navigation}) {
  const {navigate} = navigation;
  const [tipos, setTipos] = useState([]);
  const [fetching, setfetching] = useState(false);

  useEffect(() => {
    getObjects('tipos', setTipos);
  }, []);

  return (
    <Container>
      <Section style={{borderTopColor: '#FBB02D'}}>
        <SectionHeader>
          <SectionDescription>Categorias</SectionDescription>
          <Icon
            name="playlist-add"
            size={30}
            color="#1abc9c"
            onPress={() => navigate('NovaCategoria')}
          />
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
  );
}
