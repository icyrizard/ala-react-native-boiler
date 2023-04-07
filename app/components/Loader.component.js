import { ActivityIndicator } from "react-native";
import { Colors, Constants } from "react-native-ui-lib";

export const Loader = () => {
  return (
    <ActivityIndicator
      size={'small'}
      animating
      color={(Constants.isIOS ? Colors.grey20: Colors.primary)}
    />
  );
}