import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  padding: 10px;
`;

export const ViewSearch = styled.View.attrs({
  shadowColor: '#000',
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
`;

export const SearchInput = styled.TextInput`
  font-size: 16px;
  margin-left: 10px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;