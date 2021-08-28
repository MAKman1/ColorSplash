import React, { useEffect } from 'react'
import { Text, Image, View } from 'react-native'
import styles from './styles'

import SafeAreaView from 'react-native-safe-area-view';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';

function Splash({ navigation }): JSX.Element {

	useEffect(() => {
		setTimeout(() => {
			navigation.replace("Home");
		}, 1500);
	}, []);
	return (
		<View style={styles.container}>
			<Video
				resizeMode={"cover"}
				source={require('../../assets/splashvid.mp4')}
				style={styles.backgroundVideo}
			/>
			<View style={styles.overlay} />
			<View style={styles.outerCircle}>
				<LinearGradient colors={['#833ab4', '#fd1d1d', '#fcb045']} useAngle={true} angle={135} style={styles.card}>
					<View style={styles.innerCard}>
						<View style={styles.logoview}>
							<Image
								style={styles.logo}
								source={require('../../assets/logo-white.png')}
							/>
						</View>
					</View>
				</LinearGradient>
			</View>
		</View>
	)
}

export default Splash;