import { LogBox, StyleSheet } from 'react-native';
import "./ComponentsConfig"
import "./FoundationConfig"

import { useState } from "react";
import { UnAuthStack } from "./app/screens/login/UnAuth.stack";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AxiosProvider } from "./app/providers/AxiosProvider";
import { SplashScreen } from "./app/screens/splash/Splash.screen";
import AppLoading from 'expo-app-loading';
import { Montserrat_400Regular, useFonts, } from '@expo-google-fonts/montserrat';
import { LoggedInStack } from "./app/screens/loggedIn/LoggedIn.stack";
import { AppContext } from './app/context/AppContext';
import AuthProvider from "./app/providers/AuthProvider";
import MainAppScreenDecider from "./app/components/MainAppScreenDecider";

require('react-native-ui-lib/config').setConfig({appScheme: 'light'});

const queryClient = new QueryClient();

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  LogBox.ignoreLogs(['Warning: ...', 'VirtualizedLists should never be nested inside plain']); // Ignore log notification by message

  // in case we want to ignore all logs - remove comments on the next line.
  // LogBox.ignoreAllLogs(); //Ignore all log notifications

  const [initialized, setInitialized] = useState(false);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppContext.Provider value={{initialized, setInitialized}}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <AxiosProvider>
            <MainAppScreenDecider
              notInit={
                <SplashScreen />
              }
              unAuth={
                <UnAuthStack />
              }
              auth={
                <LoggedInStack />
              }
            />
          </AxiosProvider>
        </QueryClientProvider>
      </AuthProvider>
    </AppContext.Provider>
  );
}