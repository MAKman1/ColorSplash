import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	card: {
		backgroundColor: "white",
		width: Dimensions.get('screen').width * 0.65,
		height: Dimensions.get('screen').width * 0.65,
		borderRadius: Dimensions.get('screen').width * 0.65,
	},
	innerCard: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	logoview: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	logo: {
		height: 40,
		width: 205,
		marginBottom: 10
	},
	backgroundVideo: {
		position: 'absolute',
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width,
	},
	overlay: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: 'white',
		opacity: 0.1
	},
	outerCircle: {
		backgroundColor: "#E4E4E4",
		width: Dimensions.get('screen').width * 0.7,
		height: Dimensions.get('screen').width * 0.7,
		borderRadius: Dimensions.get('screen').width * 0.7,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.4,
		shadowRadius: 10,
		elevation: 5,
		zIndex: 1000
	}
})