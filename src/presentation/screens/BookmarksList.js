import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BookmarksList = () => {
  return (
    <View style={styles.container}>
      <Text>BookmarksList</Text>
    </View>
  )
}

export default BookmarksList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      }
})