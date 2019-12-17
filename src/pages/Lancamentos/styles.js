import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {boxShadow} from '~/variables/boxShadow';

export const Container = styled.View`
  flex: 1;
  background-color: #eee;
  justify-content: center;
  padding: 12px;
`;

export const Header = styled.View`
  height: 50px;
  padding: 15px;
  padding-left: 60px;
  padding-right: 60px;
  background-color: #1abc9c;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Content = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ResumoDoMes = styled.View.attrs([boxShadow])`
  height: 15px;
  padding: 25px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ViewSearch = styled.View.attrs([boxShadow])`
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  padding: 5px;
  border: ${StyleSheet.hairlineWidth}px;
  border-color: #22d278;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: '#666',
})`
  font-size: 16px;
  margin-left: 10px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const TextFeedback = styled.Text`
  color: #666;
  text-align: center;
`;

export const Mes = styled.Text`
  color: #fff;
  text-align: center;
`;
