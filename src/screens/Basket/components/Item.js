import { Image, StyleSheet, View } from "react-native";
import Text from "../../../components/Text";

export default function Item({ item: { name, image } }) {
  return (
    <View style={styles.item}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center",
  },
  image: {
    width: 32,
    height: 32,
  },
  name: {
    fontSize: 16,
    color: "#464646",
    lineHeight: 26,
    marginLeft: 12,
  },
})