import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StackScreenProps } from "@react-navigation/stack";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";

import { StackParamList } from "../../App";
import { styles } from "./styles";

type Props = StackScreenProps<StackParamList>;

function CameraScreen({ navigation }: Props) {
  const [camera, setCamera] = useState<Camera | null>(null);
  const MAX_ZOOM = 1;
  const MIN_ZOOM = 0;

  const [type, setType] = useState(CameraType.back);
  const [zoom, setZoom] = useState(MIN_ZOOM);

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

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
  }

  function handleToGallery() {
    navigation.push("gallery");
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        ref={(ref) => setCamera(ref)}
        type={type}
        zoom={zoom}
      >
        <View
          style={{ ...styles.buttonsContainer, ...styles.topButtonsContainer }}
        >
          <TouchableOpacity style={styles.button} onPress={handleToGallery}>
            <MaterialIcons name="image" size={32}></MaterialIcons>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <MaterialIcons name="settings" size={32}></MaterialIcons>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <MaterialIcons name="tune" size={32}></MaterialIcons>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <MaterialIcons name="invert-colors" size={32}></MaterialIcons>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleTakePicture}>
            <MaterialIcons name="photo-camera" size={42}></MaterialIcons>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleZoomOut}>
            <MaterialIcons name="zoom-out" size={32}></MaterialIcons>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleZoomIn}>
            <MaterialIcons name="zoom-in" size={32}></MaterialIcons>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

export default CameraScreen;
