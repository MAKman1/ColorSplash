import React, { useEffect, useState, useRef } from 'react'
import { Text, View, TouchableOpacity, Image, ScrollView, Linking, Dimensions, TextInput, LogBox, Alert, Touchable, Platform } from 'react-native'
import styles from './styles'
import Share from 'react-native-share';

import SafeAreaView from 'react-native-safe-area-view';
import axios from 'axios';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import BottomSwipeableModal from '../../shared/components/modals/bottom-swipeable-modal';
import { SERVER_URL } from '../../shared/constants/constants';
import LinearGradient from 'react-native-linear-gradient';

import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { DoubleBounce, Bubbles } from 'react-native-loader';
import Clipboard from '@react-native-community/clipboard'
import MasonryList from '@react-native-seoul/masonry-list';
import WallpaperManager from 'rn-manage-wallpaper';
import RNFetchBlob from 'rn-fetch-blob';


function Home(props: any, { navigation }: any): JSX.Element {
	const [loading, setLoading] = useState(false);
	const [loadingPage, setLoadingPage] = useState(false);
	const [isSearching, setIsSearching] = useState(true);
	const [search, setSearch] = useState("");
	const [item, setItem] = useState(null);
	const [images, setImages] = useState([]);

	const currentPage = useRef(0);

	useEffect(() => {
		LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
		populatePopular();
	}, [])

	const populatePopular = () => {
		setLoading(true);
		setSearch("");
		setIsSearching(false);
		axios.get("https://api.pexels.com/v1/curated", {
			params: {
				page: 1,
				per_page: 15
			},
			headers: {
				"Authorization": "563492ad6f91700001000001a9b738a537634ee483417666d12d8f60"
			}
		}).then(res => {
			setLoading(false);
			if (res.data.photos) {
				setImages(res.data.photos)
			}
		}).catch(e => {
			console.log(e.response)
		})
	}

	const populateSearch = (search) => {

	}

	const loadNextPage = (isSearching, search) => {

	}

	const showItem = (item) => {
		setLoading(true);
		setItem(item);
		setTimeout(() => {
			setLoading(false);
		}, 200)
	}


	const getViewTitle = (search, isSearching) => {
		if (isSearching && search.length)
			return "Results for: \"" + search + "\"";
		else
			return "Popular Wallpapers"
	}

	const setWallpaperCallback = res => {
		console.log('Response: ', res);
	};

	const setWallpaper = (url) => {
		WallpaperManager.setWallpaper(url, 1)
			.then(setWallpaperCallback)
			.catch(e => {
				console.log("Error: ", e);
			})
	}

	const shareImage = (url: any) => {
		setLoading(true);
		let imagePath: any = null;
		setTimeout(() => {
			RNFetchBlob.config({
				fileCache: true
			})
				.fetch("GET", url)
				.then(resp => {
					imagePath = resp.path();
					return resp.readFile("base64");
				})
				.then(async base64Data => {
					var base64Data: any = `data:image/png;base64,` + base64Data;
					setLoading(false);
					await Share.open({ url: base64Data });
					return RNFetchBlob.fs.unlink(imagePath);
				});
		}, 1000);
	}


	return (
		<LinearGradient colors={['#833ab4', '#fd1d1d', '#fcb045']} angle={135} useAngle={true} style={styles.rootContainer}>
			<View style={styles.loadingView}>
				<Image
					style={styles.logo}
					source={require('../../assets/logo-white.png')}
				/>
				<Bubbles size={8} color="#fff" />
			</View>
			<KeyboardAwareScrollView showsVerticalScrollIndicator={false} scrollEnabled={false} style={styles.scroll}>

				<BottomSwipeableModal
					show={!loading}
					navigation={props.navigation}
					height={0.95}>
					{item ?
						<>
							<View style={{ flex: 1, alignItems: 'center', marginBottom: 10 }}>
								<View style={styles.backButton}>
									<TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 5 }} onPress={() => {
										setLoading(true);
										setItem(null);
										setTimeout(() => {
											setLoading(false);
										}, 200)
									}}>
										<Ionicons name={"arrow-back"} color={"black"} size={22} />
									</TouchableOpacity>
								</View>
								<Text style={styles.generatedText}>{""}</Text>
							</View>

							<View style={styles.largeImageView}>
								<Image resizeMode={"cover"} style={styles.largeImage} source={{ uri: item.src.portrait, cache: "force-cache" }}></Image>
								<Text style={styles.imageArtist}>by: {item.photographer}</Text>



								<View style={{ flexDirection: 'row', flex: 1 }}>
									{Platform.OS == "ios" ?
										<TouchableOpacity style={[styles.roundedButton]} onPress={() => shareImage(item.src.portrait)}>
											<Text style={styles.buttonText}>Share Image</Text>
										</TouchableOpacity>
										:
										<TouchableOpacity style={[styles.roundedButton]} onPress={() => setWallpaper(item.src.portrait)}>
											<Text style={styles.buttonText}>Set As Wallpaper</Text>
										</TouchableOpacity>
									}
									<TouchableOpacity style={styles.downloadButton}>
										<FontAwesome name={"download"} size={20} color={"white"} />
									</TouchableOpacity>
								</View>

							</View>
						</>
						:
						<>
							<View style={{ flex: 1, alignItems: 'center', marginBottom: 10 }}>
								{isSearching ?
									<View style={styles.backButton}>
										<TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 5 }} onPress={() => {
											setIsSearching(false);
											setSearch("");
											populatePopular();
										}}>
											<Ionicons name={"arrow-back"} color={"black"} size={22} />
										</TouchableOpacity>
									</View>
									:
									null
								}
								<Text style={styles.generatedText}>{getViewTitle(search, isSearching)}</Text>
							</View>

							<MasonryList
								style={{ paddingHorizontal: 5, paddingBottom: 150 }}
								data={images}
								keyExtractor={item => "" + item.id}
								numColumns={2}
								showsVerticalScrollIndicator={false}
								renderItem={({ item }) =>
									<TouchableOpacity style={[styles.imageCard, { backgroundColor: item.avg_color }]} onPress={() => showItem(item)}>
										<Image resizeMode={"cover"} style={[styles.image, { height: 150 + (Math.random() * 180) }]} source={{ uri: item.src.portrait, cache: "force-cache" }}></Image>
									</TouchableOpacity>
								}
								refreshing={loadingPage}
								onRefresh={() => isSearching ? populateSearch(search) : populatePopular()}
								onEndReachedThreshold={0.1}
								onEndReached={() => loadNextPage(isSearching, search)}
								ListEmptyComponent={<Text>Oops! We couln't find any relevant wallpapers.</Text>}
							/>
						</>
					}


				</BottomSwipeableModal>
				<SafeAreaView style={styles.bottomCard}>
					<Image style={styles.appLogo} source={require('../../assets/logo.png')}></Image>
					<View style={styles.separator} />
					<View style={styles.searchView}>
						<TextInput
							style={styles.input}
							onChangeText={setSearch}
							value={search}
							underlineColorAndroid="transparent"
							placeholder="Search for wallpapers"
							placeholderTextColor={"#B8B8B8"}
						/>
						<TouchableOpacity style={styles.searchButton}>
							<AntDesign name={"search1"} color={"white"} size={20} />
						</TouchableOpacity>
					</View>
				</SafeAreaView>

			</KeyboardAwareScrollView>

		</LinearGradient>
	)
}
export default Home;