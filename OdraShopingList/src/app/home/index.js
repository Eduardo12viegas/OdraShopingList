import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TextImput,
  touchableOpacity
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-Icons'

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/background.jpg')}
        resizeMode='repeat'
        style={{ flex: 1, justfyContend: 'flex-start' }}
      >
        <View styles={styles.header}>
          <Text style={styles.title}> Lista de produtos </Text>
          <Ionicons name="trash" size={32} color='#fff' />
        </View>

      <View style={styles.footer}>

      </View>
      </ImageBackground>
      <Statusbar style="light" BackgroundColor='#000' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})