import { Image, StyleSheet, View } from "react-native"

import Text from "../../../components/Text"
import logoImage from "../../../../assets/logo.png"

export default function Details() {
  return (
    <>
      <Text style={styles.productName}>Cesta de Verduras</Text>
      <View style={styles.farmWrapper}>
        <Image source={logoImage} style={styles.farmImage} />
        <Text style={styles.farmName}>Jenny Jack Farm</Text>
      </View>
      <Text style={styles.description}>
        Uma cesta com produtos selecionados
        cuidadosamente, da fazenda para a sua casa
      </Text>
      <Text style={styles.price}>R$ 50,00</Text>
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