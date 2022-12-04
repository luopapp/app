import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StackScreenProps } from "@react-navigation/stack";
import * as MediaLibrary from "expo-media-library";
import { useContext, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "../../components/Header";
import { ConfigContext, ConfigContextType } from "../../contexts/config";
import { StackParamList } from "../../routes";
import { styles } from "./styles";

type Props = StackScreenProps<StackParamList>;

function GalleryScreen({ navigation }: Props) {
  const { systemColor } = useContext(ConfigContext) as ConfigContextType;

  const [album, setAlbum] = useState<MediaLibrary.Album>();
  const [assets, setAssets] = useState<MediaLibrary.Asset[]>();
  const [currentAsset, setCurrentAsset] = useState<MediaLibrary.Asset>();
  const [count, setCount] = useState(0);

  async function handleFetchAlbum() {
    const album = await MediaLibrary.getAlbumAsync("luop");
    setAlbum(album);
  }
  async function handleFetchAssets() {
    const { assets } = await MediaLibrary.getAssetsAsync({ album });
    setAssets(assets);
    const newCount = assets.length - 1;
    setCount(newCount);
    setCurrentAsset(assets[newCount]);
  }

  useEffect(() => {
    handleFetchAlbum();
  }, []);

  useEffect(() => {
    if (album?.id) {
      handleFetchAssets();
    }
  }, [album]);

  function handleToCamera() {
    navigation.push("camera");
  }

  function handleNextImage() {
    if (count > 0 && assets) {
      const newCount = count - 1;
      setCount(newCount);

      setCurrentAsset(assets[newCount]);
    }
  }

  function handleBackImage() {
    if (assets && count < assets?.length - 1) {
      const newCount = count + 1;
      setCount(newCount);

      setCurrentAsset(assets[newCount]);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Galeria" onBack={handleToCamera}></Header>
      {currentAsset && (
        <View>
          <Image
            style={styles.image}
            source={{
              uri: currentAsset.uri,
            }}
          ></Image>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={{
                ...styles.button,
                ...styles[`button${systemColor}`],
              }}
              onPress={handleBackImage}
            >
              <MaterialIcons name="arrow-back-ios" size={18}></MaterialIcons>
              <Text style={styles.buttonText}>Anterior</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.button,
                ...styles[`button${systemColor}`],
              }}
              onPress={handleNextImage}
            >
              <Text style={styles.buttonText}>Próximo</Text>
              <MaterialIcons name="arrow-forward-ios" size={18}></MaterialIcons>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

export default GalleryScreen;
