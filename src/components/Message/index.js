import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import letterColors from '../../utils/letterColors';

export default function Message({ message: { userName, text, time }, name }) {
  const thisIsMe = name === userName;
  const [bgColorLetter, setBgColorLetter] = useState(null);
  const conditionalStyle = {
    container: {
      justifyContent: thisIsMe ? 'flex-end' : 'flex-start',
    },
    viewMessage: {
      backgroundColor: thisIsMe ? '#f0f0f1' : '#4b86f0',
    },
    message: {
      color: thisIsMe ? '#000' : '#FFF',
      textAlign: thisIsMe ? 'right' : 'left',
    },
  };

  useEffect(() => {
    const char = userName.trim()[0].toUpperCase();
    const indexLetter = char.charCodeAt() - 65;
    setBgColorLetter(letterColors[indexLetter]);
  }, [userName]);

  return (
    <View style={[styles.container, conditionalStyle.container]}>
      {!thisIsMe && (
        <View
          style={[
            styles.letterView,
            { backgroundColor: `rgb(${bgColorLetter})` },
          ]}>
          <Text styles={styles.letter} color="white">
            {userName.substr(0, 1).toUpperCase()}
          </Text>
        </View>
      )}

      <View style={[styles.viewMessage, conditionalStyle.viewMessage]}>
        <Text style={[styles.message, conditionalStyle.message]}>{text}</Text>
        <Text
          style={[styles.time, thisIsMe ? styles.timeLeft : styles.timeRight]}>
          {time}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
  viewMessage: {
    borderRadius: 12,
    minHeight: 35,
    minWidth: '40%',
    maxWidth: '80%',
  },
  message: {
    padding: 10,
    paddingBottom: 25,
  },
  time: {
    fontSize: 10,
    position: 'absolute',
    bottom: 5,
  },
  timeRight: {
    right: 8,
    color: '#FFF',
  },
  timeLeft: {
    left: 8,
    color: 'gray',
  },
  letterView: {
    height: 35,
    width: 35,
    borderRadius: 50,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: '#f00',
  },
  letter: {
    fontSize: 18,
    color: '#FFF',
  },
});
