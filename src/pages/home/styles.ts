import { StyleSheet, Dimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { APP_COLORS } from '../../shared/styles/colors';

export default StyleSheet.create({
	rootContainer: {
		backgroundColor: 'white',
		flex: 1,
	},
	loadingView: {
		position: "absolute",
		top: 0,
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width,
		justifyContent: 'center',
		alignItems: 'center'
	},
	container: {
		flex: 1,
	},
	scroll: {
		flex: 1,
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width
	},
	bubble: {
		backgroundColor: '#1d54d6',
		borderRadius: 20,
		paddingHorizontal: 20,
		paddingVertical: 5,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'baseline',
		marginHorizontal: 5,
	},
	bubbleGrey: {
		backgroundColor: '#737373',
		borderRadius: 20,
		paddingHorizontal: 20,
		paddingVertical: 5,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'baseline',
		marginHorizontal: 5,
	},
	titleText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 13,
	},
	textInput: {
		backgroundColor: '#4F4F4F',
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 10,
		color: '#FFF',
		fontWeight: 'bold',
		fontSize: 17,
		marginTop: 5,
		marginBottom: 20,

		shadowColor: '#FFF',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.15,
		shadowRadius: 6,
		elevation: 5,
	},
	inputTitle: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#FFF',
		marginLeft: 5,
		marginTop: 20,
	},
	roundedOuter: {
		shadowColor: '#FC466B',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.3,
		shadowRadius: 10,
		elevation: 5,
	},
	roundedButton: {
		flex: 1,
		marginHorizontal: 10,
		backgroundColor: '#fd1d1d',
		borderRadius: 10,
		paddingVertical: 15,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
	},
	downloadButton: {
		marginRight: 10,
		paddingHorizontal: 20,
		backgroundColor: '#fcb045',
		borderRadius: 10,
		paddingVertical: 15,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
	},
	buttonText: {
		color: '#FFF',
		fontWeight: 'bold',
		fontSize: 16,
	},
	logoText: {
		fontWeight: 'bold',
		fontSize: 25,
		color: '#F0F0F0',
		marginVertical: 5,
		marginHorizontal: 5,
		zIndex: 999,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 1,
		shadowRadius: 10,
		elevation: 5,
	},
	generatedText: {
		fontWeight: 'bold',
		fontSize: 22,
		marginTop: 15,
		color: '#323232',
	},
	loadingtext: {
		fontWeight: 'bold',
		fontSize: 20,
		marginTop: 10,
		color: '#A7A7A7',
	},
	urlView: {
		color: '#000',
		borderRadius: 10,
		fontSize: 22,
		backgroundColor: '#FFF',
		width: '90%',
		marginTop: 70,
		padding: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.2,
		shadowRadius: 8,
		elevation: 5,
	},
	bottomCard: {
		alignItems: 'center',
		position: 'absolute',
		flexDirection: 'row',
		borderWidth: 0.3,
		borderColor: '#DEDEDE',
		bottom: 0,
		width: Dimensions.get('screen').width,
		zIndex: 999,
		paddingBottom: 10,
		paddingTop: 5,
		paddingHorizontal: 10,
		backgroundColor: 'white',
		borderTopLeftRadius: 35,
		borderTopRightRadius: 35,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: -5,
		},
		shadowOpacity: 0.3,
		shadowRadius: 20,
		elevation: 4,
	},
	appLogo: {
		width: 40,
		height: 50
	},
	separator: {
		height: 30,
		width: 1,
		marginLeft: 10,
		marginTop: 23,
		backgroundColor: '#B9B9B9'
	},
	searchView: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'white',
		borderWidth: 0.3,
		borderColor: '#DEDEDE',
		marginLeft: 20,
		marginRight: 10,
		marginTop: 18,
		borderRadius: 50,
		height: 40,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.2,
		shadowRadius: 5,
		elevation: 3,
	},
	input: {
		flex: 1,
		height: 35,
		paddingTop: 5,
		paddingLeft: 10,
		paddingRight: 10
	},
	searchButton: {
		backgroundColor: "#FC466B",
		width: 33,
		height: 33,
		marginTop: 3,
		marginRight: 5,
		borderRadius: 40,
		justifyContent: "center",
		alignItems: 'center'
	},
	logo: {
		marginBottom: 20,
		height: 35,
		width: 180
	},
	backText: {
		color: 'grey',
		fontWeight: 'bold'
	},
	backButton: {
		position: 'absolute',
		left: 10,
		top: 10
	},
	imageCard: {
		margin: 5,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.3,
		shadowRadius: 5,
		elevation: 4,
	},
	image: {
		width: '100%',
		borderRadius: 10,
	},
	largeImage: {
		width: Dimensions.get('window').width - 10,
		height: Dimensions.get('window').height * 0.7,
		borderRadius: 10
	},
	largeImageView: {
		alignItems: 'center',
		paddingBottom: 150,
	},
	imageArtist: {
		textAlign: 'left',
		width: '100%',
		color: 'grey',
		fontStyle: 'italic',
		marginLeft: 20,
		fontSize: 12
	}
});
