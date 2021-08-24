import React, { useEffect, useState, useRef } from 'react'
import { Text, View, TouchableOpacity, Image, ScrollView, ActivityIndicator, Linking, Dimensions, Animated, LogBox, Share, Alert } from 'react-native'
import styles from './styles'

import SafeAreaView from 'react-native-safe-area-view';
import axios from 'axios';


import { Bars } from 'react-native-loader';

import AntDesign from 'react-native-vector-icons/AntDesign';


import BottomSwipeableModal from '../../shared/components/modals/bottom-swipeable-modal';
import { SERVER_URL } from '../../shared/constants/constants';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-gesture-handler';

import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import Clipboard from '@react-native-community/clipboard'


function Home(props: any, { navigation }: any): JSX.Element {
	const [modalShown, setModalShown] = useState('');
	const [mode, setMode] = useState('auto');

	const [url, setUrl] = useState('');
	const [customUrl, setCustomUrl] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
	}, [])

	useEffect(() => {
		if (modalShown == '') {
			setUrl('')
			setCustomUrl('')
		}
	}, [modalShown])


	const requestAutoUrl = (url: string) => {
		let data = new FormData();

		url = url.replace("www.", "");
		if (!url.startsWith("http")) {
			url = "http://" + url
		}

		data.append('url', url);
		data.append('apiKey', 'bdOz4lykCPZOnMf');
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		}
		axios.post(SERVER_URL + 'short', data, config)
			.then(function (response) {
				setModalShown("http://axonn.xyz/" + response.data);
				setLoading(false);
			})
			.catch(function (error) {
				console.log(error.message)
				Alert.alert("Failed to generate shortened URL. Please try again later")
				setLoading(false);
			});
	}

	const requestCustomUrl = (url: string, customUrl: string) => {
		let data = new FormData();

		url = url.replace("www.", "");
		if (!url.startsWith("http")) {
			url = "http://" + url
		}

		data.append('url', url);
		data.append('name', customUrl);
		data.append('apiKey', 'bdOz4lykCPZOnMf');

		const config = {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		}
		axios.post(SERVER_URL + 'customShort', data, config)
			.then(function (response) {
				setModalShown("http://axonn.xyz/" + response.data);
				setLoading(false);
			})
			.catch(function (error) {
				console.log(error.message)
				Alert.alert("Failed to generate shortened URL. Please try again later")
				setLoading(false);
			});
	}

	const sanitizeCustomUrl = (text: string) => {
		let clean = text.replace(" ", "");
		setCustomUrl(clean);
	}

	const shareUrl = (url: string) => {
		Share.share({
			url: url,
			title: "Share shortened URL"
		});
	}

	const generateUrl = (url: string, customUrl: string) => {
		setLoading(true);

		if (mode == 'auto') {
			requestAutoUrl(url);
		} else {
			requestCustomUrl(url, customUrl);
		}

		// setModalShown('http://google.com')
		// 	setLoading(false);


	}

	const copyUrl = (url: string) => {
		Clipboard.setString(url);
		showMessage({
			message: "URL copied to clipboard",
			type: "info",
		});
	}
	return (
		<View style={[styles.rootContainer, { backgroundColor: '#000' }]}>
			<KeyboardAwareScrollView>
				<LinearGradient colors={['#0B001E', '#000000', '#140035', '#0B001E']} angle={45} useAngle={true} style={styles.container}>

					<SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>

						<View style={{ flex: 1 }}>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<Image style={styles.logo} source={require('../../assets/icon.png')} />
								<Text style={styles.logoText}>{"Axon."}</Text>
							</View>
							<View style={{ marginVertical: 100 }} />
							<Text style={styles.welcome}>{"Url Shortener"}</Text>
							<Image style={styles.topImage} source={require('../../assets/internet-image.png')} />
						</View>

						<View style={{ flexDirection: 'row', marginHorizontal: 20, marginVertical: 20, justifyContent: 'flex-end' }}>
							<TouchableOpacity
								style={mode == 'auto' ? styles.bubble : styles.bubbleGrey}
								onPress={() => setMode('auto')}
							>
								<Text style={styles.titleText}>{"Auto"}</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={mode == 'custom' ? styles.bubble : styles.bubbleGrey}
								onPress={() => setMode('custom')}
							>
								<Text style={styles.titleText}>{"Custom"}</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.card}>

							<View style={{ flex: 1 }}>
								<Text style={styles.inputTitle}>{"Enter URL"}</Text>
								<TextInput
									value={url}
									onChangeText={setUrl}
									style={styles.textInput}
									placeholder={"URL to shorten"}
									placeholderTextColor={"#999999"} />

								{mode == 'custom' ?
									<>
										<Text style={styles.inputTitle}>{"axonn.xyz/"}</Text>
										<TextInput
											value={customUrl}
											onChangeText={sanitizeCustomUrl}
											style={styles.textInput}
											placeholder={"Custom URL"}
											placeholderTextColor={"#999999"} />
									</>
									: null
								}
							</View>




							<TouchableOpacity style={styles.roundedOuter} onPress={() => generateUrl(url, customUrl)}>
								<LinearGradient colors={['#FC466B', '#3F5EFB']} angle={45} useAngle={true} style={styles.roundedButton}>
									{loading ?
										<Bars size={10} color={"white"} />
										:
										<Text style={styles.buttonText}>{'Generate'}</Text>
									}
								</LinearGradient>
							</TouchableOpacity>

							<View style={{ marginVertical: 10 }} />
						</View>
					</SafeAreaView>
				</LinearGradient>


				<BottomSwipeableModal
					onCollapse={() => setModalShown('')}
					show={modalShown != ''}
					navigation={props.navigation}
					height={0.6}>
					<View style={{ flex: 1, alignItems: 'center' }}>
						<AntDesign name={"checkcircleo"} size={80} color={"#00D520"} style={{ marginTop: 40 }} />
						<Text style={styles.generatedText}>{"URL Generated"}</Text>

						<TextInput
							value={modalShown}
							style={styles.urlView}
						/>

						<View style={{ flexDirection: 'row', marginHorizontal: 15 }}>
							<TouchableOpacity style={[styles.roundedOuter, { flex: 1, margin: 5 }]} onPress={() => copyUrl(modalShown)}>
								<LinearGradient colors={['#3F5EFB', '#FC466B']} angle={60} useAngle={true} style={styles.roundedButton}>
									<Text style={styles.buttonText}>{'Copy'}</Text>
								</LinearGradient>
							</TouchableOpacity>
							<TouchableOpacity style={[styles.roundedOuter, { flex: 1, margin: 5 }]} onPress={() => shareUrl(modalShown)}>
								<LinearGradient colors={['#FC466B', '#3F5EFB']} angle={60} useAngle={true} style={styles.roundedButton}>
									<Text style={styles.buttonText}>{'Share'}</Text>
								</LinearGradient>
							</TouchableOpacity>
						</View>
					</View>
				</BottomSwipeableModal>
			</KeyboardAwareScrollView>
		</View>
	)
}
export default Home;