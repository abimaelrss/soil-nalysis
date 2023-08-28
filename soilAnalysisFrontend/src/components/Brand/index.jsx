import { useNavigate } from 'react-router-dom';
import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Container } from './styles';
import { Input } from '../Input';

export function Brand() {
  const { signOut, user } = useAuth();
  const navigation = useNavigate();

  return (
    <Container to="/">

      <h1>SOIL ANALYSIS</h1>

    </Container>
  );
}