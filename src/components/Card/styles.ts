import styled from 'styled-components/native';

export const Wrapper = styled.View`
    flex: 1;
    justify-content: center;
	padding: 0 10px;
	margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
    border-radius: 8px;
	padding: 12px;
	background-color: ${({theme}) => theme.colors.darkBlue};
	flex-direction: row;
`;

export const BoldText = styled.Text`
    font-weight: bold;
	font-size: 19px;
	color: white;
	font-family: 'Lato-Black';
`;

export const SimpleText = styled.Text`
    font-size: 16px;
	color: white;
	font-family: 'Lato-Italic';
`;

export const TextContainer = styled.View`
    width: 200px;
`;

export const StatusView = styled.View`
    flex: 1;
	align-items: flex-end;
	margin-top: 6px;
`;

export const Image = styled.Image`
   width: 80px;
   height: 80px;
   margin-right: 10px;
`;

export const ActionButtonsContainer = styled.View`
   flex-direction: row;
`;

export const ActionButton = styled.TouchableOpacity`
   margin-left: 5px;
`;
