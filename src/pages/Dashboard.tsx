import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  FlatList,
  ActivityIndicator
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { RectButton } from 'react-native-gesture-handler'
import { SvgUri } from 'react-native-svg'

import Load from '../components/Load'

import CardImage from '../components/CardImage'

import api from '../services/api'

interface EnvironmentProps {
  key: string
  title: string
}

interface PlantsProps {
  id: string
  name: string
  about: string
  water_tips: string
  photo: string
  environments: [string]
  frequency: {
    times: number
    repeat_every: string
  }
}

export default function Dashboard() {
  // States
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([])
  const [plants, setPlants] = useState<PlantsProps[]>([])
  const [loading, setLoading] = useState(true)
  const [indexEnvironment, setIndexEnvironment] = useState<Number>()
  const [page, setPage] = useState(1)
  const [loadingMore, setLoadingMore] = useState(false)
  const [loadingAll, setLoadingAll] = useState(false)

  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api.get('plants_environments')
      setEnvironments([
        {
          key: 'all',
          title: 'todos'
        },
        ...data
      ])
    }
    fetchEnvironment()
  }, [])

  async function fetchPlant() {
    const { data } = await api.get(`plants?_page=${page}&_limit=6`)
    if (!data) {
      return setLoading(true)
    }
    if (page > 1) {
      setPlants(oldValue => [...oldValue, ...data])
    } else {
      setPlants(data)
    }
    setLoading(false)
    setLoadingMore(false)
  }

  useEffect(() => {
    fetchPlant()
  }, [])

  function handleSelectedEnvironments(index: any) {
    setIndexEnvironment(index)
  }

  function handleFetchMore(distance: number) {
    if (distance < 1) {
      return
    }
    setPage(oldValue => oldValue + 1)
    setLoadingMore(true)
    fetchPlant()
  }

  if (loading) {
    return <Load />
  }

  return (
    <SafeAreaView style={style.container}>
      <StatusBar hidden={false} backgroundColor="#32B768" translucent={false} />

      <View style={style.header}>
        <View style={style.headerText}>
          <Text style={style.saudacao}>Olá,</Text>
          <Text style={style.name}>Alexandre</Text>
        </View>
        <CardImage />
      </View>

      <Text style={style.subTitle}>
        Em qual ambiente {'\n'}
        você quer colocar sua planta?
      </Text>

      <View>
        <ScrollView
          horizontal
          style={style.scrollEnvironments}
          showsHorizontalScrollIndicator={false}
        >
          {environments.map((environment, index) => {
            return (
              <RectButton
                key={index}
                style={[
                  style.button,
                  index == indexEnvironment && { backgroundColor: '#d0ebdb' }
                ]}
                onPress={() => handleSelectedEnvironments(index)}
              >
                <Text style={style.buttonText}>{environment.title}</Text>
              </RectButton>
            )
          })}
        </ScrollView>
      </View>

      <View style={style.scrollPlants}>
        <FlatList
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          data={plants}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <RectButton style={style.buttonPlants}>
                <View style={{ alignItems: 'center' }}>
                  <SvgUri width={80} height={80} uri={item.photo} />
                  <Text style={style.buttonPlantText}>{item.name}</Text>
                </View>
              </RectButton>
            )
          }}
          onEndReachedThreshold={0.3}
          onEndReached={({ distanceFromEnd }) => {
            handleFetchMore(distanceFromEnd)
          }}
          ListFooterComponent={
            loadingMore ? <ActivityIndicator color={'#32B768'} /> : <></>
          }
        />
      </View>

      <StatusBar hidden={false} translucent={false} />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },

  header: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  headerText: {
    flex: 1,
    width: '100%'
  },

  saudacao: {
    color: '#52665a',
    fontSize: 32,
    lineHeight: 36
  },
  name: {
    color: '#52665a',
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 36
  },

  subTitle: {
    marginVertical: 24,
    fontSize: 17,
    lineHeight: 23,
    color: '#5C6660'
  },

  scrollEnvironments: {},

  scrollPlants: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 15
  },

  button: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#e3e3e3',
    marginRight: 10
  },

  buttonPlants: {
    flex: 1,
    maxWidth: '45%',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#e3e3e3',
    margin: 8
  },

  buttonText: {
    color: '#02381a'
  },
  buttonPlantText: {
    color: '#02381a',
    marginVertical: 16,
    fontWeight: 'bold'
  }
})
