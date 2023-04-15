import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme}) => theme.colors.lightBlue};
`;

export const KeyboardAvoiding = styled.KeyboardAvoidingView`
    flex: 1;
`;

export const InputContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-top: 25px;
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

export const Input = styled.TextInput`
    height: 40px;
    margin: 8px;
    border-width: 1px;
    border-radius: 10px;
    border-color: ${({theme}) => theme.colors.darkBlue};
    padding: 10px;
    width: 300px;
    background-color: ${({theme}) => theme.colors.darkBlue};
    color: white;
`;

export const Button = styled.TouchableOpacity`
    border-width: 1px;
    border-radius: 10px;
    align-items: center;
    border-color: ${({theme}) => theme.colors.darkBlue};
    background-color: ${({theme}) => theme.colors.darkBlue};
    margin: 10px;
    padding: 10px;
    flex-direction: row;
`;

export const ButtonText = styled.Text`
    color: white;
    font-weight: 700;
    padding-right: 5px;
    padding-left: 5px;
`;
