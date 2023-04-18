import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme}) => theme.colors.lightBlue};
`;

export const KeyboardAvoiding = styled.KeyboardAvoidingView`
    flex: 1;
`;

export const ContainerListCard = styled.FlatList`
    flex: 1;
    width: 100%;
`;

export const ViewContainer = styled.View`
    align-items: center;
    padding-top: 200px;
`;

export const EmptyText = styled.View`
    font-size: 25px;
    color: white;
`;

export const HeaderContainer = styled.View`
    padding-top: 10px;
    padding-left: 15px;
`;

export const HeaderText = styled.Text`
    font-size: 40px;
    font-weight: bold;
    color: white;
    font-family: 'Alkatra';
`;
