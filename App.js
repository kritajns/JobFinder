import React from 'react';
import {View} from 'react-native';
import {navigationRef} from './App/navigation/NavigationServices';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackScreen from './App/navigation/AuthenticationStack';

const App: () => Node = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <View style={{flex: 1}}>
        <AuthStackScreen />
      </View>
    </NavigationContainer>
  );
};

export default App;
