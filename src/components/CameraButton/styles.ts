import { StyleSheet } from "react-native";

import { LuopColors } from "../../assets/colors";

export const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 4,
    borderColor: LuopColors.Neutro.Black,
    borderWidth: 2,
  },
  buttonYellow: {
    backgroundColor: LuopColors.Yellow,
  },
  buttonBlue: {
    backgroundColor: LuopColors.Blue,
  },
  buttonRed: {
    backgroundColor: LuopColors.Red,
  },
  buttonDisable: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: LuopColors.Neutro.White,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 4,
    borderColor: LuopColors.Neutro.Black,
    borderWidth: 2,
  },
});
