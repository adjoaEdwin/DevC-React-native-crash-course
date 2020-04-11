import React, {createContext, useReducer, useMemo, useContext} from 'react';
import {storeData, clearData} from '../api';

const AuthContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...state,
        userToken: action.token,
        isSignout: false,
      };

    case 'LOG_OUT':
      return {
        ...state,
        userToken: null,
        isSignout: true,
      };
    default:
      break;
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(reducer, {
    userToken: null,
    isSignout: false,
    isLoading: false,
  });

  const authContext = useMemo(
    () => ({
      handleSignIn: async data => {
        storeData(data);
        dispatch({type: 'SIGN_IN', token: 'some-dummy-text'});
      },
      handleSignUp: async data => {
        dispatch({type: 'SIGN_IN', token: 'some-dummy-text'});
      },
      handleSignOut: () => {
        clearData();
        dispatch({type: 'LOG_OUT'});
      },
    }),
    [],
  );

  return <AuthContext.Provider value={{state, ...authContext}} {...props} />;
}

function useAuth() {
  const context = useContext(AuthContext);

  if (typeof context === undefined) {
    throw new Error('useAuth must be used within a provider');
  }

  return context;
}

export {AuthProvider, useAuth};
