import { SafeAreaView } from 'react-native-safe-area-context'

import styled from 'styled-components/native';
import { CaretLeft } from 'phosphor-react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 36,
  color: theme.COLORS.WHITE
}))``;
