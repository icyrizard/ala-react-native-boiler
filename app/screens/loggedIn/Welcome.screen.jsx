import { Text, View } from "react-native-ui-lib";
import React from "react";

export const WelcomeScreen = () => {
  return (
    <View useSafeArea paddingH-25 flexGrow>
      <View marginT-100 centerV centerH>
        <Text h1 text20T>
          Hi friend!
        </Text>
      </View>
    </View>
  );
};