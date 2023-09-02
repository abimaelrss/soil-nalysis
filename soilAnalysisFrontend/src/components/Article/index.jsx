import { Container } from './styles';


export function Article ({ title, children}) {
  return (
    <Container>
      <h2>{title}</h2>
      <p>{children}</p>
    </Container>
  );
}