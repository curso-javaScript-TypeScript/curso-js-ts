import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small> Deus é fiel!</small>
      </Title>
      <Paragrafo>Com a permissão dele irei longe como dev.</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
