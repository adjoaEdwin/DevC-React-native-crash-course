import React, {useState} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
} from 'native-base';

import {useAuth} from '../../context/auth';

export default function SignUp() {
  const {handleSignUp} = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      await handleSignUp(username, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Header />
      <Content>
        <Form>
          <Item>
            <Input
              placeholder="Username"
              onChangeText={username => setUsername(username)}
            />
          </Item>
          <Item last>
            <Input
              placeholder="Password"
              onChangeText={password => setPassword(password)}
            />
          </Item>
          <Button full primary onPress={handleSubmit}>
            <Text>Sign up</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
