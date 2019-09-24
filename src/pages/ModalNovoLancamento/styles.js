import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #111;
  justify-content: center;
  padding: 12px;
`;

export const ViewContainer = styled.View.attrs({
  shadowColor: '#fff',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 3,
})`
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  padding: 5px;
  border: 1px;
  border-color: #22d278;
  margin-bottom: 15px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#666',
})`
  font-size: 16px;
  margin-left: 10px;
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
