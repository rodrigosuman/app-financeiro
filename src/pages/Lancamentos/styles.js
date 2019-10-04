import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {boxShadow} from '~/variables/boxShadow';

export const Container = styled.View`
  flex: 1;
  background-color: #eee;
  justify-content: center;
  padding: 12px;
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
