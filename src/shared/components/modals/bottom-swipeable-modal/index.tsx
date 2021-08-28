import React, { useEffect, useState, useRef, useMemo } from 'react'
import { Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView, Touchable, Animated, Dimensions, ActivityIndicator } from 'react-native'
import Modal from 'react-native-modal'
import styles from './styles'
import FlashMessage from 'react-native-flash-message';



function BottomSwipeableModal(props: {
	navigation?: any,
	show: boolean,
	children?: any,
	height?: number,
}): JSX.Element {

	const fullHeight = Dimensions.get('window').height;
	const heightAnim = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		toggleView(props.show)
	}, [props.show])

	// useEffect(() => {
	// 	if (props.children) {
	// 		setLoading(true);
	// 		setTimeout(() => {
	// 			setLoading( false)
	// 		}, 1000);
	// 	}
	// }, [props.children])

	const toggleView = (show: boolean) => {
		if (show) {
			Animated.spring(
				heightAnim,
				{
					toValue: (props.height ? (fullHeight * props.height) : fullHeight),
					duration: 1800
				}
			).start();
		} else {
			Animated.spring(
				heightAnim,
				{
					toValue: 98,
					duration: 1800
				}
			).start();
		}
	}


	return (
		<View style={styles.outerView}>
			<Animated.View style={[styles.fullScreenView, { height: heightAnim }]}>
				<ScrollView style={styles.popupScroll} showsVerticalScrollIndicator={false}>


					{/* Content */}
					{props.children}

				</ScrollView>
			</Animated.View>
			<FlashMessage position="top" titleStyle={{ fontWeight: 'bold' }} />
		</View>

	)
}

export default BottomSwipeableModal;