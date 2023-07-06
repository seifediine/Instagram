import React from 'react'
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native'
import {FeedPost} from './components/FeedPost'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FeedPost />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  app: {
    flex: 1
  }
})
