import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Import screens
import BooksList from 'screens/BooksList';
import BookmarksList from 'screens/BookmarksList';

const Tab = createBottomTabNavigator()

const tabBarOptions = {
    tabBarActiveTintColor: '#FFFFFF',
    tabBarInactiveTintColor: '#2D3038',
    tabBarShowLabel: false
}

const screenOptions = (route, color) => {
    let iconName;

    switch (route.name) {
        case 'BooksList':
            iconName = 'view-dashboard'
            break;
        case 'BookmarksList':
            iconName = 'bookmark-multiple-outline'
            break;
        default:
            break;
    }

    return <MaterialCommunityIcons name={iconName} color={color} size={24} />;
}


const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
          initialRouteName='BooksList'
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => screenOptions(route, color)
          })}>
              <Tab.Screen name='BooksList' component={BooksList}/>
              <Tab.Screen name='BookmarksList' component={BookmarksList}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator