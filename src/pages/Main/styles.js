import styled from 'styled-components/native';
import {boxShadow} from '~/variables/boxShadow';

export const Container = styled.View`
  flex: 1;
  background-color: #eee;
  align-items: center;
  padding: 12px;
`;

export const ContainerDescricao = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const ViewResumo = styled.View.attrs([boxShadow])`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 5px;
  background-color: #fff;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  border-radius: 6px;
  border-top-width: 7px;
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
