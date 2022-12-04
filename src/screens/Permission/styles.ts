import { StyleSheet } from "react-native";

import { LuopColors } from "../../assets/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 32,
    backgroundColor: LuopColors.Neutro.Black,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    backgroundColor: LuopColors.Neutro.Black,
  },
  title: {
    color: LuopColors.Neutro.White,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  subTitle: {
    color: LuopColors.Neutro.White,
    fontSize: 18,
    textAlign: "center",
    marginBottom: 12,
  },
  button: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: LuopColors.Yellow,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 4,
    borderColor: LuopColors.Neutro.Black,
    borderWidth: 2,
    marginTop: 12,
  },
  buttonText: {
    color: LuopColors.Neutro.Black,
    fontWeight: "bold",
    fontSize: 24,
    paddingHorizontal: 24,
    paddingVertical: 6,
  },
});
