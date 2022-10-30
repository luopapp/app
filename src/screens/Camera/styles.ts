import { StyleSheet } from "react-native";

import { LUOP_COLORS } from "../../assets/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    justifyContent: "space-between",
  },
  topButtonsContainer: {
    justifyContent: "space-between",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    margin: 24,
  },
  button: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: LUOP_COLORS.primary,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 4,
    borderColor: LUOP_COLORS.secondary,
    borderWidth: 2,
  },
  buttonDisable: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: LUOP_COLORS.white,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 4,
    borderColor: LUOP_COLORS.secondary,
    borderWidth: 2,
  },
});
