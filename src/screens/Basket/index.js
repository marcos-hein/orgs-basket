import React from 'react'
import { StyleSheet, View } from 'react-native'

import TopScreen from './components/TopScreen'
import Details from './components/Details'

export default function Basket({ topScreen, details }) {
  return (
    <>
      <TopScreen {...topScreen} />

      <View style={styles.bucket}>
        <Details {...details} />
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