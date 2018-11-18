import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: "white",
    position: "absolute",
    bottom: 20,
  },
  wrapper: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 19,
    marginRight: 11,
  },
  text: {
    color: "white",
    fontSize: 16,
    paddingVertical: 20,
    fontWeight: "300",
  },
});