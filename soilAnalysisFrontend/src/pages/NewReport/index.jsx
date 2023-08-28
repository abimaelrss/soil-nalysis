import { useState } from 'react';

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

export function NewReport() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted));
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");

  }
  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewReport() {
    if (!title) {
      return alert("Digite o título da nota!");
    }

    if (newLink) {
      return alert("Você deixou um link no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio!");
    }

    if (newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio!");
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links
    });

    alert("Nota criada com sucesso!");
    navigate(-1);
  }

  return (
    <Container>

      <Brand />

      <Header />

      <Menu />

      <Content>

        <Form>
          <h1>Relatórios</h1>
          <ButtonText
            title="Voltar"
            onClick={handleBack}
          />

          <div className="baseboard">

            <Button
              title="Voltar"
              color=""
              onClick={handleBack}
            />
            <Button
              title="Salvar"
              color="save"
              onClick={handleNewReport}
            />
          </div>

        </Form>

      </Content>

    </Container>
  );
}