import React from 'react';
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/form/Button';
import { Input } from '../../components/form/Input';
import { Logo } from '../SignIn/styles';
import logo from '../../assets/logo.png';
import {
  BackToSignIn,
  BackToSignInTitle,
  Container,
  Content,
  Icon,
  Title,
} from './styles';

interface ScreenNavigationProp {
  goBack: () => void;
}

export const SignUp: React.FC = () => {
  const { goBack } = useNavigation<ScreenNavigationProp>();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Content>
            <Logo source={logo} />
            <Title>Faça seu Cadastro</Title>
            <Input placeholder="Nome Completo" />
            <Input placeholder="Email" />
            <Input placeholder="Senha" />
            <Button title="Entrar" />
          </Content>
        </Container>
      </ScrollView>
      <BackToSignIn onPress={() => goBack()}>
        <Icon name="arrow-left" />
        <BackToSignInTitle>Voltar</BackToSignInTitle>
      </BackToSignIn>
    </KeyboardAvoidingView>
  );
};
