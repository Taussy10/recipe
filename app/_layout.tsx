import '../global.css';
import { Stack } from 'expo-router';
import { Poppins_400Regular, useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack ScreenOptions={{ headerShown: false}}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="index" />
      {/* <Stack.Screen name="modal" options={{ presentation: "modal" }} /> */}
    </Stack>
  );
}
