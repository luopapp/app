import { MaterialIcons } from "@expo/vector-icons/";
import { useContext } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  ConfigContext,
  ConfigContextType,
  SystemColorTypes,
} from "../../contexts/config";
import { styles } from "./styles";

export type HeaderPropsType = {
  icon:
    | "image"
    | "settings"
    | "image"
    | "settings"
    | "tune"
    | "invert-colors"
    | "photo-camera"
    | "zoom-out"
    | "zoom-in";
  size: number;
  disabled?: boolean;
  onClick: () => void;
};

export function CameraButton({
  disabled = false,
  size,
  icon,
  onClick,
}: HeaderPropsType) {
  const { systemColor, systemSoundActive } = useContext(
    ConfigContext
  ) as ConfigContextType;

  return (
    <TouchableOpacity
      style={{
        ...(disabled ? styles.buttonDisable : styles.button),
        ...styles[`button${systemColor}`],
      }}
      disabled={disabled}
      onPress={onClick}
    >
      <MaterialIcons name={icon} size={size}></MaterialIcons>
    </TouchableOpacity>
  );
}
