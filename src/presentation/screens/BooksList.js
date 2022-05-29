import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const BooksList = () => {
  return (
    <View style={styles.container}>
      <Text>BooksList</Text>
    </View>
  )
}

export default BooksList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})