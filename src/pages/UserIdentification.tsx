import { useNavigation } from '@react-navigation/core'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native'

export default function UserIdentification() {
  const navigation = useNavigation()
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [isSubmited, setISubmited] = useState(false)

  function handleInputChange(value: string) {
    setIsFilled(!!value)
  }

  function handleInputBlur() {
    setIsFocused(false)
  }

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleSubmit() {
    if (isFilled) {
      navigation.navigate('UserConfirmation')
    }
    setISubmited(true)
  }

  return (
    <SafeAreaView style={style.container}>
      <View style={style.content}>
        <Text style={style.emoji}>
          {isFilled ? '😄' : !isFilled && isSubmited ? '🙁' : '😀'}
          {/* { isFilled ? '🙈' : '🐵'} */}
        </Text>

        <Text style={style.title}>
          {isFilled
            ? 'Como podemos chamar você?'
            : !isFilled && isSubmited
              ? 'É necessario que nos informe um nome.'
              : 'Como podemos chamar você?'}
        </Text>

        <TextInput
          placeholder={'Digite seu nome'}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          onChangeText={handleInputChange}
          style={[
            style.input,
            (isFocused || isFilled) && { borderBottomColor: '#32B768' },
            !isFilled && isSubmited && { borderBottomColor: '#e42020' }
          ]}
        />

        <TouchableOpacity style={style.button} onPress={handleSubmit}>
          <Text style={style.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },

  content: {
    marginTop: '35%',
    flex: 1,
    justifyContent: 'flex-start',
    marginVertical: 40,
    alignItems: 'center'
  },

  emoji: {
    marginBottom: 18,
    color: '#ffff',
    fontSize: 40
  },

  title: {
    marginBottom: 20,
    color: '#52665A',
    fontSize: 24,
    paddingHorizontal: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 32
  },

  input: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 40,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CFCFCF',
    width: '80%'
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
