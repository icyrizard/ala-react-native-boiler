import { Button, Colors, KeyboardAwareScrollView, Text, TextField, Toast, View } from "react-native-ui-lib";
import { useContext, useState } from "react";
import { Keyboard, Platform, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { AuthContext, AxiosContext, UserContext } from "../../context/Contexts";
import { useNavigation } from "@react-navigation/native";
import ApiError from "../../api/ApiError";

const useDoRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = (promise) => {
    setIsLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    return promise.then((data) => {
      setSuccessMessage('Success!');
      return data;
    }).catch((e) => {
      if (e instanceof ApiError) {
        if (e.messages) {
          setErrorMessage(e.messages[0]);
        }
      }
    }).finally(() => setIsLoading(false))
  }

  return {
    handleSubmit,
    isLoading,
    errorMessage,
    successMessage,
    setErrorMessage,
    setSuccessMessage,
  }
}

export const SignupScreen = () => {
  const navigation = useNavigation();

  const { user, setUser } = useContext(UserContext);
  const { apiInstance } = useContext(AxiosContext);
  const { setJwt } = useContext(AuthContext);

  const { successMessage, setErrorMessage, setSuccessMessage, handleSubmit, errorMessage } = useDoRequest();

  const [ username, setUsername ] = useState("");
  const [ email, setEmail ] = useState();
  const [ password, setPassword ] = useState("");
  const [ signupKey, setSignupKey ] = useState("");

  const doSignup = async () => {
    const params = {
      username,
      email,
      password,
      signupKey,
    }

    const data = await handleSubmit(apiInstance.signup.signup(params));

    setJwt(data.jwt);
    setUser(data.user);
  }

  return (
    <View>
      <Toast
        visible={!!errorMessage}
        backgroundColor={Colors.primary}
        position={'top'}
        message={errorMessage}
        autoDismiss={5000}
        onDismiss={() => setErrorMessage(null)}
      />
      <Toast
        visible={!!successMessage}
        position={'top'}
        message={successMessage}
        autoDismiss={5000}
        onDismiss={() => setSuccessMessage(null)}
      />
      <KeyboardAwareScrollView
        keyboardDismissMode='on-drag'
        keyboardShouldPersistTaps={'interactive'}
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View paddingH-25 paddingT-80 paddingB-100>
          <Text text20T>Signup</Text>
          <View marginT-20>
            <TextField
              border
              autoCapitalize='none'
              autoFocus
              placeholderColor={Colors.primaryColor}
              onChangeText={(t) => setUsername(t.toLowerCase())}
              validate={'required'}
              floatingPlaceholder
              value={username}
              text70
              placeholder="Username"
              floatingPlaceholderColor={"#8a8a8a"}
              underlineColor={{focus: "#d9d9d9", default: "#d9d9d9"}}
              grey10
            />
            <TextField
              onChangeText={(t) => setEmail(t.toLowerCase())}
              value={email}
              floatingPlaceholder
              underlineColor={{focus: "#d9d9d9", default: "#d9d9d9"}}
              floatingPlaceholderColor={"#8a8a8a"}
              validate={'required'}
              text70
              placeholder="Email"
              grey10
            />
            <TextField
              onChangeText={setPassword}
              floatingPlaceholder
              password={password}
              underlineColor={{focus: "#d9d9d9", default: "#d9d9d9"}}
              text70
              floatingPlaceholderColor={"#8a8a8a"}
              placeholder="Password"
              validate={'required'}
              secureTextEntry
              grey10
            />
            <TextField
              onChangeText={setSignupKey}
              floatingPlaceholder
              floatingPlaceholderColor={"#8a8a8a"}
              value={signupKey}
              text70
              placeholder="Signup Key"
              grey10
              underlineColor={{focus: "#d9d9d9", default: "#d9d9d9"}}
            />
          </View>
          <View marginT-20 center>
            <Button
              onPress={() => { Keyboard.dismiss(); doSignup()}}
              label="Signup!"
              size={Button.sizes.medium}
              text50M
            />
            <Button
              secondaryColor
              onPress={() => navigation.pop()}
              link text70 label="< Back to Login" marginT-20
            />
          </View>
        </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
});
