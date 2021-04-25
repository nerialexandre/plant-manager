import { useNavigation } from '@react-navigation/core'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'

export default function UserConfirmation() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.emoji}>👍</Text>

      <Text style={style.title}>Prontinho</Text>

      <Text style={style.description}>
        Agora vamos começar a cuidar das suas plantinhas 🌱 com muito {'\n'}{' '}
        cuidado.
      </Text>

      <TouchableOpacity
        style={style.button}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <Text style={style.buttonText}>Comerçar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    marginVertical: 40,
    alignItems: 'center'
  },

  emoji: {
    marginBottom: 64,
    color: '#ffff',
    fontSize: 96
  },

  title: {
    marginBottom: 16,
    color: '#52665A',
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 30
  },

  description: {
    color: '#52665A',
    fontSize: 17,
    textAlign: 'center',
    lineHeight: 25,
    marginBottom: 40,
    paddingHorizontal: 30
  },

  button: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 80,
    backgroundColor: '#32B768'
  },

  buttonText: {
    fontSize: 17,
    color: '#fff',
    margin: 'auto',
    textAlign: 'center'
  }
})
