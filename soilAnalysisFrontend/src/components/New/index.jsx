import { Link, useNavigate } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Container } from './styles';
import { Input } from '../Input';

export function New(props) {
  const { signOut, user } = useAuth();
  const navigation = useNavigate();

  return (
    <Container to={props.to || ""} >
      <FiPlus />
      Cadastrar
    </Container>
  );
}