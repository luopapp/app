import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Picker } from "@react-native-picker/picker";
import { StackScreenProps } from "@react-navigation/stack";
import { useContext } from "react";
import { Text, TouchableOpacity, View, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LUOP_COLORS } from "../../assets/colors";
import { ConfigContext, ConfigContextType } from "../../contexts/config";
import { StackParamList } from "../../routes";
import { styles } from "./styles";

type Props = StackScreenProps<StackParamList>;

function SettingsScreen({ navigation }: Props) {
  const {
    systemColor,
    updateSystemColor,
    systemSoundActive,
    updateSystemSoundActive,
  } = useContext(ConfigContext) as ConfigContextType;

  function handleToCamera() {
    navigation.push("camera");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          ...styles.header,
          ...(`header${systemColor}` in styles &&
            styles[`header${systemColor}`]),
        }}
      >
        <TouchableOpacity style={styles.headerIcon} onPress={handleToCamera}>
          <MaterialIcons name="arrow-back-ios" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Configurações</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomColor: "#fff",
          borderBottomWidth: 2,
          paddingBottom: 8,
          marginTop: 34,
          marginHorizontal: 16,
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 18, fontWeight: "500" }}>
          Cor dos botões
        </Text>
        <Picker
          selectedValue={systemColor}
          onValueChange={(itemValue, _) => updateSystemColor(itemValue)}
          style={{ color: "#FFF", width: 120 }}
          dropdownIconColor="#FFF"
        >
          <Picker.Item
            label=""
            value="Yellow"
            style={{ backgroundColor: "#F2D404" }}
          />
          <Picker.Item
            label=""
            value="Blue"
            style={{ backgroundColor: "#0420f2" }}
          />
          <Picker.Item
            label=""
            value="Red"
            style={{ backgroundColor: "#f20404" }}
          />
        </Picker>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomColor: "#fff",
          borderBottomWidth: 2,
          paddingBottom: 8,
          marginTop: 34,
          marginHorizontal: 16,
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 18, fontWeight: "500" }}>
          Som dos botões
        </Text>
        <Switch
          onValueChange={(value) => updateSystemSoundActive(value)}
          value={systemSoundActive}
          thumbColor={LUOP_COLORS.primary}
          trackColor={{
            false: LUOP_COLORS.white,
            true: LUOP_COLORS.white,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default SettingsScreen;
