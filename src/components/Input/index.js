import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  TextInput,
  Keyboard,
} from 'react-native';
import { View, CheckCircleIcon } from 'native-base';

export default function index(props) {
  const { sendMessage } = props;
  const [message, setMessage] = useState('');

  const onSubmit = () => {
    if (message.length > 0) {
      sendMessage(message);
      setMessage('');
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <TextInput
          placeholder="Mensaje ... "
          style={styles.input}
          placeholderTextColor="gray"
          value={message}
          multiline={true}
          maxLength={150}
          onChange={e => setMessage(e.nativeEvent.text)}
        />
        <TouchableOpacity style={styles.checkContainer} onPress={onSubmit}>
          <CheckCircleIcon color={styles.input.color} />
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
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 20,
  },
  input: {
    color: '#FFF',
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: '#323232',
  },
  checkContainer: {
    width: '12%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginHorizontal: 5,
  },
});
