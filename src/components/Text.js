import { StyleSheet, Text as RNText } from "react-native";

export default function Text({ children, style }) {
  let newStyle = styles.text;

  if (style?.fontWeight === "bold") {
    newStyle = styles.textBold;
  }

  return <RNText style={[style, newStyle]}>{children}</RNText >
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
  },
  textBold: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
  }
})