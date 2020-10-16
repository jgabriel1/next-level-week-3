import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SelectMapPosition: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SelectMapPosition</Text>
    </View>
  );
};

export default SelectMapPosition;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontFamily: 'nunito700',
  },
});
