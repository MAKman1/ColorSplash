import { StyleSheet, Dimensions } from "react-native";
import { APP_COLORS } from "../../../styles/colors";

export default StyleSheet.create({
	popupScroll: {
		height: '100%'
	},
	outerView: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	},
	popupInner: {
		flex: 1,
		paddingBottom: 100,
		paddingHorizontal: 10,
		alignItems: "center",
	},
	fullScreenView: {
		position: "absolute",
		bottom: 0,
		height: "100%",
		width: "100%",
		borderTopRightRadius: 35,
		borderTopLeftRadius: 35,
		backgroundColor: "white",
	},
	swipeableButtonView: {
		width: "100%",
		height: 10,
		paddingVertical: 20,
		paddingLeft: 40,
		marginBottom: 10,
		justifyContent: "center",
		alignItems: "center",
		flex: 1
	},
	swipeableButton: {
		width: 35,
		height: 5,
		borderRadius: 10,
		backgroundColor: "#B6B6B6",
	},
	topBar: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	closeButton: {
		paddingHorizontal: 10,
		paddingVertical: 10
	}
});
