import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const OrphanageData: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>OrphanageData</Text>
    </View>
  );
};

export default OrphanageData;

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
