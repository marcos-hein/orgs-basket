import { StyleSheet, TouchableOpacity } from "react-native";
import Text from "./Text";

export default function Button({ text, style, onPress }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    backgroundColor: '#2a9f85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  textButton: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  }
})