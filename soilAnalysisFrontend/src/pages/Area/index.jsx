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

export function Area() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");

  const [cultures, setCultures] = useState([]);
  const [selectedCulture, setSelectedCulture] = useState();

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
      return alert("Digite nome da área!");
    }

    if (!description) {
      return alert("Digite a descrição da área!");
    }

    if (!size) {
      return alert("Digite o tamanho da área!");
    }

    await api.post("/areas", {
      name,
      description,
      size,
      property_id: selectedProperty,
      user_id,
    });

    alert("Área criada com sucesso!");
    navigate(-1);
  }

  async function handleUpdate() {
    const area_updated = {
      name,
      description,
      size,
    };

    try {
      await api.put(`/areas/${params.id}`, area_updated);
      alert("Área atualizada com sucesso!");
      navigate(-1);
    } catch (error) {
      alert("Erro ao atualizar área!");
    }
  }

  async function fetchAreas() {
    const response = await api.get(`/areas/${params.id}`);
    setName(response.data.name);
    setDescription(response.data.description);
    setSize(response.data.size);
  }

  async function fetchCultures() {
    const response = await api.get(`/cultures?culture_id=${selectedCulture}`);
    setAreas(response.data);
  }

  useEffect(() => {
    fetchAreas();
    // fetchCultures();
  }, []);

  return (
    <Container>
      <Brand />

      <Header />

      <Menu />

      <Content>
        <Form>
          <h1>Cadastrar áreas</h1>

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
            placeholder="Tamanho (em hectare)"
            type="text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />

          {!params.id && (
            <select
              value={selectedCulture}
              onChange={(event) => setSelectedCulture(event.target.value)}
            >
              <option value="">Selecione a cultura</option>
              {cultures.map((culture) => (
                <option key={culture.id} value={culture.id}>
                  {culture.name}
                  {/* <Note
                    key={String(property.id)}
                    data={property}
                    onClick={() => handleDetails(properties.id)}
                  /> */}
                </option>
              ))}
            </select>
          )}

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
