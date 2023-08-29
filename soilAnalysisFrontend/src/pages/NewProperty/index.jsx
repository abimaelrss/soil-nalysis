import { useState } from 'react';
import { FiPlus, FiArrowLeft } from 'react-icons/fi';

import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { api } from '../../services/api';

import { Container, Content, Form } from './styles';
import { Brand } from '../../components/Brand';
import { Menu } from '../../components/Menu';
import { Baseboard } from '../../components/Baseboard';

export function NewProperty() {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleNewProperty() {
    if (!name) {
      return alert("Digite o nome da propreidade!");
    }

    if (!size) {
      return alert("Digite o tamanho da propreidade!");
    }

    await api.post("/properties", {
      name,
      size
    });

    alert("Propriedade criada com sucesso!");
    navigate(-1);
  }

  return (
    <Container>

      <Brand />

      <Header />

      <Menu />

      <Content>

        <Form>
          <h1>Cadastrar propriedade</h1>
          <ButtonText
            title="Voltar"
            onClick={handleBack}
          />

          <Input
            placeholder="Nome"
            onChange={e => setName(e.target.value)}
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
              onClick={handleNewProperty}
            >
              <FiPlus />
            </Button>

          </div>

        </Form>

      </Content>

    </Container>
  );
}