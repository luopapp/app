import MaterialIcons from "@expo/vector-icons/AntDesign";
import { StackScreenProps } from "@react-navigation/stack";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useEffect } from "react";
import { TouchableOpacity, Text, View } from "react-native";

import { StackParamList } from "../../App";
import { styles } from "./styles";

type Props = StackScreenProps<StackParamList>;

function PermissionScreen({ navigation }: Props) {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [status, requestMediaLibraryPermission] = MediaLibrary.usePermissions();

  function requestPermissions() {
    requestPermission();
    requestMediaLibraryPermission();
  }

  useEffect(() => {
    if (permission?.granted || status?.granted) {
      navigation.push("camera");
    }
  }, [status, permission]);

  return (
    <>
      {status || permission ? (
        <View style={styles.container}>
          <MaterialIcons name="loading1" size={32}></MaterialIcons>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.text}>
            Precisamos da sua permissão para mostrar a câmera e salvar novas
            imagens
          </Text>
          <TouchableOpacity style={styles.button} onPress={requestPermissions}>
            <Text style={styles.buttonText}>Permitir</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

export default PermissionScreen;
