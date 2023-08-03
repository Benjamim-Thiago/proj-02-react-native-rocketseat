import { BackButton, BackIcon } from "@screens/Groups/styles";
import { Container, Logo } from "./styles";
import logoImg from '@assets/logo.png';

type Props = {
  showBackButton?: boolean;
}
export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      { 
        showBackButton &&
        <BackButton>
          <BackIcon />
        </BackButton>
      }
      
      <Logo source={logoImg} />
    </Container>
  );
}