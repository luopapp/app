import { StyleSheet } from "react-native";

import { LUOP_COLORS } from "../../assets/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LUOP_COLORS.secondary,
  },
  header: {
    backgroundColor: LUOP_COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  headerIcon: {
    paddingHorizontal: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
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
    backgroundColor: LUOP_COLORS.primary,
    padding: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: LUOP_COLORS.secondary,
  },
});