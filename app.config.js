export default {
  "expo": {
    "name": "tjapp-app-react-native",
    "slug": "tjapp-app-react-native",
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
      "bundleIdentifier": "com.rtorenv.tjappappreactnative"
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
      "API_URL": process.env.API_URL,  // "https://api.develop.tjapp.nl/api",
      "eas": {
        "projectId": "1afbbeec-18ea-4c48-be2a-9b5ca8b69c1a"
      }
    },
    "runtimeVersion": {
      "policy": "sdkVersion"
    }
  }
}
