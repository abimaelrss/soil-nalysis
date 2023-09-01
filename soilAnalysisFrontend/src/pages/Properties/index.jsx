import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiPlus, FiSearch, FiArrowLeft, FiDelete } from 'react-icons/fi';
import { GrUpdate } from 'react-icons/gr';

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

  async function handleRemove(id) {
    const confirm = window.confirm("Deseja realmente remover a propriedade?");

    if (confirm) {
      await api.delete(`/properties/${id}`);
      alert("Propriedade removida com sucesso!");
    }
  }

  useEffect(() => {
    async function fetchProperties() {
      const response = await api.get(`/properties`);
      setProperties(response.data);
    }

    fetchProperties();
  }, []);

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

          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Tamanho</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {
                properties.map(property => (
                  <tr key={property.id}>
                    <td>
                      {property.name}
                    </td>
                    <td>
                      {property.size}
                    </td>
                    <td>
                      <Button
                        title=""
                        color="alter"
                        onClick={() => handleDetails(property.id)}
                      >
                        <GrUpdate />
                      </Button>

                      <Button
                        title=""
                        color="delete"
                        onClick={() => handleRemove(property.id)}
                      >
                        <FiDelete />

                      </Button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>

          {/* <Section>
            {
              properties.map(property => (
                <Note
                  key={String(property.id)}
                  data={property}
                  onClick={() => handleDetails(property.id)}
                />
              ))
            }
          </Section> */}

        </main>

      </Content>

      <New to="/newProperty" />

    </Container>
  );
}