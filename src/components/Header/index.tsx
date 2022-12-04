import { MaterialIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { ConfigContext, ConfigContextType } from "../../contexts/config";
import { styles } from "./styles";

export type HeaderPropsType = {
  title: string;
  onBack: () => void;
};

export function Header({ title, onBack }: HeaderPropsType) {
  const { systemColor } = useContext(ConfigContext) as ConfigContextType;
  return (
    <View
      style={{
        ...styles.header,
        ...styles[`header${systemColor}`],
      }}
    >
      <TouchableOpacity style={styles.headerIcon} onPress={onBack}>
        <MaterialIcons name="arrow-back-ios" size={24} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}
