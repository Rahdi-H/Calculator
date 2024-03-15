import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';
import { ThemeContext } from './src/context.js/ThemeContext';
import { useState } from 'react';
import Keyboard from './src/components/Keyboard';

export default function App() {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme == 'light'? [{backgroundColor: 'white'}, styles.container] : [{backgroundColor: 'black'}, styles.container]}>
        <StatusBar style={'auto'} />
        <Switch style={styles.switch} trackColor={'white'} thumbColor={'white'} value={theme === 'light'} onValueChange={()=> setTheme(theme == 'light'? 'dark': 'light')}/>
        <Keyboard/>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:'flex',
    alignItems: 'center'
  },
  switch: {
    marginTop: 25,
    textAlign: 'center'
  }
});
