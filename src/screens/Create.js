import React, {useState} from 'react';
import {View} from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  Label,
  Textarea,
} from 'native-base';

import {storeInfo} from '../api';
import BookForm from '../form';

export default function AddBook({navigation}) {
  const [authorName, setAuthorName] = useState('');
  const [description, setDescription] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [bookPrice, setBookPrice] = useState('');

  const handleBookSubmit = async () => {
    try {
      const bookInfo = {
        authorName,
        description,
        bookTitle,
      };
      await storeInfo('BookInfo', bookInfo);
      return navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BookForm />
    // <Container>
    //   <Content style={{margin: 10}}>
    //     <Form>
    //       <View>
    //         <Label>Author's name</Label>
    //         <Item>
    //           <Input
    //             value={authorName}
    //             onChangeText={authorName => setAuthorName(authorName)}
    //           />
    //         </Item>
    //       </View>

    //       <View style={{marginTop: 10}}>
    //         <Label>Title of Book</Label>
    //         <Item>
    //           <Input
    //             value={bookTitle}
    //             onChangeText={bookTitle => setBookTitle(bookTitle)}
    //           />
    //         </Item>
    //       </View>
    //       <View style={{marginTop: 10}}>
    //         <Label>Description of Book</Label>
    //         <Content padder>
    //           <Item>
    //             <Textarea
    //               style={{width: 350}}
    //               rowSpan={5}
    //               bordered
    //               value={description}
    //               onChangeText={description => setDescription(description)}
    //               placeholder="description of book"
    //             />
    //           </Item>
    //         </Content>
    //       </View>
    //       <View style={{marginTop: 10}}>
    //         <Label>Price of book</Label>
    //         <Content padder>
    //           <Item>
    //             <Input
    //               style={{width: 350}}
    //               rowSpan={5}
    //               bordered
    //               value={bookPrice}
    //               onChangeText={bookPrice => setBookPrice(bookPrice)}
    //             />
    //           </Item>
    //         </Content>
    //       </View>
    //       <Button
    //         full
    //         style={{marginTop: 15}}
    //         onPress={() => handleBookSubmit()}>
    //         <Text>Add a book</Text>
    //       </Button>
    //     </Form>
    //   </Content>
    // </Container>
  );
}
