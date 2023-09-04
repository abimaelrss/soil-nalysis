import { FiArrowLeft, FiPlus, FiDelete } from "react-icons/fi";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { api } from "../../services/api";

import { Container, Content, Form } from "./styles";
import { Brand } from "../../components/Brand";
import { Menu } from "../../components/Menu";
import { PropertyProvider, useProperty } from "../../hooks/propertyProvider";
import { useAuth } from "../../hooks/auth";

export function Analyze() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [depth, setDepth] = useState("");
  const [smp, setSmp] = useState("");
  const [cacl, setCacl] = useState("");
  const [h2o, setH2o] = useState("");

  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState();

  const params = useParams();

  const { user } = useAuth();
  const user_id = user.user_id;

  const { selectedProperty } = useProperty();

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleNew() {
    if (!name) {
      return alert("Informe o nome da análise!");
    }

    if (!description) {
      return alert("Informe a descrição da análise!");
    }

    if (!depth) {
      return alert("Informe a propfundidae da análise!");
    }

    if (!smp) {
      return alert("Informe o smp!");
    }

    if (!cacl) {
      return alert("Informe o CaCl!");
    }

    if (!h2o) {
      return alert("Informe o H2O!");
    }

    await api.post("/analysis", {
      name,
      description,
      depth,
      smp,
      cacl,
      h2o,
      area_id: selectedArea
    });

    alert("Área criada com sucesso!");
    navigate(-1);
  }

  async function handleUpdate() {
    const analyze_updated = {
      name,
      description,
      depth,
      smp,
      cacl,
      h2o,
    };

    try {
      await api.put(`/analysis/${params.id}`, analyze_updated);
      alert("Análise atualizada com sucesso!");
      navigate(-1);
    } catch (error) {
      alert("Erro ao atualizar análise!");
    }
  }

  async function fetchAnalyze() {
    const response = await api.get(`/analysis/${params.id}`);
    setName(response.data.name);
    setDescription(response.data.description);
    setDepth(response.data.depth);
    setSmp(response.data.smp);
    setCacl(response.data.cacl);
    setH2o(response.data.h2o);
  }

  async function fetchAreas() {
    const response = await api.get(`/areas?property_id=${selectedProperty}`);
    setAreas(response.data);
  }

  useEffect(() => {
    fetchAnalyze();
    fetchAreas();
  }, []);

  return (
    <Container>
      <Brand />

      <Header />

      <Menu />

      <Content>
        <Form>
          <h1>Cadastrar áreas</h1>
          <ButtonText title="Voltar" onClick={handleBack} />

          <select
            value={selectedArea}
            onChange={(event) => setSelectedArea(event.target.value)}
          >
            <option value="">Selecione a área</option>
            {areas.map((area) => (
              <option key={area.id} value={area.id}>
                {area.name}
                {/* <Note
                    key={String(property.id)}
                    data={property}
                    onClick={() => handleDetails(properties.id)}
                  /> */}
              </option>
            ))}
          </select>

          <Input
            placeholder="Nome"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            placeholder="Descrição"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Input
            placeholder="Profundidade"
            type="text"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
          />

          <Input
            placeholder="SMP"
            type="text"
            value={smp}
            onChange={(e) => setSmp(e.target.value)}
          />

          <Input
            placeholder="CaCl2"
            type="text"
            value={cacl}
            onChange={(e) => setCacl(e.target.value)}
          />

          <Input
            placeholder="H2O"
            type="text"
            value={h2o}
            onChange={(e) => setH2o(e.target.value)}
          />

          <div className="baseboard">
            <Button title="Voltar" color="" onClick={handleBack}>
              <FiArrowLeft />
            </Button>

            <Button
              title="Salvar"
              color="save"
              onClick={params.id ? handleUpdate : handleNew}
            >
              <FiPlus />
            </Button>
          </div>
        </Form>
      </Content>
    </Container>
  );
}
