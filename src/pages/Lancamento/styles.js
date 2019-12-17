import styled from 'styled-components/native';
import {Animated} from 'react-native';

import {boxShadow} from '~/variables/boxShadow';

export const Container = styled(Animated.View).attrs([boxShadow])`
  background-color: #fff;
  margin-bottom: 12px;
  flex-direction: column;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  left: 0;
`;

export const Content = styled.View``;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Tags = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Tag = styled.View`
  align-items: center;
`;

export const RegistryTitle = styled.Text`
  font-size: 15px;
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
  font-size: 17px;
  color: #5c6672;
`;
