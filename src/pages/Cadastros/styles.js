import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

import {boxShadow} from '~/variables/boxShadow';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #eee;
  flex-direction: column;
  padding: 12px;
`;

export const Section = styled.View.attrs([boxShadow])`
  background-color: #fff;
  padding: 12px;
  border-radius: 5px;
  margin-top: 10px;
  max-height: 350px;
  border-top-width: 7px;
`;

export const SectionHeader = styled.View`
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
  padding-bottom: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SectionDescription = styled.Text`
  font-size: 20px;
  color: #aaa;
`;

export const SectionContent = styled.FlatList.attrs({
  showsVerticalScrollIndicator: true,
})`
  margin-top: 20px;
`;
