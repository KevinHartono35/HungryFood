import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Center</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
