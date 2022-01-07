import React, { FC } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from "react-native-magnus";
import LinearGradient from 'react-native-linear-gradient'
import { Routes } from './src/routes';
import { theme } from './src/utils';
import { Provider } from 'react-redux';
import store from './src/store';

StatusBar.setBarStyle('light-content')
const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <LinearGradient colors={['#4f1929', '#4f1929', 'white', 'white']} style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
              <Routes />
            </SafeAreaView>
          </LinearGradient>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  )
}
export default App;