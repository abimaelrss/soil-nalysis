import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlus, FiSearch, FiArrowLeft, FiDelete } from 'react-icons/fi';

import { api } from '../../services/api';

import { Container, Content, Search } from './styles';

import { Brand } from '../../components/Brand';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { New } from '../../components/New';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';
import { Navigation } from '../../components/Navigation';
import { GrUpdate } from 'react-icons/gr';
import { useProperty } from '../../hooks/propertyProvider';

export function Areas() {
  const [search, setSearch] = useState("");
  const [areas, setAreas] = useState([]);

  const { selectedProperty } = useProperty();

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a area?");

    if (confirm) {
      await api.delete(`/areas/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchAreas() {
      const response = await api.get(`/areas?id=${selectedProperty}`);

      setAreas(response.data);
    }

    fetchAreas();
  }, [selectedProperty]);

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

        <Navigation title="Areas" />

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
                areas.map(area => (
                  <tr key={area.id}>
                    <td>
                      {area.name}
                    </td>
                    <td>
                      {area.size}
                    </td>
                    <td>
                      <Button
                        title="Aterar"
                        color="alter"
                        onClick={() => handleDetails(area.id)}
                      >
                        <GrUpdate />
                      </Button>

                      <Button
                        title="Deletar"
                        color="delete"
                        onClick={() => handleRemove(area.id)}
                      >
                        <FiDelete />

                      </Button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </main>

        {/* <Section title="Minhas áreas">
          {
            areas.map(area => (
              <Note
                key={String(area.id)}
                data={area}
                onClick={() => handleDetails(area.id)}
              />
            ))
          }
        </Section> */}

      </Content>

      <New to="/newArea" />

    </Container>
  );
}