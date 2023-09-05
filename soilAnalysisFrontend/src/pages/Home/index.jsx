import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPlus, FiSearch, FiHome } from "react-icons/fi";

import { api } from "../../services/api";

import { Container, Content } from "./styles";

import { Brand } from "../../components/Brand";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Article } from "../../components/Article";
import { Footer } from "../../components/Footer";
import { useProperty } from "../../hooks/propertyProvider";

export function Home() {
  const [properties, setProperties] = useState([]);
  const { selectedProperty } = useProperty();
  const [areas, setAreas] = useState([]);
  const [analysis, setAnalysis] = useState([]);

  const navigate = useNavigate();

  async function fetchPropertiesAreasAnalysis() {
    const response = await api.get("/users");
    setProperties(response.data);
  }

  useEffect(() => {
    fetchPropertiesAreasAnalysis();
  }, [selectedProperty]);

  return (
    <Container>
      <Brand />

      <Header />

      <Menu />

      <Content>
        <Article title="Total de propriedades">
          {properties.totalProperties}
        </Article>

        <Article title="Total de áreas">{properties.totalAreas}</Article>

        <Article title="Total de análises">{properties.totalAnalysis}</Article>
      </Content>

      <Footer />
    </Container>
  );
}
