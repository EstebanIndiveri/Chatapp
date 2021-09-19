import React, { useState } from 'react';
import { StyleSheet, View, LogBox } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import Login from './src/screens/Login';
import Chat from './src/screens/Chat';

LogBox.ignoreLogs(['Setting a timer']);

export default function App() {
  const [userName, setUserName] = useState(null);
  return (
    <NativeBaseProvider>
      <View style={styles.containter}>
        {!userName ? (
          <Login setUserName={setUserName} />
        ) : (
          <Chat userName={userName} />
        )}
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
