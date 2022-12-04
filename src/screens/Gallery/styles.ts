import { StyleSheet } from "react-native";

import { LuopColors } from "../../assets/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LuopColors.Neutro.Black,
  },
  image: {
    width: "100%",
    height: "88%",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
    padding: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: LuopColors.Neutro.Black,
  },
});
