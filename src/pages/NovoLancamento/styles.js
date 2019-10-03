import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #eee;
  padding: 12px;
`;

export const FormContainer = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 2,
})`
  background-color: #fff;
  padding: 12px;
  border-radius: 5px;
`;

export const ViewContainer = styled.View`
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-left-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-left-radius: 3px;
`;

export const Input = styled.TextInput`
  font-size: 16px;
  justify-content: flex-start;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const Picker = styled.Picker`
  font-size: 16px;
`;

export const CaptionButton = styled.Text`
  font-size: 20px;
  flex: 1;
  color: #666;
  justify-content: center;
  align-items: center;
`;

export const ButtonSubmit = styled.Button`
  width: 100%;
  height: 68px;
  border-radius: 5px;
  background-color: #22d278;
`;
