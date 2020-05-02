import React from 'react';
import {View, Text, Alert} from 'react-native';
import {Button} from 'native-base';

import {removeBook} from '../api';

export default function Show({route, navigation}) {
  const {books} = route.params;

  return (
    <View style={{margin: 10}}>
      <Text style={{fontWeight: 'bold'}}>Name of Author: </Text>
      <Text style={{marginBottom: 10}}>{books.authorName}</Text>
      <Text style={{fontWeight: 'bold'}}>Name of book:</Text>
      <Text style={{marginBottom: 10}}>{books.bookTitle} </Text>
      <Text style={{fontWeight: 'bold'}}>Description of book:</Text>
      <Text>{books.description} </Text>
      <Button
        full
        style={{marginBottom: 10, marginTop: 10}}
        onPress={() => navigation.navigate('Edit', {books})}>
        <Text style={{color: 'white'}}>Edit book</Text>
      </Button>
      <Button
        full
        onPress={() =>
          Alert.alert(
            'Delete',
            'Are you sure you want to delete this book?',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => {
                  removeBook().then(() => {
                    navigation.navigate('Home');
                  });
                },
              },
            ],
            {cancelable: false},
          )
        }>
        <Text style={{color: 'white'}}>Delete book</Text>
      </Button>
    </View>
  );
}
