import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { store } from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';
import JobDetail from './src/screens/JobDetail';
import { StackParamList } from './src/utils/types';

const Stack = createStackNavigator<StackParamList>();

export default function App() {
  let [fontsLoaded] = useFonts({
    Anton_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName="Home"
            >
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="JobDetail" component={JobDetail} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    );
  }
}
