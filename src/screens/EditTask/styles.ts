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
    margin-top: 125px;
`;

export const HeaderContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding-top: 10px;
    padding-left: 15px;
`;

export const HeaderText = styled.Text`
    font-size: 40px;
    font-weight: bold;
    color: white;
    font-family: 'Alkatra';
    margin-left: 10px;
`;

export const Input = styled.TextInput`
    height: 60px;
    margin: 20px;
    border-width: 1px;
    border-radius: 10px;
    border-color: ${({theme}) => theme.colors.darkBlue};
    padding: 20px;
    width: 320px;
    background-color: ${({theme}) => theme.colors.darkBlue};
    color: white;
`;

export const Button = styled.TouchableOpacity`
    border-radius: 10px;
    align-items: center;
    background-color: ${({theme}) => theme.colors.darkBlue};
    margin: 10px;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    height: 50px;
    width: 50px;
`;

export const ButtonText = styled.Text`
    color: white;
    font-weight: 700;
    margin: 5px;
`;

export const ContainerButtons = styled.View`
    flex-direction: row;
`;
