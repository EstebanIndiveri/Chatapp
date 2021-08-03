import React from 'react';
import { View, StyleSheet, StatusBar, Image, SafeAreaView } from 'react-native';
import { Item, Input, Text, Button } from 'native-base';
import logoApp from '../assets/chatLogo.png';

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View>
        <Image source={logoApp} resizeMode="contain" style={styles.logo} />
      </View>
      <View>
        <Input
          placeholder="Nombre de usuario"
          style={{ color: '#FFF' }}
          placeholderTextColor="grey"
        />
      </View>
      <Button style={styles.btnLogin}>
        <Text style={{ color: '#FFF' }}>Entrar</Text>
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginVertical: 100,
  },
  logo: {
    width: '100%',
    height: 200,
    marginBottom: 30,
  },
  btnLogin: {
    marginTop: 40,
    justifyContent: 'center',
    backgroundColor: '#0098d3',
  },
});
