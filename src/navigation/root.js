import React from 'react';
import {useAuth} from '../context/auth';

import Auth from './auth';
import Tab from './tab';

export default function Root() {
  const {state} = useAuth();

  return state.userToken ? <Tab /> : <Auth />;
}
