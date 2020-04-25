import React from 'react';
import {useAuth} from '../context/auth';

import Auth from './auth';
import Tab from './tab';
import SplashScreen from '../screens/SplashScreen';

export default function Root() {
  const {state} = useAuth();

  if (state.isLoading) {
    return <SplashScreen />;
  }

  return state.userToken ? <Tab /> : <Auth />;
}
