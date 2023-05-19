import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen, SignInScreen, Profile, JobDetails} from '../../screens';

const AuthStack = createNativeStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <AuthStack.Screen name="HomeScreen" component={HomeScreen} />
    <AuthStack.Screen name="LoginScreen" component={SignInScreen} />
    <AuthStack.Screen name="Profile" component={Profile} />
    <AuthStack.Screen name='JobDetails' component={JobDetails} />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
