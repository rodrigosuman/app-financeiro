import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  padding: 12px;
`;

export const ViewContainer = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 1,
})`
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  color: #fff;
  padding: 5px;
  margin-bottom: 15px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#666',
})`
  font-size: 16px;
  margin-left: 10px;
  justify-content: flex-start;
  color: #fff;
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
