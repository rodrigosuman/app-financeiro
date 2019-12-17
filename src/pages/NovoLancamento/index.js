import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Textarea, DatePicker} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NumericInput from '@wwdrew/react-native-numeric-textinput';

import {getObjects, save, getObject, update} from '~/services/realm';

import {
  Container,
  ViewContainer,
  Input,
  Label,
  Picker,
  FormContainer,
  ButtonSubmit,
  FormHeader,
  FormHeaderText,
} from './styles';

export default function NovoLancamento({navigation}) {
  const {navigate, state} = navigation;
  const {receita, callBack, insert, lancamento} = state.params;

  const [tipos, setTipos] = useState([]);

  const {id} = lancamento;
  const [valor, setValor] = useState(lancamento.valor);
  const [descricao, setDescricao] = useState(lancamento.descricao);
  const [data, setData] = useState(lancamento.data);
  const [categoria, setCategoria] = useState(lancamento.tipo.id);
  const [categoriaObj, setCategoriaObj] = useState(
    getObject(categoria, setCategoriaObj),
  );
  const [observacoes, setObservacoes] = useState(lancamento.observacoes);
  const [pago, setPago] = useState(lancamento.pago);

  useEffect(() => {
    getObjects('tipos', setTipos, true, `receita = ${receita}`);
  }, [receita]);

  return (
    <Container>
      <FormContainer
        style={[
          insert
            ? receita
              ? {borderTopColor: '#00FFFF'}
              : {borderTopColor: '#FFB800'}
            : {borderTopColor: '#2BD9FE'},
          {
            borderTopWidth: 9,
          },
        ]}>
        <FormHeader>
          {insert ? (
            receita ? (
              <>
                <FormHeaderText>Nova receita</FormHeaderText>
                <Icon name="arrow-upward" color="#00FFFF" size={27} />
              </>
            ) : (
              <>
                <FormHeaderText>Nova despesa</FormHeaderText>
                <Icon name="arrow-downward" color="#FFB800" size={27} />
              </>
            )
          ) : (
            <>
              <FormHeaderText>Editar lançamento</FormHeaderText>
              <Icon name="edit" color="#2BD9FE" size={27} />
            </>
          )}
        </FormHeader>

        <ViewContainer>
          <Label>Valor</Label>

          <NumericInput
            type="decimal"
            useGrouping={false}
            decimalPlaces={2}
            value={valor}
            onUpdate={value => setValor(value)}
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
            if (insert) {
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
            } else {
              update(
                'lancamentos',
                {
                  id: id,
                  valor: valor,
                  descricao: descricao,
                  data: new Date(data),
                  tipo: categoriaObj,
                  observacoes: observacoes,
                  pago: pago,
                },
                callBack,
              ).then(() => navigate('Lancamentos'));
            }
          }}
        />
      </FormContainer>
    </Container>
  );
}
