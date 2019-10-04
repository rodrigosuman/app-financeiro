import styled from 'styled-components/native';
import {boxShadow} from '~/variables/boxShadow';

export const Container = styled.View.attrs([boxShadow])`
  width: 100%;
  background-color: #fff;
  border-left-width: 4px;
  margin-bottom: 17px;
  flex-direction: column;
  border-radius: 5px;
  padding: 10px;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const RegistryTitle = styled.Text`
  font-size: 18px;
  color: #777;
`;

export const RegistryDescription = styled.Text`
  align-items: center;
  font-size: 12px;
  color: #bbb;
`;

export const RegistryDate = styled.Text`
  color: #bbb;
  font-size: 12px;
`;

export const RegistryValue = styled.Text`
  font-size: 20px;
  color: #5c6672;
`;
