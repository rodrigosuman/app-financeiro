import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

  useEffect(() => {
    // deleteAll();
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
          keyboardShouldPersistTaps="handle"
          data={tipos}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Categoria key={item.id} data={item} />}
        />
      </Section>
    </Container>
  );
}
