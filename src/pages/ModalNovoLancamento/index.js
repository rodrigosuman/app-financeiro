import React from 'react';
import {Modal, Text, View} from 'react-native';

import {
  Container,
  ViewContainer,
  Input,
  ButtonSubmit,
  CaptionButton,
} from '~/pages/ModalNovoLancamento/styles';

export default function ModalNovoLancamento({open, setModalVisible}) {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={open}
      onRequestClose={() => setModalVisible(!open)}>
      <Container>
        <ViewContainer>
          <Input placeholder="Descrição" />
        </ViewContainer>
        <ViewContainer>
          <Input placeholder="Data" />
        </ViewContainer>
        <ViewContainer>
          <Input placeholder="valor" />
        </ViewContainer>
        <ViewContainer>
          <Input placeholder="Observações" />
        </ViewContainer>

        <ButtonSubmit color="#22d278" title="Salvar" onPress={() => {}} />
      </Container>
    </Modal>
  );
}
