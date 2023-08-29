import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FiArrowLeft, FiPlus } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { api } from '../../services/api';

import { Container, Content, Form } from './styles';
import { Menu } from '../../components/Menu';
import { Brand } from '../../components/Brand';

export function NewAnalysis() {
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

  async function handleNewAnalysis() {
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
          <h1>Cadastrar análises</h1>
          <ButtonText
            title="Voltar"
            onClick={handleBack}
          />

          <div className="tags">
            <Section title="Sobre">
              <Input
                placeholder="Descrição"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="Profundidade"
                onChange={e => setTitle(e.target.value)}
              />
            </Section>

            <Section title="pH">
              <Input
                placeholder="SMP"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="CaCl2"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="H2O"
                onChange={e => setTitle(e.target.value)}
              />
            </Section>

            <Section title="cmolc . dm -³">
              <Input
                placeholder="Ca+Mg"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="Ca"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="Mg"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="Al"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="H+Al"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="K"
                onChange={e => setTitle(e.target.value)}
              />
            </Section>

            <Section title="mg . dm -³ (ppm)">
              <Input
                placeholder="K"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="P(mel)"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="P(res)"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="P(rem)"
                onChange={e => setTitle(e.target.value)}
              />
            </Section>

            <Section title="mg . dm -³ (ppm)">
              <Input
                placeholder="S"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="B"
                onChange={e => setTitle(e.target.value)}
              />
            </Section>

            <Section title="micronutrientes mg . dm -³ (ppm) Mehlich">
              <Input
                placeholder="Cu"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="Fe"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="Mn"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="Zn"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="Na"
                onChange={e => setTitle(e.target.value)}
              />
            </Section>

            <Section title="Textura (g .dm -³)">
              <Input
                placeholder="Argila"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="Silte"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="Areia"
                onChange={e => setTitle(e.target.value)}
              />
            </Section>

            <Section title="g . dm-³">
              <Input
                placeholder="M.O."
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="C.O."
                onChange={e => setTitle(e.target.value)}
              />
            </Section>

            <Section title="cmolc . dm -³">
              <Input
                placeholder="T"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="t"
                onChange={e => setTitle(e.target.value)}
              />
            </Section>

            <Section title="%">
              <Input
                placeholder="V"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="Sat. Al"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="Ca/CTC"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="Mg/CTC"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="K/CTC"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="H+Al/CTC"
                onChange={e => setTitle(e.target.value)}
              />
            </Section>

            <Section title="Relação entre bases:">
              <Input
                placeholder="Ca/Mg"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="Ca/K"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="Mg/K"
                onChange={e => setTitle(e.target.value)}
              />
            </Section>

          </div>

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
              onClick={handleNewAnalysis}
            >
              <FiPlus />
            </Button>

          </div>

        </Form>

      </Content>

    </Container>
  );
}