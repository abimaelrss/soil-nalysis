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
  const [properties, setProperties ] = useState([]);
  const { selectedProperty } = useProperty();
  const [areas, setAreas] = useState([]);
  const [analysis, setAnalysis] = useState([]);

  const navigate = useNavigate();

  async function fetchProperties() {
    const response = await api.get("/properties");
    setProperties(response.data);
  }

  async function fetchAreas() {
    const response = await api.get(`/areas?property_id=${selectedProperty}`);
    setAreas(response.data);
  }

  async function fetchAnalysis() {
    const response = await api.get(`/analysis?property_id=${selectedProperty}`);
    setAnalysis(response.data);
  }

  useEffect(() => {
    fetchProperties();
    fetchAreas();
    fetchAnalysis();
  }, [selectedProperty]);

  return (
    <Container>
      <Brand />

      <Header />

      <Menu />

      <Content>
        <Article title="Total de propriedades">{properties.length}</Article>

        <Article title="Total de áreas">{areas.length}</Article>

        <Article title="Total de análises">{analysis.length}</Article>
      </Content>

      <Footer />
    </Container>
  );
}
