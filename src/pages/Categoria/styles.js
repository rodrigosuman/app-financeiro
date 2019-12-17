import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  margin-bottom: 27px;
  padding-bottom: 7px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const Actions = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const RegistryTitle = styled.Text`
  font-size: 18px;
  color: #777;
`;

export const RegistryDescription = styled.Text`
  font-size: 12px;
`;
