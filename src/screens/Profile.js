import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'native-base';

import {useAuth} from '../context/auth';

export default function Profile() {
  const {authContext} = useAuth();
  return (
    <View>
      <Text>This is the profile page</Text>
      <Button full onPress={() => authContext.handleSignOut()}>
        <Text>Log out</Text>
      </Button>
    </View>
  );
}
