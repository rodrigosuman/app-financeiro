import React, {useState, useEffect} from 'react';
import {Modal} from 'react-native';
import {Textarea} from 'native-base';
import DatePicker from 'react-native-datepicker';
import Moment from 'moment';

import {getObjects, save} from '~/services/realm';

import {Container, ViewContainer, Input, ButtonSubmit, Picker} from './styles';

export default function NovoLancamento({open, setModalVisible, receita}) {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState(0);
  const [data, setData] = useState(Moment());
  const [date, setDate] = useState(Moment());
  const [observacoes, setObservacoes] = useState('');
  const [tipos, setTipos] = useState([]);

  function formatDate(dateStr) {
    let array = dateStr.split('/');

    return array[2] + '-' + array[1] + '-' + array[0];
  }

  useEffect(() => {
    getObjects('tipos', setTipos, true, `receita = ${receita}`);
  }, [receita]);

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={open}
      onRequestClose={() => setModalVisible(!open)}>
      <Container>
        <ViewContainer>
          <Input
            keyboardType="decimal-pad"
            placeholder="valor"
            onChangeText={value => setValor(parseFloat(value))}
          />
        </ViewContainer>
        <ViewContainer>
          <DatePicker
            date={data}
            style={{width: '100%'}}
            format="DD/MM/YYYY"
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            onDateChange={date => {
              setData(date);
              setDate(formatDate(date));
            }}
            color="#fff"
          />
        </ViewContainer>
        <ViewContainer>
          <Picker
            selectedValue={descricao}
            onValueChange={value => setDescricao(value)}>
            <Picker.Item key={0} label="" value="" />
            {tipos.map((t, key) => {
              return (
                <Picker.Item
                  key={key}
                  label={t.descricao}
                  value={t.descricao}
                />
              );
            })}
          </Picker>
        </ViewContainer>
        <ViewContainer>
          <Textarea
            rowSpan={5}
            onFocus={() => {}}
            returnKeyType={'default'}
            blurOnSubmit={false}
            onChangeText={texto => setObservacoes(texto)}
            placeholder="Observações"
            style={{width: '100%', placeholderTextColor: '#666', color: '#fff'}}
          />
        </ViewContainer>
        <ButtonSubmit
          color="#22d278"
          title="Salvar"
          onPress={() => {
            save('lancamentos', {
              descricao: descricao,
              valor: valor,
              data: new Date(date),
              observacoes: observacoes,
              conciliado: false,
            }).then(() => setModalVisible(false));
          }}
        />
      </Container>
    </Modal>
  );
}
