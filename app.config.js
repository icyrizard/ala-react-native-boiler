export default {
  "expo": {
    "name": "ala-react-native",
    "slug": "ala--react-native",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0,
      "url": "https://u.expo.dev/1afbbeec-18ea-4c48-be2a-9b5ca8b69c1a"
    },
    "plugins": [
      [
        "expo-image-picker",
        {
          "photosPermission": "The app accesses your photos to let you add them to recipes."
        }
      ]
    ],
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.rtorenv.allareactnative"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "1afbbeec-18ea-4c48-be2a-9b5ca8b69c1a"
      }
    },
    "runtimeVersion": {
      "policy": "sdkVersion"
    }
  }
}
