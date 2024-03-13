import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  LogBox,
  ActivityIndicator,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import AppNavigator from './app/navigation/root-stack';
import {persistor, store} from './app/redux/store';
import {theme} from './app/theme';

const App = () => {
  const navigationRef = React.createRef();
  React.useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaView style={{backgroundColor: theme.colors.primary}}>
            <StatusBar
              barStyle={'light-content'}
              backgroundColor={theme.colors.primary}
            />
          </SafeAreaView>
          <View style={{flex: 1}}>
            <NavigationContainer
              ref={navigationRef}
              fallback={
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <ActivityIndicator size="large" />
                </View>
              }>
              <AppNavigator />
            </NavigationContainer>
          </View>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
