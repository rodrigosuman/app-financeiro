import React, {useState} from 'react';

import {CheckBox} from 'react-native-elements';

import {save} from '~/services/realm';

import {
  Container,
  ViewContainer,
  Input,
  Label,
  FormContainer,
  ButtonSubmit,
  Check,
} from './styles';

export default function NovaCategoria({navigation}) {
  const [descricao, setDescricao] = useState('');
  const [receita, setReceita] = useState(false);
  const {navigate} = navigation;

  return (
    <Container>
      <FormContainer>
        <ViewContainer>
          <Label>Descrição</Label>
          <Input
            value={descricao}
            onChangeText={value => setDescricao(value)}
          />
        </ViewContainer>

        <ViewContainer>
          <CheckBox
            title="Receita"
            checked={receita}
            onPress={() => setReceita(!receita)}
          />
        </ViewContainer>

        <ButtonSubmit
          color="#22d278"
          title="Salvar"
          onPress={() => {
            save('tipos', {
              descricao: descricao,
              receita: receita,
            }).then(() => navigate('Cadastros'));
          }}
        />
      </FormContainer>
    </Container>
  );
}
