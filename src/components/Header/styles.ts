import { StyleSheet } from "react-native";

import { LuopColors } from "../../assets/colors";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  headerYellow: {
    backgroundColor: LuopColors.Yellow,
  },
  headerBlue: {
    backgroundColor: LuopColors.Blue,
  },
  headerRed: {
    backgroundColor: LuopColors.Red,
  },
  headerIcon: {
    paddingHorizontal: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
