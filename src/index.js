import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Navigation from './Navigation';

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#FFF" />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
}
