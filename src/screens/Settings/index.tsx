import { Picker } from "@react-native-picker/picker";
import { StackScreenProps } from "@react-navigation/stack";
import { useContext } from "react";
import { Text, View, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LuopColors } from "../../assets/colors";
import { Header } from "../../components/Header";
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
      <Header title="Configurações" onBack={handleToCamera}></Header>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Cor dos botões</Text>
        <Picker
          selectedValue={systemColor}
          onValueChange={(itemValue, _) => updateSystemColor(itemValue)}
          style={{ color: LuopColors.Neutro.White, width: 120 }}
          dropdownIconColor={LuopColors.Neutro.White}
        >
          <Picker.Item
            label=""
            value="Yellow"
            style={{ backgroundColor: LuopColors.Yellow }}
          />
          <Picker.Item
            label=""
            value="Blue"
            style={{ backgroundColor: LuopColors.Blue }}
          />
          <Picker.Item
            label=""
            value="Red"
            style={{ backgroundColor: LuopColors.Red }}
          />
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Som dos botões</Text>
        <Switch
          onValueChange={(value) => updateSystemSoundActive(value)}
          value={systemSoundActive}
          thumbColor={LuopColors[systemColor]}
          trackColor={{
            false: LuopColors.Neutro.White,
            true: LuopColors.Neutro.White,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default SettingsScreen;
