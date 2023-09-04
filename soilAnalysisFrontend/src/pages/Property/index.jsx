import { useEffect, useState } from "react";
import { FiPlus, FiArrowLeft, FiDelete } from "react-icons/fi";

import { useNavigate, useParams } from "react-router-dom";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { api } from "../../services/api";

import { Container, Content, Form } from "./styles";
import { Brand } from "../../components/Brand";
import { Menu } from "../../components/Menu";
import { useProperty } from "../../hooks/propertyProvider";

export function Property() {
  const { properties, searchProperty } = useProperty();

  const [name, setName] = useState("");
  const [size, setSize] = useState("");

  const params = useParams();

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleNew() {
    if (!name) {
      return alert("Digite o nome da propreidade!");
    }

    if (!size) {
      return alert("Digite o tamanho da propreidade!");
    }

    await api.post("/properties", {
      name,
      size,
    });

    alert("Propriedade criada com sucesso!");
    searchProperty();
    navigate(-1);
  }

  async function handleUpdate() {
    const property_updated = {
      name,
      size,
    };

    try {
      await api.put(`/properties/${params.id}`, property_updated);
      alert("Propriedade atualizada com sucesso!");
      searchProperty();
      navigate(-1);
    } catch (error) {
      alert("Erro ao atualizar propriedade!");
    }
  }

  useEffect(() => {
    async function findProperties() {
      const property = properties.find((prop) => prop.id === Number(params.id));
      setName(property.name);
      setSize(property.size);
    }
    params.id && findProperties();
  }, [params.id]);

  return (
    <Container>
      <Brand />

      <Header />

      <Menu />
      <Content>
        <Form>
          <h1>Cadastrar propriedade</h1>

          <Input
            placeholder="Nome"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            placeholder="Tamanho (em hectare)"
            type="text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />

          <div className="baseboard">
            <Button title="Voltar" color="back" onClick={handleBack}>
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
