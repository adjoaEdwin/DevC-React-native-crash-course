import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {Button, Container, Content, Card, CardItem, Body} from 'native-base';
import {createStackNavigator} from '@react-navigation/stack';

import Create from './Create';
import {getInfo} from '../api';

const Stack = createStackNavigator();

function Home({navigation}) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const results = await getInfo('BookInfo');
        const parsedData = JSON.parse(results);
        setBooks(parsedData);
      } catch (error) {}
    }
    fetchBooks();
  }, []);

  return (
    <Container>
      <Button
        full
        onPress={() => navigation.navigate('Create')}
        style={{margin: 10}}>
        <Text style={{color: 'white'}}>Add a book</Text>
      </Button>
      <Content style={{margin: 10}}>
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
      </Content>
    </Container>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Create" component={Create} />
    </Stack.Navigator>
  );
}

export default HomeStack;
