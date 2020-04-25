import React, {useState} from 'react';
import {View, Image} from 'react-native';
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
  Card,
  CardItem,
  Left,
  Body,
} from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';

import {storeInfo} from '../api';

export default function AddBook({navigation}) {
  const [authorName, setAuthorName] = useState('');
  const [description, setDescription] = useState('');
  const [bookTitle, setBookTitle] = useState('');

  const [picture, setPicture] = useState(null);

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

  const selectImageFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setPicture(image);
      // console.log(image);
    });
  };

  return (
    <Container>
      <Content style={{margin: 10}}>
        <Form>
          <View>
            {/* <Card>
              <CardItem>
                <Left>
                  <Image source={{uri: picture}} />
                  <Body>
                    <Text onPress={selectImageFromGallery}>
                      Click to select an image from your gallery.
                    </Text>
                  </Body>
                </Left>
              </CardItem>
            </Card> */}
          </View>

          <View>
            <Label>Author's name</Label>
            <Item>
              <Input
                value={authorName}
                onChangeText={authorName => setAuthorName(authorName)}
              />
            </Item>
          </View>

          <View style={{marginTop: 10}}>
            <Label>Title of Book</Label>
            <Item>
              <Input
                value={bookTitle}
                onChangeText={bookTitle => setBookTitle(bookTitle)}
              />
            </Item>
          </View>
          <View style={{marginTop: 10}}>
            <Label>Description of Book</Label>
            <Content padder>
              <Item>
                <Textarea
                  style={{width: 350}}
                  rowSpan={5}
                  bordered
                  value={description}
                  onChangeText={description => setDescription(description)}
                  placeholder="description of book"
                />
              </Item>
            </Content>
          </View>
          <Button
            full
            style={{marginTop: 15}}
            onPress={() => handleBookSubmit()}>
            <Text>Add a book</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
