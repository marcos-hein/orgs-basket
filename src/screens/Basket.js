import React from 'react'
import { StyleSheet, Image, Dimensions, View } from 'react-native'

import Text from '../components/Text'

import topImage from '../../assets/topo.png'
import logoImage from '../../assets/logo.png'

const width = Dimensions.get('screen').width

export default function Basket() {
  return (
    <>
      <Image source={topImage} style={styles.topImage} />
      <Text style={styles.title}>Detalhes da Cesta</Text>

      <View style={styles.bucket}>
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
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  topImage: {
    width: "100%",
    height: 578 / 768 * width,
  },
  title: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 26,
    color: "white",
    padding: 16,
  },
  bucket: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
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