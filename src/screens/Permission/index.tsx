import AntDesign from "@expo/vector-icons/AntDesign";
import { StackScreenProps } from "@react-navigation/stack";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useEffect } from "react";
import { TouchableOpacity, Text, View, Animated, Easing } from "react-native";

import { LuopColors } from "../../assets/colors";
import { StackParamList } from "../../routes";
import { styles } from "./styles";

const AnimatedIcon = Animated.createAnimatedComponent(AntDesign);

type Props = StackScreenProps<StackParamList>;

function PermissionScreen({ navigation }: Props) {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [status, requestMediaLibraryPermission] = MediaLibrary.usePermissions();
  const animation = new Animated.Value(0);

  function requestPermissions() {
    requestPermission();
    requestMediaLibraryPermission();
  }

  useEffect(() => {
    if (permission?.granted || status?.granted) {
      navigation.push("camera");
    }
  }, [status, permission]);

  Animated.loop(
    Animated.timing(animation, {
      toValue: 5,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();

  return (
    <>
      {status && permission ? (
        <View style={styles.container}>
          <Text style={styles.title}>Permissões</Text>
          <Text style={styles.subTitle}>
            O aplicativo Luop necessita de algumas permissões para poder
            executar as funções. Caso concorde em permitir o aplicativo acesse a
            câmera e manipule a galeria, clique no botão permitir.
          </Text>
          <TouchableOpacity style={styles.button} onPress={requestPermissions}>
            <Text style={styles.buttonText}>Permitir</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.loaderContainer}>
          <AnimatedIcon
            name="loading1"
            size={48}
            color={LuopColors.Yellow}
            style={{ transform: [{ rotate: animation }] }}
          ></AnimatedIcon>
        </View>
      )}
    </>
  );
}

export default PermissionScreen;
