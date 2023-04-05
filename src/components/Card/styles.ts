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
		flex: 1,
		flexDirection: 'row',
		paddingBottom: 5,
		alignItems: 'flex-end',
	},
	statusText: {
		flex: 1,
		alignItems: 'flex-end',
		marginTop: 6,
	},
	textDone: {
		fontWeight: '700',
		color: 'green',
	},
	textNotDone: {
		fontWeight: '700',
		color: '#b73138',
	}
});

export default styles;