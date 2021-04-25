import React from 'react'
import { StyleSheet, Image } from 'react-native'

export default function CardImage() {
  return (
    <Image style={style.container} source={require('../../assets/icon.png')} />
  )
}

const style = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    backgroundColor: '#f2ecec',
    borderRadius: 50
  }
})
