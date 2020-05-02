import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {Button, Container, Content, Card, CardItem, Body} from 'native-base';
import {createStackNavigator} from '@react-navigation/stack';

import Create from './Create';
import {getInfo} from '../api';
import Show from './Show';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Edit from './Edit';

const Stack = createStackNavigator();

function Home({navigation}) {
  const [books, setBooks] = useState([]);
  console.log(books);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const results = await getInfo('BookInfo');
        const parsedData = JSON.parse(results);
        setBooks(parsedData);
      } catch (error) {}
    }
    fetchBooks();

    const listener = navigation.addListener('didFocus', () => {
      fetchBooks();
    });
    return () => {
      listener.remove;
    };
  }, [navigation]);

  return (
    <Container>
      <Button
        full
        onPress={() => navigation.navigate('Create')}
        style={{margin: 10}}>
        <Text style={{color: 'white'}}>Add a book</Text>
      </Button>
      <Content style={{margin: 10}}>
        {books.length === 0 ? (
          <Text>
            You have no books yet. Click the button above to add a book.
          </Text>
        ) : (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Details', {books})}>
            <Card>
              <CardItem>
                <Body>
                  <Text style={{padding: 10, fontSize: 16, fontWeight: 'bold'}}>
                    Name of Book: {books.bookTitle}
                  </Text>
                  <Text style={{padding: 10}}>
                    Name of Author: {books.authorName}
                  </Text>
                  <Text style={{padding: 10}}>
                    Description: {books.description}
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </TouchableWithoutFeedback>
        )}
      </Content>
    </Container>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Create" component={Create} />
      <Stack.Screen name="Details" component={Show} />
      <Stack.Screen name="Edit" component={Edit} />
    </Stack.Navigator>
  );
}

export default HomeStack;
