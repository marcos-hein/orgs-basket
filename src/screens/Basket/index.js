import React from 'react'
import { StyleSheet, View } from 'react-native'

import TopScreen from './components/TopScreen'
import Details from './components/Details'

export default function Basket() {
  return (
    <>
      <TopScreen />

      <View style={styles.bucket}>
        <Details />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  bucket: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
})