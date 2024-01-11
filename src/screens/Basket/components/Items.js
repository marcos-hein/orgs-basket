import { Image, StyleSheet, View } from "react-native";
import Text from "../../../components/Text";

export default function Items({ title, list }) {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      {list?.map(({ name, image }) => {
        return (
          <View key={name} style={styles.item}>
            <Image source={image} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
          </View >
        )
      })
      }
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    color: "#464646",
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
  },
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    paddingVertical: 16,
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