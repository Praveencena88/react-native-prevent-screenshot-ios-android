import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-prevent-screenshot-ios-android' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const PreventScreenshotIosAndroid = NativeModules.PreventScreenshotIosAndroid
  ? NativeModules.PreventScreenshotIosAndroid
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function enableSecureView() {
  return PreventScreenshotIosAndroid.enableSecureView();
}

export function disableSecureView() {
  return PreventScreenshotIosAndroid.disableSecureView();
}

export function forbidAndroidShare() {
  return PreventScreenshotIosAndroid.forbid();
}

export function allowAndroidShare() {
  return PreventScreenshotIosAndroid.allow();
}
