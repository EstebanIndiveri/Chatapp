import React from 'react';
import { View, Text } from 'react-native';

export default function Message({ userName, message }) {
  return (
    <View>
      <Text>{message.text}</Text>
    </View>
  );
}
