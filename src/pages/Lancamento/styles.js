import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: #eee;
  border-left-width: 4px;
  margin-bottom: 12px;
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

export const RegistryDate = styled.Text`
  color: #444;
`;

export const RegistryValue = styled.Text`
  font-size: 20px;
  color: #5c6672;
`;
