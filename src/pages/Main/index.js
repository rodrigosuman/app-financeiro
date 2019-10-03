import React from 'react';

import {ScrollView} from 'react-native';

import {
  Container,
  ViewResumo,
  DescricaoResumo,
  ValorResumo,
  ContainerDescricao,
  ViewHeader,
  TituloHeader,
  MesHeader,
} from './styles';

export default function Main() {
  return (
    <Container>
      <ScrollView style={{width: '100%'}}>
        <ViewResumo
          style={{
            borderColor: '#1abc9c',
          }}>
          <ContainerDescricao>
            <DescricaoResumo>Saldo geral</DescricaoResumo>
            <ValorResumo>R$ 5000,00</ValorResumo>
          </ContainerDescricao>
        </ViewResumo>

        <ViewResumo
          style={{
            borderColor: '#2695EE',
          }}>
          <ViewHeader>
            <TituloHeader>Resumo mensal</TituloHeader>
            <MesHeader>Set, 2019</MesHeader>
          </ViewHeader>

          <ContainerDescricao
            style={{
              borderLeftColor: '#69BF8A',
              borderLeftWidth: 3,
              paddingLeft: 5,
            }}>
            <DescricaoResumo>Receita</DescricaoResumo>
            <ValorResumo>R$ 5000,00</ValorResumo>
          </ContainerDescricao>

          <ContainerDescricao
            style={{
              borderLeftColor: '#EE2E31',
              borderLeftWidth: 3,
              paddingLeft: 5,
            }}>
            <DescricaoResumo>Despesa</DescricaoResumo>
            <ValorResumo>R$ 0,00</ValorResumo>
          </ContainerDescricao>

          <ContainerDescricao
            style={{
              borderLeftColor: '#2695EE',
              borderLeftWidth: 3,
              paddingLeft: 5,
            }}>
            <DescricaoResumo>Saldo</DescricaoResumo>
            <ValorResumo>R$ 5000,00</ValorResumo>
          </ContainerDescricao>
        </ViewResumo>

        <ViewResumo
          style={{
            borderColor: '#FBB02D',
          }}>
          <ViewHeader>
            <TituloHeader>Pendências</TituloHeader>
          </ViewHeader>

          <ContainerDescricao
            style={{
              borderLeftColor: '#1ABC9C',
              borderLeftWidth: 3,
              paddingLeft: 5,
            }}>
            <DescricaoResumo>Receitas pendentes</DescricaoResumo>
            <ValorResumo>R$ 5000,00</ValorResumo>
          </ContainerDescricao>

          <ContainerDescricao
            style={{
              borderLeftColor: '#FB6107',
              borderLeftWidth: 3,
              paddingLeft: 5,
            }}>
            <DescricaoResumo>Despesas pendentes</DescricaoResumo>
            <ValorResumo>R$ 5000,00</ValorResumo>
          </ContainerDescricao>
        </ViewResumo>
      </ScrollView>
    </Container>
  );
}
