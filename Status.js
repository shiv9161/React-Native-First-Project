import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './Card';

const App = () => {

  return (
    <View style={styles.container}>
      <Card />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
