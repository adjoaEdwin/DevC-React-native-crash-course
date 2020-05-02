import React, {useState} from 'react';
import {View} from 'react-native';
import {
  Container,
  Content,
  Form,
  Label,
  Button,
  Textarea,
  Item,
  Text,
  Input,
} from 'native-base';

export default function BookForm({initialValues}) {
  const [authorName, setAuthorName] = useState(initialValues.authorName);
  const [description, setDescription] = useState(initialValues.description);
  const [bookTitle, setBookTitle] = useState(initialValues.bookTitle);
  const [bookPrice, setBookPrice] = useState(initialValues.bookPrice);

  return (
    <Container>
      <Content style={{margin: 10}}>
        <Form>
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
          <View style={{marginTop: 10}}>
            <Label>Price of book</Label>
            <Content padder>
              <Item>
                <Input
                  style={{width: 350}}
                  rowSpan={5}
                  bordered
                  value={bookPrice}
                  onChangeText={bookPrice => setBookPrice(bookPrice)}
                />
              </Item>
            </Content>
          </View>
          <Button
            full
            style={{marginTop: 15}}
            onPress={() => handleBookSubmit()}>
            <Text>Submit</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

BookForm.defaultProps = {
  initialValues: {
    authorName: '',
    bookTitle: '',
    description: '',
    bookPrice: '',
  },
};
