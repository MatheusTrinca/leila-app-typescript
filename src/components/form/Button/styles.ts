import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  align-items: center;
  padding: 18px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  margin-top: ${RFValue(16)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${RFValue(14)}px;
`;
