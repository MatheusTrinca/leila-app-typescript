import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from '../../components/form/Button';
import { Input } from '../../components/form/Input';
import {
  Container,
  Content,
  Title,
  Logo,
  ForgotPasswordButton,
  ForgotPasswordTitle,
} from './styles';
import logo from '../../assets/logo.png';

export const SignIn: React.FC = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <Content>
          <Logo source={logo} />
          <Title>Faça seu Login</Title>
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Button title="Entrar" />
          <ForgotPasswordButton onPress={() => {}}>
            <ForgotPasswordTitle>Esqueci minha senha</ForgotPasswordTitle>
          </ForgotPasswordButton>
        </Content>
      </Container>
    </ScrollView>
  );
};
