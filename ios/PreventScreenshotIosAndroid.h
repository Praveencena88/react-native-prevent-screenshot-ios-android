#ifdef __cplusplus
#import "react-native-prevent-screenshot-ios-android.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNPreventScreenshotIosAndroidSpec.h"

@interface PreventScreenshotIosAndroid : NSObject <NativePreventScreenshotIosAndroidSpec>
#else
#import <React/RCTBridgeModule.h>
#import <React/RCTConvert.h>
#import <React/RCTEventEmitter.h>

@interface PreventScreenshotIosAndroid : RCTEventEmitter <RCTBridgeModule>
#endif

@end
