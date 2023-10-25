import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiDelete, FiPlus } from "react-icons/fi";
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

export function Forages() {
  const [forages, setForages] = useState([]);

  // const { selectedProperty } = useProperty();

  const navigate = useNavigate();

  function handleUpdate(forageId) {
    navigate(`/forage/${forageId}`);
  }

  async function fetchForages() {
    // const response = await api.get(`/cultures?property_id=${selectedProperty}`);
    const response = await api.get(`/forages`);
    setForages(response.data);
  }

  async function handleRemove(forageId) {
    const confirm = window.confirm("Deseja realmente remover a foragem?");

    if (confirm) {
      await api.delete(`/forages/${forageId}`);
      alert("Forragem removida com sucesso!");
      fetchForages();
    }
  }

  useEffect(() => {
    // fetchCultures();
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
        <Navigation title="Forragens">
          <Button
            title="Cadastrar"
            color="save"
            onClick={() => navigate("/forage")}
          >
            <FiPlus />
          </Button>
        </Navigation>

        <main>
          {forages.length == 0 && (
            <p>Não existem forragens cadastradas!</p>
          )}

          {forages.length != 0 && (
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Tamanho</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {forages.map((forage) => (
                  <tr key={forage.id}>
                    <td>{forage.name}</td>
                    <td></td>
                    <td>
                      <Button
                        title=""
                        color="alter"
                        onClick={() => handleUpdate(forage.id)}
                      >
                        <GrUpdate />
                      </Button>

                      <Button
                        title=""
                        color="delete"
                        onClick={() => handleRemove(forage.id)}
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
    </Container>
  );
}
