import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { getTrackingStatus, TrackingStatus } from '../utils/TrackingModule';

export default function AcceptScreen({ navigation }) {
  const [trackingStatus, setTrackingStatus] = useState('(loading)');

  useEffect(() => {
    getTrackingStatus()
      .then((status) => {
        setTrackingStatus(status);
      })
      .catch((e) => Alert.alert('Error', e?.toString?.() ?? e));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Tracking Status: {trackingStatus}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
