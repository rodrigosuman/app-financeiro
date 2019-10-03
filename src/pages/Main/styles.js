import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #eee;
  align-items: center;
  margin-top: 12px;
  padding: 12px;
`;

export const ContainerDescricao = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const ViewResumo = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 2,
})`
  width: 100%;
  background-color: #fff;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  border-radius: 6px;
  border-top-width: 7px;
  margin-bottom: 20px;
`;

export const DescricaoResumo = styled.Text`
  color: #aaa;
  font-size: 13px;
`;

export const TituloHeader = styled.Text`
  color: #222;
  font-size: 15px;
`;

export const MesHeader = styled.Text`
  color: #777;
  font-size: 15px;
`;

export const ValorResumo = styled.Text`
  font-size: 15px;
  color: #666;
`;

export const ViewHeader = styled.View`
  margin-bottom: 10px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
