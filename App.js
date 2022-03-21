import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FeedScreen from './screens/FeedScreen.js';
import ExploreScreen from './screens/ExploreScreen.js';
import InboxScreen from './screens/InboxScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';

import DetailScreen from './screens/DetailScreen.js';
import IdeaFeed from './screens/IdeaFeed.js';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Gallery() {
  return (
    <Stack.Navigator initialRoute="Feed">
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}
function IdeaGallery() {
  return (
    <Stack.Navigator initialRoute="Explore">
      <Stack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Idea" component={IdeaFeed} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Gallery} options={{ headerShown: true }} />
      <Tab.Screen name="Explore" component={IdeaGallery} options={{ headerShown: true }} />
      <Tab.Screen name="Inbox" component={InboxScreen} options={{ headerShown: true }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: true }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}