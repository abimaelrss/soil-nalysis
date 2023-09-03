import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiDelete } from "react-icons/fi";
import { GrUpdate } from "react-icons/gr";

import { api } from "../../services/api";

import { Container, Content, Search } from "./styles";

import { Brand } from "../../components/Brand";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { New } from "../../components/New";
import { Button } from "../../components/Button";
import { Navigation } from "../../components/Navigation";
import { useProperty } from "../../hooks/propertyProvider";

export function Areas() {
  const [areas, setAreas] = useState([]);

  const { selectedProperty } = useProperty();

  const navigate = useNavigate();

  function handleUpdate(area_id) {
    navigate(`/newArea/${area_id}`);
  }

  async function fetchAreas() {
    const response = await api.get(`/areas?property_id=${selectedProperty}`);
    setAreas(response.data);
  }

  async function handleRemove(area_id) {
    const confirm = window.confirm("Deseja realmente remover a area?");

    if (confirm) {
      await api.delete(`/areas/${area_id}`);
      alert("Área removida com sucesso!");
      fetchAreas();
    }
  }

  useEffect(() => {
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
        <Navigation title="Áreas">Selecione a área</Navigation>

        <main>
          {areas.length == 0 && (
            <p>Não existem áreas cadastradas para essa propriedade!</p>
          )}

          {areas.length != 0 && (
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Tamanho</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {areas.map((area) => (
                  <tr key={area.id}>
                    <td>{area.name}</td>
                    <td>{area.size}</td>
                    <td>
                      <Button
                        title=""
                        color="alter"
                        onClick={() => handleUpdate(area.id)}
                      >
                        <GrUpdate />
                      </Button>

                      <Button
                        title=""
                        color="delete"
                        onClick={() => handleRemove(area.id)}
                      >
                        <FiDelete />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
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
