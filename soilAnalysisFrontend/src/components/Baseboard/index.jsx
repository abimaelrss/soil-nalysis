import { Button } from '../Button';
import { Container } from './styles';


export function Baseboard({ title, children }) {
  return (
    <Container>
      <div>
        <Button
          title="Voltar"
          color=""
        />
      </div>

      <div>
        <Button 
          title="Salvar"
          color="save"
        />
      </div>
      {children}
    </Container>
  );
}