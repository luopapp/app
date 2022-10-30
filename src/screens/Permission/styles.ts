import { StyleSheet } from "react-native";

import { LUOP_COLORS } from "../../assets/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 32,
    backgroundColor: LUOP_COLORS.secondary,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    backgroundColor: LUOP_COLORS.secondary,
  },
  title: {
    color: LUOP_COLORS.white,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  subTitle: {
    color: LUOP_COLORS.white,
    fontSize: 18,
    textAlign: "center",
    marginBottom: 12,
  },
  button: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: LUOP_COLORS.primary,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 4,
    borderColor: "#1E2329",
    borderWidth: 2,
    marginTop: 12,
  },
  buttonText: {
    color: LUOP_COLORS.secondary,
    fontWeight: "bold",
    fontSize: 24,
    paddingHorizontal: 24,
    paddingVertical: 6,
  },
});
