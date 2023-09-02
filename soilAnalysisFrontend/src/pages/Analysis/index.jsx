import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiDelete } from 'react-icons/fi';
import { GrUpdate } from 'react-icons/gr';

import { api } from '../../services/api';

import { Container, Content, Search } from './styles';

import { Brand } from '../../components/Brand';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { New } from '../../components/New';
import { Button } from '../../components/Button';
import { Navigation } from '../../components/Navigation';
import { useProperty } from '../../hooks/propertyProvider';

export function Analysis() {
  const [analysis, setAnalysis] = useState([]);

  const { selectedProperty } = useProperty();

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a análise?");

    if (confirm) {
      await api.delete(`/analysis/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchAnalysis() {
      const response = await api.get(`/analysis?property_id=${selectedProperty}`);
      setAreas(response.data);
    }

    fetchAnalysis();
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

        <Navigation title="Análises">
          Selecione a análise
        </Navigation>

        <main>
          {
            analysis.length == 0 && (
              <p>Não existem análises cadastradas!</p>
            )
          }

          {
            analysis.length != 0 && (
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
                    analysis.map(analyze => (
                      <tr key={analyze.id}>
                        <td>
                          {analyze.description}
                        </td>
                        <td>
                          {analyze.depth}
                        </td>
                        <td>
                          <Button
                            title=""
                            color="alter"
                            onClick={() => handleDetails(analyze.id)}
                          >
                            <GrUpdate />
                          </Button>

                          <Button
                            title=""
                            color="delete"
                            onClick={() => handleRemove(analyze.id)}
                          >
                            <FiDelete />

                          </Button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            )
          }
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

      <New to="/newAnalyze" />

    </Container>
  );
}