#include <jni.h>
#include "react-native-prevent-screenshot-ios-android.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_preventscreenshotiosandroid_PreventScreenshotIosAndroidModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return preventscreenshotiosandroid::multiply(a, b);
}
