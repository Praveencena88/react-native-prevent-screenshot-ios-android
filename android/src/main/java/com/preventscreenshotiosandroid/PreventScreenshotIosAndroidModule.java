package com.preventscreenshotiosandroid;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import android.view.WindowManager;

import static com.facebook.react.bridge.UiThreadUtil.runOnUiThread;

@ReactModule(name = PreventScreenshotIosAndroidModule.NAME)
public class PreventScreenshotIosAndroidModule extends ReactContextBaseJavaModule {
  private static final String PREVENT_SCREENSHOT_ERROR_CODE = "PREVENT_SCREENSHOT_ERROR_CODE";
  public static final String NAME = "PreventScreenshotIosAndroid";

  public PreventScreenshotIosAndroidModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  static {
    System.loadLibrary("cpp");
  }

  private static native double nativeMultiply(double a, double b);

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  public void multiply(double a, double b, Promise promise) {
    promise.resolve(nativeMultiply(a, b));
  }

  @ReactMethod
  public void forbid(Promise promise) {
    runOnUiThread(new Runnable() {
      @Override
      public void run() {
        try {
          getCurrentActivity().getWindow().addFlags(WindowManager.LayoutParams.FLAG_SECURE);
          promise.resolve("Done. Screenshot taking locked.");
        } catch(Exception e) {
          promise.reject(PREVENT_SCREENSHOT_ERROR_CODE, "Forbid screenshot taking failure.");
        }
      }
    });
  }

  @ReactMethod
  public void allow(Promise promise) {
    runOnUiThread(new Runnable() {
      @Override
      public void run() {
        try {
          getCurrentActivity().getWindow().clearFlags(WindowManager.LayoutParams.FLAG_SECURE);
          promise.resolve("Done. Screenshot taking unlocked.");
        } catch (Exception e) {
          promise.reject(PREVENT_SCREENSHOT_ERROR_CODE, "Allow screenshot taking failure.");
        }
      }
    });
  }

}
