import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Container, Profile, Logout, Farm } from './styles';
import { Input } from '../Input';

export function Header() {
  const { signOut, user } = useAuth();

  const navigation = useNavigate();

  const [search, setSearch] = useState("");
  const [properties, setProperties] = useState([]);

  function handleSignOu() {
    navigation("/");
    signOut();
  }

  useEffect(() => {
    async function fetchProperties() {
      const response = await api.get(`/properties?name=${search}`);
      setProperties(response.data);
    }

    fetchProperties();
  }, [search]);

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <Profile to="/profile">
        <img
          src={avatarUrl}
          alt={user.name}
        />
        <div>
          <span>Bem vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Farm>
        <select name="" id="">
          <option value="" selected>Todas as propriedades</option>
          <option value="">Propriedade 1</option>
          <option value="">Propriedade 2</option>
        </select>
      </Farm>

      <Logout onClick={handleSignOu}>
        <RiShutDownLine />
      </Logout>

    </Container>
  );
}