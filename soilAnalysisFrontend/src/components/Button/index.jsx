import { Container } from "./styles";

export function Button({ title, children, loading = false, ...rest }) {

  return (

    <Container
      type="button"
      disabled={loading}
      {...rest}
    >
      {children } { title}
    </Container>

  );
}