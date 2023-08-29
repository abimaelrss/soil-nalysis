import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlus, FiSearch, FiArrowLeft } from 'react-icons/fi';

import { api } from '../../services/api';

import { Container, Content, Search } from './styles';

import { Brand } from '../../components/Brand';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { New } from '../../components/New';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';
import { Navigation } from '../../components/Navigation';
import { Baseboard } from '../../components/Baseboard';
import { Button } from '../../components/Button';

export function Properties() {
  const [search, setSearch] = useState("");
  const [properties, setProperties] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchProperties() {
      const response = await api.get(`/properties?name=${search}`);
      setProperties(response.data);
    }

    fetchProperties();
  }, [search]);

  return (
    <Container>

      <Brand />

      <Header />

      <Menu />

      {/* <Search>
        <Input
          placeholder="Pesquisar pelo título"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search> */}

      <Content>

        <Navigation title="Propriedades" />

        <main>
          <Section>
            {
              properties.map(property => (
                <Note
                  key={String(property.id)}
                  data={property}
                  onClick={() => handleDetails(property.id)}
                />
              ))
            }
          </Section>

        <Baseboard />
        
        </main>

      </Content>

      <New to="/newProperty" />

    </Container>
  );
}