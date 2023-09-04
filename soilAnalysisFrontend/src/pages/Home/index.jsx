import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPlus, FiSearch, FiHome } from "react-icons/fi";

import { api } from "../../services/api";

import { Container, Content } from "./styles";

import { Brand } from "../../components/Brand";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Article } from "../../components/Article";
import { Note } from "../../components/Note";
import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";

export function Home() {
  const [search, setSearch] = useState("");
  const [properties, setProperties] = useState([]);

  const navigate = useNavigate();

  // async function selectProperties() {
  //   const response = await api.get(`/properties?user_id=${}`);
  // };

  useEffect(() => {
    async function fetchProperties() {
      // const response = await api.get(`/properties?name=${search}`);
      const response = await api.get("/properties");
      setProperties(response.data);
    }

    fetchProperties();
  }, [search]);

  return (
    <Container>
      <Brand />

      <Header />

      <Menu />

      <Content>
        <Article title="Total de propriedades">{properties.length}</Article>

        <Article title="Total de áreas"></Article>

        <Article title="Total de análises"></Article>
      </Content>

      <Footer />
    </Container>
  );
}
