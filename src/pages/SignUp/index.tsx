import React from 'react';
import { ScrollView, KeyboardAvoidingView, Platform, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
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
import { InputControl } from '../../components/form/InputControl';

interface ScreenNavigationProp {
  goBack: () => void;
}

interface IFormInputs {
  [name: string]: any;
}

export const SignUp: React.FC = () => {
  const { goBack } = useNavigation<ScreenNavigationProp>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const handleSignUp = (form: IFormInputs) => {
    const data = {
      name: form.name,
      email: form.email,
      password: form.password,
    };
    console.log(data);
  };

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
            <View>
              <Title>Crie sua conta</Title>
            </View>
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Nome Completo"
              icon="user"
              control={control}
              name="name"
            />
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="Email"
              icon="mail"
              control={control}
              name="email"
            />
            <InputControl
              placeholder="Senha"
              icon="key"
              control={control}
              name="password"
              secureTextEntry
            />
            <Button title="Cadastrar" onPress={handleSubmit(handleSignUp)} />
          </Content>
        </Container>
      </ScrollView>
      <BackToSignIn onPress={() => goBack()}>
        <Icon name="arrow-left" />
        <BackToSignInTitle>Voltar para o login</BackToSignInTitle>
      </BackToSignIn>
    </KeyboardAvoidingView>
  );
};
