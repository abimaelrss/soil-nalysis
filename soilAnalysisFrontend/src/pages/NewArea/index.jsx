import { FiArrowLeft, FiPlus } from 'react-icons/fi';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { api } from '../../services/api';

import { Container, Content, Form } from './styles';
import { Brand } from '../../components/Brand';
import { Menu } from '../../components/Menu';

export function NewArea() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");

  const [user, setUser] = useState("");
  const [user_id, setUser_id] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleNewArea() {
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
      user_id
    });

    alert("Área criada com sucesso!");
    navigate(-1);
  }

  return (
    <Container>

      <Brand />

      <Header />

      <Menu />

      <Content>

        <Form>
          <select name="propriedade" id="">
            <option value="" selected>Selecione</option>
            <option value="">propriedade 1</option>
            <option value="">propriedade 2</option>
          </select>
          <h1>Cadastrar áreas</h1>
          <ButtonText
            title="Voltar"
            onClick={handleBack}
          />

          <Input
            placeholder="Nome"
            onChange={e => setName(e.target.value)}
          />

          <Input
            placeholder="Descrição"
            onChange={e => setDescription(e.target.value)}
          />

          <Input
            placeholder="Tamanho (em hectare)"
            onChange={e => setSize(e.target.value)}
          />

          <div className="baseboard">

            <Button
              title="Voltar"
              color=""
              onClick={handleBack}
            >
              <FiArrowLeft />
            </Button>
            
            <Button
              title="Salvar"
              color="save"
              onClick={handleNewArea}
            >
              <FiPlus />
            </Button>

          </div>

        </Form>
      </Content>

    </Container>
  );
}