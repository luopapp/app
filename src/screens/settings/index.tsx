import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StackScreenProps } from "@react-navigation/stack";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { StackParamList } from "../../routes";
import { styles } from "./styles";

type Props = StackScreenProps<StackParamList>;

function SettingsScreen({ navigation }: Props) {
  function handleToCamera() {
    navigation.push("camera");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIcon} onPress={handleToCamera}>
          <MaterialIcons name="arrow-back-ios" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Configurações</Text>
      </View>
    </SafeAreaView>
  );
}

export default SettingsScreen;
