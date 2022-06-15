import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Image, TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 24px;
`;

export const Logo = styled(Image)`
  width: ${RFValue(160)}px;
  height: ${RFValue(160)}px;
  margin-bottom: ${RFValue(64)}px;
`;

export const ForgotPasswordButton = styled(TouchableOpacity)`
  margin-top: 24px;
`;

export const ForgotPasswordTitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray500};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
