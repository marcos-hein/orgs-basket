import { StyleSheet, Image, Dimensions } from 'react-native'

import Text from '../../../components/Text'
import topImage from '../../../../assets/topo.png'

const width = Dimensions.get('screen').width

export default function TopScreen({ title }) {
  return (
    <>
      <Image source={topImage} style={styles.topImage} />
      <Text style={styles.title}>{title}</Text>
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
})