import { Button, Text, Incubator, Toast, View, TextField } from "react-native-ui-lib";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import ApiError from "../../api/ApiError";
import { useAuth } from "../../context/AuthContext";

export const LoginScreen = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const { setJwt, setUser } = useAuth()

  const doLogin = ({username, password}) => {
    // Important: we reenact the login process here, but in reality we would call the API and get back a similar response
    // Change this part of the code so that it calls the API and returns the response. Similar to the contents below.
    return new Promise((resolve, reject) => {
      resolve({
        jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxMTcsInJvbGUiOiJkZWZhdWx0In0sImlhdCI6MTY4MDcwNTAzNCwiZXhwIjoxNjgxMzA5ODM0fQ.oz0hG1X4LN-AHLZfm3vjsGb4KnaQRhX_i4yJGIXmEGs",
        user: {
          id: 117,
          role: "default"
        }
      })
    });
  }

  const { mutate } = useMutation(doLogin, {
    onSuccess: (data) => {
      setJwt(data.jwt);
      setUser(data.user);
    },
    onError: (e) => {
      setJwt(null);

      if (e instanceof ApiError) {
        if (e.messages) {
          setErrorMessage(e.messages[0]);
        }
      }
    }
  })

  const navigation = useNavigation();

  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  const doLoginCb = () => {
    setJwt(null);
    setErrorMessage(null);

    mutate({
      username,
      password
    });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View useSafeArea paddingH-25 flexGrow>
        <Toast
          visible={!!errorMessage}
          position={'top'}
          message={errorMessage}
          autoDismiss={3000}
          onDismiss={() => setErrorMessage(null)}
        />
        <View marginT-100 paddingH-20>
          <Text h1 text20T>
            Hi!
          </Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
            <View>
              <TextField
                autoCapitalize="none"
                floatingPlaceholder
                onChangeText={(t) => setUsername(t.toLowerCase())}
                value={username}
                text70
                placeholder="Username"
                validate={'required'}
                grey10
                underlineColor={{focus: "#d9d9d9", default: "#d9d9d9"}}
                floatingPlaceholderColor={"#8a8a8a"}
              />
              <TextField
                floatingPlaceholder
                onChangeText={setPassword}
                autoCapitalize="none"
                password={password}
                text70
                placeholder="Password"
                validate={'required'}
                secureTextEntry
                grey10
                underlineColor={{focus: "#d9d9d9", default: "#d9d9d9"}}
                floatingPlaceholderColor={"#8a8a8a"}
              />
              <View marginT-30 center>
                <Button
                  onPress={doLoginCb}
                  size={Button.sizes.medium}
                  square text70 white
                  label="Login"
                />
                <Button
                  onPress={() => navigation.navigate('Signup')}
                  link
                  text70
                  label="Sign Up"
                  marginT-20
                />
              </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    paddingTop: 50,
    paddingHorizontal: 25,
    justifyContent: 'center'
  },
});