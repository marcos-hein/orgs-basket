import { Image, StyleSheet, View } from "react-native"

import Text from "../../../components/Text"
import Button from "../../../components/Button"

export default function Details({ farmLogo, productName, farmName, description, price, textButton, items }) {
  return (
    <>
      <Text style={styles.productName}>{productName}</Text>
      <View style={styles.farmWrapper}>
        <Image source={farmLogo} style={styles.farmImage} />
        <Text style={styles.farmName}>{farmName}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>

      <Button text={textButton} />
    </>
  )
}

const styles = StyleSheet.create({
  productName: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  farmImage: {
    width: 32,
    height: 32,
  },
  farmWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  description: {
    color: "#a3a3a3",
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: "#2a9f85",
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 42,
    marginTop: 8,
  },
})