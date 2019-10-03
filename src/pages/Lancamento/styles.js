import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  shadowColor: '#BF00FF',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 4,
})`
  width: 100%;
  background-color: #fff;
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
