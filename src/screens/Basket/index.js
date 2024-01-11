import React from 'react'
import { FlatList, ScrollView, StyleSheet, View } from 'react-native'

import Text from '../../components/Text'
import TopScreen from './components/TopScreen'
import Details from './components/Details'
import Item from './components/Item'

export default function Basket({ topScreen, details, items }) {
  return (
    <FlatList
      data={items.list}
      renderItem={Item}
      keyExtractor={item => item.name}
      ListHeaderComponent={() => {
        return (
          <>
            <TopScreen {...topScreen} />
            <View style={styles.bucket}>
              <Details {...details} />
              <Text style={styles.title}>{items.title}</Text>
            </View>
          </>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  bucket: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    color: "#464646",
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
  },
})