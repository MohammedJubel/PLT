import { NativeModules, Platform } from 'react-native';

const TrackingTransparency = NativeModules.RNTracking;

export type TrackingStatus =
  | 'unavailable'
  | 'denied'
  | 'authorized'
  | 'restricted'
  | 'not-determined';

export async function requestTrackingPermission(): Promise<TrackingStatus> {
  if (Platform.OS !== 'ios') return 'unavailable';
  return await TrackingTransparency?.requestTrackingPermission();
}

export async function getTrackingStatus(): Promise<TrackingStatus> {
  if (Platform.OS !== 'ios') return 'unavailable';
  return await TrackingTransparency?.getTrackingStatus();
}
