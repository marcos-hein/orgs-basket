import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import TopScreen from './components/TopScreen'
import Details from './components/Details'
import Items from './components/Items'

export default function Basket({ topScreen, details, items }) {
  return (
    <ScrollView>
      <TopScreen {...topScreen} />

      <View style={styles.bucket}>
        <Details {...details} />
        <Items {...items} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  bucket: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
})