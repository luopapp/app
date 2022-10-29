import { StyleSheet } from "react-native";

import { LUOP_COLORS } from "../../assets/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 32,
    backgroundColor: LUOP_COLORS.primary,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: LUOP_COLORS.secondary,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 4,
    borderColor: "#1E2329",
    borderWidth: 2,
    marginTop: 12,
  },
  buttonText: {
    color: LUOP_COLORS.white,
    fontWeight: "bold",
    fontSize: 18,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
});
