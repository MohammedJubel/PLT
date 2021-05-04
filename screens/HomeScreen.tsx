import React, { useState, useEffect, useCallback } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  NativeModules,
} from 'react-native';
import {
  getTrackingStatus,
  requestTrackingPermission,
  TrackingStatus,
} from '../utils/TrackingModule';

export default function HomeScreen({ navigation }) {
  const [trackingStatus, setTrackingStatus] = useState<
    TrackingStatus | '(loading)'
  >('(loading)');

  useEffect(() => {
    getTrackingStatus()
      .then((status) => {
        // console.log('status :>> ', status);
        setTrackingStatus(status);
        status === 'authorized' && navigation.navigate('Accepted');
        status === 'denied' && navigation.navigate('Denied');
      })
      .catch((e) => Alert.alert('Error', e.toString() ?? e));
  }, [trackingStatus]);

  const request = useCallback(async () => {
    try {
      const status = await requestTrackingPermission();
      setTrackingStatus(status);
    } catch (e) {
      Alert.alert('Error', e.toString() ?? e);
    }
  }, []);

  console.log(NativeModules, 'natmodules');
  return (
    <View style={styles.container}>
      <Text>Tracking Status: {trackingStatus}</Text>
      <Button title='Request Tracking Permission' onPress={request} />
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
