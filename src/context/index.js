import React from 'react';
import {AuthProvider} from './auth';

export default function index({children}) {
  return <AuthProvider>{children}</AuthProvider>;
}
