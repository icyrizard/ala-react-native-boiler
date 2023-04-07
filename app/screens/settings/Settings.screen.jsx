import { SafeAreaView, StyleSheet } from 'react-native';
import { useContext } from "react";
import { AuthContext, AxiosContext, UserContext } from "../../context/AxiosContext";
import { Button, Colors, Text, View } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";

export default function SettingsScreen({ navigation }) {
  const { user, setUser } = useContext(UserContext);
  const { setJwt } = useContext(AuthContext);

  const logoutCb = () => {
    setJwt(null);
    setUser(null);
  }

  const userObject = user.user;

  return (
    <SafeAreaView flex>
      <View spread row>
        <Button
          text60T
          padding-s3
          textColor
          link
          onPress={() => navigation.pop()}
        >
          <Ionicons name="ios-arrow-back" size={28} color={Colors.primaryColor} />
        </Button>
      </View>
      <View flex center>
        <View>
          <Text text30T>
            Hello {userObject.username}!
          </Text>
        </View>
        <Button
          style={{width: 100, height: 60}}
          size={Button.sizes.xSmall}
          onPress={logoutCb}
          square text70 white marginT-50
          label="Logout"
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
});

