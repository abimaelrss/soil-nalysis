import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlus, FiSearch, FiArrowLeft } from 'react-icons/fi';

import { api } from '../../services/api';

import { Container, Content, Search } from './styles';

import { Brand } from '../../components/Brand';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { New } from '../../components/New';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';
import { ButtonText } from '../../components/ButtonText';

export function Reports() {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

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

        <Section title="Relatórios">
          {
            notes.map(note => (
              <Note
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(note.id)}
              />
            ))
          }
        </Section>
      </Content>

      <New to="/newReport"/>

      {/* <New to="/newReport">
        <FiPlus />
        Cadastrar
      </New> */}

    </Container>
  );
}