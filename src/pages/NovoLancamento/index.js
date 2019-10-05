import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Textarea, DatePicker} from 'native-base';
// import DatePicker from 'react-native-datepicker';
import Moment from 'moment';

import {getObjects, save, getObject} from '~/services/realm';

import {
  Container,
  ViewContainer,
  Input,
  Label,
  Picker,
  FormContainer,
  ButtonSubmit,
} from './styles';

export default function NovoLancamento({navigation}) {
  const [tipos, setTipos] = useState([]);

  const [valor, setValor] = useState(0);
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState(new Date());
  const [categoria, setCategoria] = useState(1);
  const [categoriaObj, setCategoriaObj] = useState(
    getObject(categoria, setCategoriaObj),
  );
  const [observacoes, setObservacoes] = useState('');
  const [pago, setPago] = useState(false);

  const {navigate, state} = navigation;

  const {receita, callBack} = state.params;

  useEffect(() => {
    getObjects('tipos', setTipos, true, `receita = ${receita}`);
  }, [receita]);

  return (
    <Container>
      <FormContainer>
        <ViewContainer>
          <Label>Valor</Label>
          <Input
            keyboardType="decimal-pad"
            onChangeText={value => setValor(parseFloat(value))}
          />
        </ViewContainer>

        <ViewContainer>
          <Label>Descrição</Label>
          <Input
            value={descricao}
            onChangeText={value => setDescricao(value)}
          />
        </ViewContainer>

        <ViewContainer>
          <Label>Data</Label>
          <DatePicker
            defaultDate={data}
            locale={'br'}
            modalTransparent={true}
            animationType={'slide'}
            androidMode={'spinner'}
            placeHolderText=""
            onDateChange={value => setData(value)}
            disabled={false}
          />
        </ViewContainer>

        <ViewContainer>
          <Label>Categoria</Label>
          <Picker
            selectedValue={categoria}
            onValueChange={value => {
              setCategoria(value);
              setCategoriaObj(getObject('tipos', value, setCategoriaObj));
            }}>
            {tipos.map((t, key) => {
              return <Picker.Item key={key} label={t.descricao} value={t.id} />;
            })}
          </Picker>
        </ViewContainer>

        <ViewContainer>
          <CheckBox
            title="Pago"
            checked={pago}
            onPress={() => setPago(!pago)}
          />
        </ViewContainer>

        <ViewContainer>
          <Label>Observações</Label>
          <View>
            <Textarea
              value={observacoes}
              rowSpan={3}
              onFocus={() => {}}
              returnKeyType={'default'}
              blurOnSubmit={false}
              onChangeText={texto => setObservacoes(texto)}
              style={{width: '100%'}}
            />
          </View>
        </ViewContainer>

        <ButtonSubmit
          color="#22d278"
          title="Salvar"
          onPress={() => {
            save(
              'lancamentos',
              {
                valor: valor,
                descricao: descricao,
                data: new Date(data),
                tipo: categoriaObj,
                observacoes: observacoes,
                pago: pago,
              },
              callBack,
            ).then(() => navigate('Lancamentos'));
          }}
        />
      </FormContainer>
    </Container>
  );
}
