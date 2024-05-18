import { Stack } from "expo-router";
import { ActivityIndicator } from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    SplashScreen.hideAsync();
  }
  return (
    <Stack
      screenOptions={{
        title: "Advent",
        headerStyle: { backgroundColor: "#fff" },
      }}
    />
  );
}
