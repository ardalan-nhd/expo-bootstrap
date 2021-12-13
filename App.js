import 'react-native-gesture-handler'
import { ThemeProvider } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { ProfileContext } from './context'

export default function App() {
  const [profile, setProfile] = useState({
    isAuth: false
  })

  return (
    <SafeAreaProvider>
      <ProfileContext.Provider value={{ ...profile, setProfile }}>
        <ThemeProvider>
        </ThemeProvider>
      </ProfileContext.Provider>
    </SafeAreaProvider>
  );
}