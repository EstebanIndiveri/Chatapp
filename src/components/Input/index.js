import React, { useState } from 'react';
import { Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { Input as InputNB, View, CheckIcon } from 'native-base';

export default function index() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <InputNB
          placeholder="Mensaje ... "
          style={styles.input}
          placeholderTextColor="gray"
        />
        <TouchableOpacity style={styles.checkContainer}>
          <CheckIcon color={styles.input.color} />
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
  },
  input: {
    color: '#FFF',
    width: '90%',
  },
  checkContainer: {
    width: '12%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginHorizontal: 5,
  },
});
