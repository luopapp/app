import { StackScreenProps } from "@react-navigation/stack";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CameraButton } from "../../components/CameraButton";
import { StackParamList } from "../../routes";
import { styles } from "./styles";

type Props = StackScreenProps<StackParamList>;

function CameraScreen({ navigation }: Props) {
  const [camera, setCamera] = useState<Camera | null>(null);

  const MAX_ZOOM = 1;
  const MIN_ZOOM = 0;

  const [isLoading, setIsLoading] = useState(false);

  const [zoom, setZoom] = useState(MIN_ZOOM);

  function handleZoomIn() {
    setZoom((current) => {
      const newZoom = current + 0.1;

      return newZoom < MAX_ZOOM ? newZoom : 0.1;
    });
  }

  function handleZoomOut() {
    setZoom((current) => {
      const newZoom = current - 0.1;

      return newZoom > MIN_ZOOM ? newZoom : 0.1;
    });
  }

  async function handleTakePicture() {
    setIsLoading(true);
    if (camera) {
      const { uri } = await camera.takePictureAsync({});
      const asset = await MediaLibrary.createAssetAsync(uri);
      const album = await MediaLibrary.getAlbumAsync("luop");

      if (album == null) {
        await MediaLibrary.createAlbumAsync("luop", asset, false);
      } else {
        await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
      }
    }
    setIsLoading(false);
  }

  function handleToGallery() {
    navigation.push("gallery");
  }

  function handleToSettings() {
    navigation.push("settings");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} ref={(ref) => setCamera(ref)} zoom={zoom}>
        <View
          style={{ ...styles.buttonsContainer, ...styles.topButtonsContainer }}
        >
          <CameraButton onClick={handleToGallery} icon="image" size={32} />
          <CameraButton onClick={handleToSettings} icon="settings" size={32} />
        </View>
        <View style={styles.buttonsContainer}>
          <CameraButton onClick={handleToGallery} icon="tune" size={32} />
          <CameraButton
            onClick={handleToGallery}
            icon="invert-colors"
            size={32}
          />
          <CameraButton
            onClick={handleTakePicture}
            icon="photo-camera"
            disabled={isLoading}
            size={42}
          />
          <CameraButton onClick={handleZoomOut} icon="zoom-out" size={32} />
          <CameraButton onClick={handleZoomIn} icon="zoom-in" size={32} />
        </View>
      </Camera>
    </SafeAreaView>
  );
}

export default CameraScreen;
