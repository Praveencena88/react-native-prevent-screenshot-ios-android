# react-native-prevent-screenshot-ios-android

This package is used to block taking screenshot, screen recording and screen sharing of specific screens for both Android and IOS apps

## Installation

```sh
npm install react-native-prevent-screenshot-ios-android
```

## Usage

```js
import { enableSecureView, disableSecureView, forbidAndroidShare, allowAndroidShare } from 'react-native-prevent-screenshot-ios-android';
import { Platform } from 'react-native'
// ...

if (Platform.OS === 'android') {
  forbidAndroidShare(); //This function blocks the Screen share/Recording and taking screenshot for android devices.
  allowAndroidShare(); //This function allows to provide back the Screen share/Recording and screenshot functionality for android devices
}
if (Platform.OS == 'ios') {
  enableSecureView(); //This function blocks the Screen share/Recording and taking screenshot for iOS devices.
  disableSecureView(); //This function allows to provide back the Screen share/Recording and screenshot functionality for iOS devices
}

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
