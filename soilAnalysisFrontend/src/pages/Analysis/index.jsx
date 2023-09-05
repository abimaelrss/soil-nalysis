import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiDelete, FiPlus } from "react-icons/fi";
import { BiSolidReport } from "react-icons/bi";
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

export function Analysis() {
  const [analysis, setAnalysis] = useState([]);
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState();

  const params = useParams();

  const { selectedProperty } = useProperty();

  const navigate = useNavigate();

  function handleUpdate(analyze_id) {
    navigate(`/analyze/${analyze_id}`);
  }

  async function fetchAnalysis() {
    const response = await api.get(`/analysis?property_id=${selectedProperty}`);
    setAnalysis(response.data);
  }

  async function fetchAreas() {
    const response = await api.get(`/areas?property_id=${selectedProperty}`);
    setAreas(response.data);
  }

  async function handleRemove(analyze_id) {
    const confirm = window.confirm("Deseja realmente remover a análise?");

    if (confirm) {
      await api.delete(`/analysis/${analyze_id}`);
      alert("Análise removida com sucesso!");
      fetchAnalysis();
    }
  }

  useEffect(() => {
    fetchAnalysis();
    fetchAreas();
  }, [selectedArea]);

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
          <Button
            title="Cadastrar"
            color="save"
            onClick={() => navigate("/analyze")}
          >
            <FiPlus />
          </Button>
        </Navigation>

        <main>
        {analysis.length == 0 && (
          <p>Não existe análise cadastrada!</p>
        )}
          {analysis.length != 0 && (
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Descrição</th>
                  <th>Profundidade</th>
                  <th>Área</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {analysis.map((analyze) => (
                  <tr key={analyze.id}>
                    <td>{analyze.name}</td>
                    <td>{analyze.description}</td>
                    <td>{analyze.depth}</td>
                    <td>{analyze.areaName}</td>
                    <td>
                      <Button
                        title=""
                        color="alter"
                        onClick={() => handleUpdate(analyze.id)}
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

                      <Button
                        title=""
                        color="report"
                        // onClick={() => handleRemove(analyze.id)}
                      >
                        <BiSolidReport />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </main>
      </Content>
    </Container>
  );
}
