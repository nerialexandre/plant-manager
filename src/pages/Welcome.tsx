import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native'
// import CardImage from '../components/CardImage'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import walteringImg from '../../assets/watering.png'

import { useNavigation } from '@react-navigation/core'

export default function Welcome() {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.title}>Gerencie suas plantas de forma fácil!</Text>

      <Image source={walteringImg} style={{ margin: 'auto' }} />

      <Text style={style.description}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <TouchableOpacity
        style={style.button}
        onPress={() => navigation.navigate('UserIdentification')}
      >
        <Text style={style.buttonText}>
          {'Acessar '}
          <FontAwesome name="leaf" size={16} />
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-around',
    marginVertical: 40,
    alignItems: 'center'
  },

  title: {
    marginTop: 15,
    color: '#52665A',
    marginBottom: 20,
    fontSize: 32,
    paddingHorizontal: 24,
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: 38
  },

  description: {
    color: '#52665A',
    marginTop: 15,
    marginBottom: 20,
    fontSize: 17,
    lineHeight: 25,
    paddingHorizontal: 30,
    textAlign: 'center'
  },

  button: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#32B768'
  },

  buttonText: {
    fontSize: 20,
    color: '#fff',
    margin: 'auto',
    textAlign: 'center'
  }
})
