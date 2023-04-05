import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 10,
		marginBottom: 20,
	},
	button: {
		borderRadius: 8,
		padding: 12,
		backgroundColor: '#003f69',
		flexDirection: 'row',
	},
	boldText: {
		fontWeight: 'bold',
		fontSize: 19,
		color: 'white',
		fontFamily: 'Lato-Black',
	},
	text: {
		fontSize: 16,
		color: 'white',
		fontFamily: 'Lato-Italic',
	},
	textContainer: {
		width: 200
	},
	statusText: {
		flex: 1,
		alignItems: 'flex-end',
		marginTop: 6,
	},
	image: {
		width: 80,
		height: 80,
		marginRight: 10
	},
	actionButtons: {
		flexDirection: 'row',
	},
	action: {
		marginLeft: 5,
	},
});

export default styles;