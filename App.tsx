import React, { FC } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { ThemeProvider } from "react-native-magnus";
import LinearGradient from 'react-native-linear-gradient'
import { Home } from './src/modules/Home';
import { theme } from './src/utils';
import { Provider } from 'react-redux';
import store from './src/store';

StatusBar.setBarStyle('light-content')
const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LinearGradient colors={['#4f1929', '#4f1929', 'white', 'white']} style={{ flex: 1 }}>
          <SafeAreaView style={{ flex: 1 }}>
            <Home />
          </SafeAreaView>
        </LinearGradient>
      </ThemeProvider>
    </Provider>
  )
}
export default App;