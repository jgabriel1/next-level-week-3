import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const OrphanageDetails: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>OrphanageDetails</Text>
    </View>
  );
};

export default OrphanageDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'nunito700',
    fontSize: 32,
  },
});
