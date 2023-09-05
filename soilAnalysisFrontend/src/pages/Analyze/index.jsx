import { FiArrowLeft, FiPlus, FiDelete } from "react-icons/fi";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { api } from "../../services/api";

import { Container, Content, Form, Input } from "./styles";
import { Brand } from "../../components/Brand";
import { Menu } from "../../components/Menu";
import { PropertyProvider, useProperty } from "../../hooks/propertyProvider";
import { useAuth } from "../../hooks/auth";

export function Analyze() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [depth, setDepth] = useState("");
  const [smp, setSmp] = useState("");
  const [cacl, setCacl] = useState("");
  const [h2o, setH2o] = useState("");
  const [caPlusMg, setCaPlusMg] = useState("");
  const [ca, setCa] = useState("");
  const [mg, setMg] = useState("");
  const [al, setAl] = useState("");
  const [hAl, setHAl] = useState("");
  const [k, setK] = useState("");
  const [pMel, setPMel] = useState("");
  const [pRes, setPRes] = useState("");
  const [pRem, setPRem] = useState("");
  const [s, setS] = useState("");
  const [b, setB] = useState("");
  const [cu, setCu] = useState("");
  const [fe, setFe] = useState("");
  const [mn, setMn] = useState("");
  const [zn, setZn] = useState("");
  const [na, setNa] = useState("");
  const [argila, setArgila] = useState("");
  const [silte, setSilte] = useState("");
  const [areia, setAreia] = useState("");
  const [mo, setMo] = useState("");
  const [co, setCo] = useState("");
  const [tezao, setTezao] = useState("");
  const [tezin, setTezin] = useState("");
  const [v, setV] = useState("");
  const [satAl, setSatAl] = useState("");
  const [caCtc, setCaCtc] = useState("");
  const [mgCtc, setMgCtc] = useState("");
  const [kCtc, setKCtc] = useState("");
  const [hAlCtc, setHAlCtc] = useState("");
  const [caMg, setCaMg] = useState("");
  const [caK, setCaK] = useState("");
  const [mgK, setMgK] = useState("");

  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState();

  const params = useParams();

  const { user } = useAuth();
  const user_id = user.user_id;

  const { selectedProperty } = useProperty();

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleNew() {
    if (!selectedArea) {
      return alert("Selecione a área para cadastrar a análise!");
    }

    if (!name) {
      return alert("Informe o nome da análise!");
    }

    if (!description) {
      return alert("Informe a descrição da análise!");
    }

    if (!depth) {
      return alert("Informe a propfundidae da análise!");
    }

    if (!smp) {
      return alert("Informe o smp!");
    }

    if (!cacl) {
      return alert("Informe o CaCl!");
    }

    if (!h2o) {
      return alert("Informe o H2O!");
    }

    await api.post("/analysis", {
      name,
      description,
      depth,
      smp,
      cacl,
      h2o,
      caPlusMg,
      ca,
      mg,
      al,
      hAl,
      k,
      pMel,
      pRes,
      pRem,
      s,
      b,
      cu,
      fe,
      mn,
      zn,
      na,
      argila,
      silte,
      areia,
      mo,
      co,
      tezao,
      tezin,
      v,
      satAl,
      caCtc,
      mgCtc,
      kCtc,
      hAlCtc,
      caMg,
      caK,
      mgK,
      area_id: selectedArea,
      property_id: selectedProperty,
    });

    alert("Análise criada com sucesso!");
    navigate(-1);
  }

  async function handleUpdate() {
    const analyze_updated = {
      name,
      description,
      depth,
      smp,
      cacl,
      h2o,
      caPlusMg,
      ca,
      mg,
      al,
      hAl,
      k,
      pMel,
      pRes,
      pRem,
      s,
      b,
      cu,
      fe,
      mn,
      zn,
      na,
      argila,
      silte,
      areia,
      mo,
      co,
      tezao,
      tezin,
      v,
      satAl,
      caCtc,
      mgCtc,
      kCtc,
      hAlCtc,
      caMg,
      caK,
      mgK,
    };

    try {
      await api.put(`/analysis/${params.id}`, analyze_updated);
      alert("Análise atualizada com sucesso!");
      navigate(-1);
    } catch (error) {
      alert("Erro ao atualizar análise!");
    }
  }

  async function fetchAnalyze() {
    const response = await api.get(`/analysis/${params.id}`);
    setName(response.data.name);
    setDescription(response.data.description);
    setDepth(response.data.depth);
    setSmp(response.data.smp);
    setCacl(response.data.cacl);
    setH2o(response.data.h2o);
    setCaPlusMg(response.data.caPlusMg);
    setCa(response.data.ca);
    setMg(response.data.mg);
    setAl(response.data.al);
    setHAl(response.data.hAl);
    setK(response.data.k);
    setPMel(response.data.pMel);
    setPRes(response.data.pRes);
    setPRem(response.data.pRem);
    setS(response.data.s);
    setB(response.data.b);
    setCu(response.data.cu);
    setFe(response.data.fe);
    setMn(response.data.mn);
    setZn(response.data.zn);
    setNa(response.data.na);
    setArgila(response.data.argila);
    setSilte(response.data.silte);
    setAreia(response.data.areia);
    setMo(response.data.mo);
    setCo(response.data.co);
    setTezao(response.data.tezao);
    setTezin(response.data.tezin);
    setV(response.data.v);
    setSatAl(response.data.satAl);
    setCaCtc(response.data.caCtc);
    setMgCtc(response.data.mgCtc);
    setKCtc(response.data.kCtc);
    setHAlCtc(response.data.hAlCtc);
    setCaMg(response.data.caMg);
    setCaK(response.data.caK);
    setMgK(response.data.mgK);
  }

  async function fetchAreas() {
    const response = await api.get(`/areas?property_id=${selectedProperty}`);
    setAreas(response.data);
  }

  useEffect(() => {
    fetchAnalyze();
    fetchAreas();
  }, []);

  return (
    <Container>
      <Brand />

      <Header />

      <Menu />

      <Content>
        <Form>
          <h1>Cadastrar áreas</h1>
          {!params.id &&(
            <select
            value={selectedArea}
            onChange={(event) => setSelectedArea(event.target.value)}
          >
            <option value="">Selecione a área</option>
            {areas.map((area) => (
              <option key={area.id} value={area.id}>
                {area.name}
                {/* <Note
                    key={String(property.id)}
                    data={property}
                    onClick={() => handleDetails(properties.id)}
                  /> */}
              </option>
            ))}
          </select>
          )}
          
          <table>
            <thead>
              <tr>
                <th colSpan="3">Dados</th>
                <th colSpan="3">pH</th>
                <th colSpan="6">cmol . dm -3</th>
                <th colSpan="4">mg . dm -3 (ppm)</th>
              </tr>
              <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Profundidade</th>
                <th>SMP</th>
                <th>CaCl2</th>
                <th>H2O</th>
                <th>Ca+Mg</th>
                <th>Ca</th>
                <th>Mg</th>
                <th>Al</th>
                <th>H + Al</th>
                <th>K</th>
                <th>P(mel)</th>
                <th>P(res)</th>
                <th>P(rem)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Input
                    placeholder="Nome"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="Descrição"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="Profundidade"
                    type="text"
                    value={depth}
                    onChange={(e) => setDepth(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="SMP"
                    type="text"
                    value={smp}
                    onChange={(e) => setSmp(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="CaCl2"
                    type="text"
                    value={cacl}
                    onChange={(e) => setCacl(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="H2O"
                    type="text"
                    value={h2o}
                    onChange={(e) => setH2o(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="Ca + Mg"
                    type="text"
                    value={caPlusMg}
                    onChange={(e) => setCaPlusMg(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="Ca"
                    type="text"
                    value={ca}
                    onChange={(e) => setCa(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="Mg"
                    type="text"
                    value={mg}
                    onChange={(e) => setMg(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="Al"
                    type="text"
                    value={al}
                    onChange={(e) => setAl(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="H + Al"
                    type="text"
                    value={hAl}
                    onChange={(e) => setHAl(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="K"
                    type="text"
                    value={k}
                    onChange={(e) => setK(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="P(mel)"
                    type="text"
                    value={pMel}
                    onChange={(e) => setPMel(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="P(res)"
                    type="text"
                    value={pRes}
                    onChange={(e) => setPRes(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="P(rem)"
                    type="text"
                    value={pRem}
                    onChange={(e) => setPRem(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <th colSpan="2">mg . dm -3(ppm)</th>
                <th colSpan="5">micronutrientes mg . dm -3(ppm) Mehlich</th>
                <th colSpan="3">Textura (mg . dm -3)</th>
              </tr>
              <tr>
                <th>S</th>
                <th>B</th>
                <th>Cu</th>
                <th>Fe</th>
                <th>Mn</th>
                <th>Zn</th>
                <th>Na</th>
                <th>Argila</th>
                <th>Silte</th>
                <th>Areia</th>
              </tr>
              <tr>
                <td>
                  <Input
                    placeholder="S"
                    type="text"
                    value={s}
                    onChange={(e) => setS(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="B"
                    type="text"
                    value={b}
                    onChange={(e) => setB(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="Cu"
                    type="text"
                    value={cu}
                    onChange={(e) => setCu(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="Fe"
                    type="text"
                    value={fe}
                    onChange={(e) => setFe(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="Mg"
                    type="text"
                    value={mn}
                    onChange={(e) => setMn(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="Zn"
                    type="text"
                    value={zn}
                    onChange={(e) => setZn(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="Na"
                    type="text"
                    value={na}
                    onChange={(e) => setNa(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="Argila"
                    type="text"
                    value={argila}
                    onChange={(e) => setArgila(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="Silte"
                    type="text"
                    value={silte}
                    onChange={(e) => setSilte(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="Areia"
                    type="text"
                    value={areia}
                    onChange={(e) => setAreia(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <th colSpan="2">g . dm -3</th>
                <th colSpan="2">cmol . dm -3</th>
                <th colSpan="6">%</th>
                <th colSpan="3">Relação entre bases:</th>
              </tr>
              <tr>
                <th>M.O.</th>
                <th>C.O.</th>
                <th>T</th>
                <th>t</th>
                <th>V</th>
                <th>Sat. Al</th>
                <th>Ca/CTC</th>
                <th>Mg/CTC</th>
                <th>K/CTC</th>
                <th>H+Al/CTC</th>
                <th>Ca/Mg</th>
                <th>Ca/K</th>
                <th>Mg/K</th>
              </tr>
              <tr>
                <td>
                  <Input
                    placeholder="M.O."
                    type="text"
                    value={mo}
                    onChange={(e) => setMo(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="C.O."
                    type="text"
                    value={co}
                    onChange={(e) => setCo(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="T"
                    type="text"
                    value={tezao}
                    onChange={(e) => setTezao(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="t"
                    type="text"
                    value={tezin}
                    onChange={(e) => setTezin(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="V"
                    type="text"
                    value={v}
                    onChange={(e) => setV(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="Sat. Al"
                    type="text"
                    value={satAl}
                    onChange={(e) => setSatAl(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="Ca/CTC"
                    type="text"
                    value={caCtc}
                    onChange={(e) => setCaCtc(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="Mg/CTC"
                    type="text"
                    value={mgCtc}
                    onChange={(e) => setMgCtc(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="K/CTC"
                    type="text"
                    value={kCtc}
                    onChange={(e) => setKCtc(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="H+Al/CTC"
                    type="text"
                    value={hAlCtc}
                    onChange={(e) => setHAlCtc(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="Ca/Mg"
                    type="text"
                    value={caMg}
                    onChange={(e) => setCaMg(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="Ca/K"
                    type="text"
                    value={caK}
                    onChange={(e) => setCaK(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="Mg/K"
                    type="text"
                    value={mgK}
                    onChange={(e) => setMgK(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
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
