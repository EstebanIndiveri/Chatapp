import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider, Container } from 'native-base';
import Login from './src/screens/Login';
import Chat from './src/screens/Chat';

export default function App() {
  const [userName, setUserName] = useState(null);
  return (
    <NativeBaseProvider>
      <View style={styles.containter}>
        {!userName ? <Login setUserName={setUserName} /> : <Chat />}
      </View>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  containter: {
    backgroundColor: '#16202b',
    flex: 1,
  },
});
