import { Colors, Constants, Text, View } from "react-native-ui-lib";
import { ActivityIndicator } from "react-native";

export const SplashScreen = () => {
  return (
    <View useSafeArea flex-1 center>
      <View center flex>
        <Text marginB-10 text10>
          Hi Buddy!
        </Text>
        <ActivityIndicator
          size={'large'}
          animating
          color={(Constants.isIOS ? Colors.grey20: Colors.primary)}
        />
      </View>
    </View>
  );
}