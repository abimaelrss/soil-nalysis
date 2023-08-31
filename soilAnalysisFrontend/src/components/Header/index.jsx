import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { RiShutDownLine } from 'react-icons/ri';

import { useAuth } from '../../hooks/auth';
import { useProperty } from '../../hooks/propertyProvider';

import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Container, Profile, Logout, Farm } from './styles';
import { Note } from '../Note';

export function Header() {
  const { signOut, user } = useAuth();
  const { properties, selectedProperty, setSelectedProperty } = useProperty();

  const navigation = useNavigate();

  function handleSignOut() {
    navigation("/");
    signOut();
  }

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

        <select
          value={selectedProperty}
          onChange={event => setSelectedProperty(event.target.value)}
        >
          <option value="">Selecione a propriedade</option>
          {
            properties.map(property => (
              <option key={property.id} value={property.id}
              >
                {property.name}
                {/* <Note
                  key={String(property.id)}
                  data={property}
                  onClick={() => handleDetails(properties.id)}
                /> */}
              </option>
            ))
          }
        </select>

      </Farm>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>

    </Container>
  );
}