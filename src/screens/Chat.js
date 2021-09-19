import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from '../components/Input';

export default function Chat() {
  const sendMessage = message => {
    console.log(message);
  };

  return (
    <View style={styles.content}>
      <View>
        <Text>CHAT</Text>
      </View>
      <Input sendMessage={sendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
