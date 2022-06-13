import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from '../../components/form/Button';
import { Input } from '../../components/form/Input';
import { Container, Content, Title } from './styles';

export const Signin: React.FC = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <Content>
          <Title>Faça seu Login</Title>
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Button title="Entrar" />
        </Content>
      </Container>
    </ScrollView>
  );
};
