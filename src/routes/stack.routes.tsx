import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../pages/Welcome'
import UserConfirmation from '../pages/UserConfirmation'
import UserIdentification from '../pages/UserIdentification'
import Dashboard from '../pages/Dashboard'

const Stack = createStackNavigator()

const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#fff'
        }
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ title: 'Welcome' }}
      />

      <Stack.Screen
        name="UserIdentification"
        component={UserIdentification}
        options={{ title: 'UserIdentification' }}
      />
      <Stack.Screen
        name="UserConfirmation"
        component={UserConfirmation}
        options={{ title: 'UserConfirmation' }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ title: 'Dashboard' }}
      />
    </Stack.Navigator>
  )
}

export default AppRoutes
