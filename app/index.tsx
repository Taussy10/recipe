import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const Index = () => {
    if (true) {
        return <Redirect href={"/(tabs)"} />
    }
  return (
    <View>
      <Text>Index</Text>
    </View>
  )
}

export default Index
