import React, { Component, useState } from 'react';
import { StyleSheet,  View,  Text } from 'react-native';
import Header from './components/Header';
import MainScreen from './MainScreen';
export default function App() {
  
    return (
      <View style={styles.screen}>
      <Header title="Movie List"/>
      <MainScreen />
      </View>
    );
  
  
}
const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
