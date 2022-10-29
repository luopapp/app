import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [camera, setCamera] = useState<Camera | null>(null);
  const MAX_ZOOM = 1;
  const MIN_ZOOM = 0;

  const [type, setType] = useState(CameraType.back);
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [status, requestMediaLibraryPermission] = MediaLibrary.usePermissions();

  if (!permission) {
    return <View />;
  }
  function requestPermissions() {
    requestPermission();
    requestMediaLibraryPermission();
  }

  if (!permission.granted || !status?.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          Precisamos da sua permissão para mostrar a câmera e salvar novas
          imagens
        </Text>
        <Button onPress={requestPermissions} title="Permitir acessos ao Luop" />
      </View>
    );
  }

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

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        ref={(ref) => setCamera(ref)}
        type={type}
        zoom={zoom}
      >
        <View style={styles.topButtons}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <MaterialIcons name="image" size={32}></MaterialIcons>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <MaterialIcons name="settings" size={32}></MaterialIcons>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    justifyContent: "space-between",
  },
  topButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    margin: 24,
    marginTop: 32,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    margin: 24,
  },
  button: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#F2D404",
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 4,
    borderColor: "#1E2329",
    borderWidth: 2,
  },
});
