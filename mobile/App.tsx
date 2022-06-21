import 'react-native-gesture-handler';

import AppLoading from 'expo-app-loading';

import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { 
  useFonts, 
  Inter_400Regular, 
  Inter_500Medium } 
  from '@expo-google-fonts/inter';
  import * as SplashScreen from 'expo-splash-screen';
  
  import Widget from './src/components/Widget';
  import { theme } from './src/theme';

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  SplashScreen.hideAsync();

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}>
      <StatusBar 
        style='light'
        backgroundColor='transparent' 
        translucent
      />

      <Widget />
    </View>
  );
}
