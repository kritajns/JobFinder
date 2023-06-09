import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignInScreen, Profile} from '../../screens';

const AuthStack = createNativeStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="LoginScreen" component={SignInScreen} />
    <AuthStack.Screen name="Profile" component={Profile} />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
