import React, { useEffect, useState, useRef } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import moment from 'moment';
import {
  Heading,
  StatusBar,
  Box,
  HStack,
  Text,
  View,
  Center,
} from 'native-base';
import { map } from 'lodash';
import Message from '../components/Message';
import Input from '../components/Input';
import firebase from '../utils/firebase';
import 'firebase/database';

export default function Chat(props) {
  const { userName } = props;
  const [messages, setMessages] = useState([]);
  const chatScrollRef = useRef(0);
  useEffect(() => {
    const chat = firebase.database().ref('general');
    chat.on('value', snapshot => {
      setMessages(snapshot.val());
    });
  }, []);

  useEffect(() => {
    chatScrollRef.current.scrollTo({ y: 10000000 });
  }, [messages]);

  const sendMessage = message => {
    moment.locale('es');
    const time = moment().format('HH:MM a');
    firebase
      .database()
      .ref('general')
      .push({ userName, text: message, time: time });
  };

  return (
    <>
      <StatusBar backgroundColor="#16202b" barStyle="light-content" />
      <Box safeAreaTop backgroundColor="#16202b" />
      <HStack
        bg="#16202b"
        px={0}
        py={5}
        justifyContent="center"
        alignItems="center">
        <HStack alignItems="center" justifyContent="center">
          <Text color="white" fontSize={19} fontWeight="bold">
            Chat
          </Text>
        </HStack>
      </HStack>
      <View style={styles.content}>
        <ScrollView style={styles.chatView} ref={chatScrollRef}>
          {map(messages, (message, index) => (
            <Message key={index} message={message} name={userName} />
          ))}
        </ScrollView>
        <Input sendMessage={sendMessage} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  chatView: {
    backgroundColor: '#1b2734',
  },
});
