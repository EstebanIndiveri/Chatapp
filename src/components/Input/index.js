import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from 'react-native';
import { Input as InputNB, Icon } from 'native-base';

export default function index() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <InputNB
          placeholder="Mensaje ... "
          style={styles.input}
          placeholderTextColor="gray"
        />
        <TouchableOpacity>
          <Icon name="send" style={styles.iconSend} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16202b',
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
    paddingHorizontal: 20,
  },
  item: {
    borderColor: '#16202b',
  },
  input: {
    color: '#FFF',
  },
  iconSend: {
    color: '#FFF',
  },
});
