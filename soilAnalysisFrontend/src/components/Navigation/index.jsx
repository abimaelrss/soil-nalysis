import { Container } from './styles';


export function Navigation({ title, children }) {
  return (
    <Container>
      <div>
        <div>
          <h2>{title}</h2>
        </div>
      </div>

      <div>
        <h3>Selecione a propriedade</h3>
      </div>
      {children}
    </Container>
  );
}