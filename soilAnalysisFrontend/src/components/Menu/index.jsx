import { useNavigate } from 'react-router-dom';
import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Container } from './styles';

import { ButtonText } from '../ButtonText';

export function Menu() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  function handleSignOu() {
    navigate("/");
    signOut();
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <li>
        <ButtonText
          title="HOME"
          onClick={() => navigate("/")}
        />
      </li>
      <li>
        <ButtonText
          title="PROPRIEDADE"
          onClick={() => navigate("/properties")}
        />
      </li>
      <li>
        <ButtonText
          title="AREAS"
          onClick={() => navigate("/areas")}
        />
      </li>
      <li>
        <ButtonText
          title="ANALISES"
          onClick={() => navigate("/analyzes")}
        />
      </li>
      <li>
        <ButtonText
          title="REALATORIOS"
          onClick={() => navigate("/reports")}
        />
      </li>

    </Container>
  );
}