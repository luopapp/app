import { StyleSheet } from "react-native";

import { LuopColors } from "../../assets/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LuopColors.Neutro.Black,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: LuopColors.Neutro.White,
    borderBottomWidth: 2,
    paddingBottom: 8,
    marginTop: 34,
    marginHorizontal: 16,
  },
  inputLabel: {
    color: LuopColors.Neutro.White,
    fontSize: 18,
    fontWeight: "500",
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
    backgroundColor: LuopColors.Yellow,
    padding: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: LuopColors.Neutro.Black,
  },
});
