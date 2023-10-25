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
import { Article } from "../../components/Article";
import { PropertyProvider, useProperty } from "../../hooks/propertyProvider";
import { useAuth } from "../../hooks/auth";

export function Interpretation() {
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

  const [teorCaO, setTeorCaO] = useState("");
  const [teorMgO, setTeorMgO] = useState("");
  const [prnt, setPrnt] = useState("");
  const [ctc, setCtc] = useState("");
  const [vD, setVD] = useState("");

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

  function nutrientLevelSimple(value, low, adequate) {
    if (value <= low) {
      return "baixo";
    }
    if ((value > low) & (value <= adequate)) {
      return "adequado";
    }
    if (value > adequate) {
      return "alto";
    }
  }

  function nutrientLevel(value, low, average, adequate, high) {
    // console.log(value, low, average, adequate, high);

    if (value <= low) {
      return "baixo";
    }
    if ((value > low) & (value <= average)) {
      return "médio";
    }
    if ((value > average) & (value <= adequate)) {
      return "adequado";
    }
    if ((value > adequate) & (value <= high)) {
      return "alto";
    }
    if (value > high) {
      return "muito alto";
    }
  }

  function recomendationCalcareousV(vD, v, tezin, prnt) {
    if ((((vD - v) * tezin) / prnt) * 1000 < 0) {
      return 0;
    }

    return (((vD - v) * tezin) / prnt) * 1000;
  }

  function recomendationCalcareousAl(al, ca, mg) {
    if (al * 2 + (2 - (ca + mg)) * 1000 < 0) {
      return 0;
    }

    return al * 2 + (2 - (ca + mg)) * 1000;
  }

  function recomendationCalcareousCa(tezin, ca, teorCaO) {
    if ((((tezin * 0.5 - ca) * 0.56) / teorCaO) * 100 * 1000 < 0) {
      return 0;
    }

    return (((tezin * 0.5 - ca) * 0.56) / teorCaO) * 100 * 1000;
  }

  function recomendationCalcareousMg(tezin, mg, teorMgO) {
    if (((((tezin * 0, 17) - mg) * 0.404) / teorMgO) * 100 * 1000 < 0) {
      return 0;
    }

    return ((((tezin * 0, 17) - mg) * 0.404) / teorMgO) * 100 * 1000;
  }

  async function fetchAnalyze() {
    const response = await api.get(`/analysis/${params.id}`);
    setName(response.data.name || "");
    setDescription(response.data.description || "");
    setDepth(response.data.depth || "");
    setSmp(response.data.smp || "");
    setCacl(response.data.cacl || "");
    setH2o(response.data.h2o || "");
    setCaPlusMg(response.data.caPlusMg || "");
    setCa(response.data.ca || "");
    setMg(response.data.mg || "");
    setAl(response.data.al || "");
    setHAl(response.data.hAl || "");
    setK(response.data.k || "");
    setPMel(response.data.pMel || "");
    setPRes(response.data.pRes || "");
    setPRem(response.data.pRem || "");
    setS(response.data.s || "");
    setB(response.data.b || "");
    setCu(response.data.cu || "");
    setFe(response.data.fe || "");
    setMn(response.data.mn || "");
    setZn(response.data.zn || "");
    setNa(response.data.na || "");
    setArgila(response.data.argila || "");
    setSilte(response.data.silte || "");
    setAreia(response.data.areia || "");
    setMo(response.data.mo || "");
    setCo(response.data.co || "");
    setTezao(response.data.tezao || "");
    setTezin(response.data.tezin || "");
    setV(response.data.v || "");
    setSatAl(response.data.satAl || "");
    setCaCtc(response.data.caCtc || "");
    setMgCtc(response.data.mgCtc || "");
    setKCtc(response.data.kCtc || "");
    setHAlCtc(response.data.hAlCtc || "");
    setCaMg(response.data.caMg || "");
    setCaK(response.data.caK || "");
    setMgK(response.data.mgK || "");
  }

  async function fetchAreas() {
    const response = await api.get(`/areas?property_id=${selectedProperty}`);
    setAreas(response.data);
  }

  useEffect(() => {
    params.id && fetchAnalyze();
    fetchAreas();
  }, [params.id]);

  return (
    <Container>
      <Brand />

      <Header />

      <Menu />

      <Content>
        <Form>
          <div className="baseboard">
            <Button title="Voltar" color="" onClick={handleBack}>
              <FiArrowLeft />
            </Button>

            {/* <Button
              title="Salvar"
              color="save"
              onClick={params.id ? handleUpdate : handleNew}
            >
            <FiPlus />
          </Button> */}
          </div>

          <h1>Análise e interpretação</h1>

          <div>
            <div>CaCl2</div>
            <div>{cacl}</div>
            <div>{nutrientLevel(cacl, 4.4, 4.8, 5.5, 5.8)}</div>
          </div>

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
                <td>{name}</td>
                <td>{description}</td>
                <td>{depth}</td>
                <td>{smp}</td>
                <td>{cacl}</td>
                <td>{h2o}</td>
                <td>{caPlusMg}</td>
                <td>{ca}</td>
                <td>{mg}</td>
                <td>{al}</td>
                <td>{hAl}</td>
                <td>{k}</td>
                <td>{pMel}</td>
                <td>{pRes}</td>
                <td>{pRem}</td>
              </tr>

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td className="resultInterpretation"></td>
                <td className="resultInterpretation">
                  {nutrientLevel(cacl, 4.4, 4.8, 5.5, 5.8)}
                </td>
                <td className="resultInterpretation">faltando</td>
                <td className="resultInterpretation"></td>
                <td className="resultInterpretation">
                  {nutrientLevel(ca, 1.4, 1.5, 7, 7.1)}
                </td>
                <td className="resultInterpretation">
                  {nutrientLevel(mg, 0.4, 0.5, 2, 2.1)}
                </td>
                <td className="resultInterpretation">
                  {nutrientLevel(al, 0.2, 0.5, 1, 2)}
                </td>
                <td className="resultInterpretation">
                  {nutrientLevel(hAl, 1, 2.5, 5, 9)}
                </td>
                <td className="resultInterpretation">
                  {nutrientLevel(k, 15, 40, 70, 120)}
                </td>
                <td className="resultInterpretation">faltando</td>
                <td className="resultInterpretation">
                  {nutrientLevel(pRes, 6, 12, 30, 60)}
                </td>
                <td className="resultInterpretation">falntando</td>
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
                <td>{s}</td>
                <td>{b}</td>
                <td>{cu}</td>
                <td>{fe}</td>
                <td>{mn}</td>
                <td>{zn}</td>
                <td>{na}</td>
                <td>{argila}</td>
                <td>{silte}</td>
                <td>{areia}</td>
              </tr>
              <tr>
                <td className="resultInterpretation">
                  {nutrientLevelSimple(s, 5, 10)}
                </td>
                <td className="resultInterpretation">
                  {nutrientLevel(b, 0.1, 0.3, 0.6, 0.9)}
                </td>
                <td className="resultInterpretation">
                  {nutrientLevel(cu, 0.3, 0.7, 1.2, 1.8)}
                </td>
                <td className="resultInterpretation">
                  {nutrientLevel(fe, 8, 18, 30, 45)}
                </td>
                <td className="resultInterpretation">
                  {nutrientLevel(mn, 2, 5, 8, 12)}
                </td>
                <td className="resultInterpretation">
                  {nutrientLevel(zn, 0.4, 0.9, 1.5, 2.2)}
                </td>
                <td className="resultInterpretation">faltando</td>
                <td className="resultInterpretation">faltando</td>
                <td className="resultInterpretation">faltando</td>
                <td className="resultInterpretation">faltando</td>
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
                <td>{mo}</td>
                <td>{co}</td>
                <td>{tezao}</td>
                <td>{tezin}</td>
                <td>{v}</td>
                <td>{satAl}</td>
                <td>{caCtc}</td>
                <td>{mgCtc}</td>
                <td>{kCtc}</td>
                <td>{hAlCtc}</td>
                <td>{caMg}</td>
                <td>{caK}</td>
                <td>{mgK}</td>
              </tr>
              <tr>
                <td className="resultInterpretation">
                  {nutrientLevel(mo, 0.7, 2, 4, 7)}
                </td>
                <td className="resultInterpretation">
                  {nutrientLevel(co, 0.4, 1.16, 2.32, 4.06)}
                </td>
                <td className="resultInterpretation">
                  {nutrientLevel(tezao, 1.6, 4.3, 8.6, 15)}
                </td>
                <td className="resultInterpretation">
                  {nutrientLevel(tezin, 0.8, 2.3, 4.6, 8)}
                </td>
                <td className="resultInterpretation">
                  {nutrientLevel(v, 20, 40, 60, 80)}
                </td>
                <td className="resultInterpretation">
                  {nutrientLevel(satAl, 15, 30, 50, 75)}
                </td>
                <td className="resultInterpretation">
                  {nutrientLevel(caCtc, 0.4, 1.2, 2.4, 4)}
                </td>
                <td className="resultInterpretation">
                  {nutrientLevel(mgCtc, 0.15, 0.45, 0.9, 1.5)}
                </td>
                <td className="resultInterpretation">
                  {nutrientLevel(kCtc, 3, 5)}
                </td>
                <td className="resultInterpretation"></td>
                <td className="resultInterpretation">
                  {nutrientLevelSimple(caMg, 2, 4)}
                </td>
                <td className="resultInterpretation">faltando</td>
                <td className="resultInterpretation">faltando</td>
              </tr>
            </tbody>
          </table>
        </Form>

        <main>
          <Article title="Recomendação de calcário em kg/ha">
            <div>
              <label htmlFor="">Informe o teor de CaO no calcário</label>
              <Input
                placeholder="Teor de CaO"
                onChange={(e) => setTeorCaO(e.target.value)}
              />
              <label htmlFor="">Informe o teor de MgO no calcário</label>
              <Input
                placeholder="Teor de MgO"
                onChange={(e) => setTeorMgO(e.target.value)}
              />
              <label htmlFor="">Informe o PRNT</label>
              <Input
                placeholder="PRNT"
                onChange={(e) => setPrnt(e.target.value)}
              />
              <label htmlFor="">Informe a V% esejada</label>
              <Input
                placeholder="V% desejada"
                onChange={(e) => setVD(e.target.value)}
              />
            </div>
            <table>
              {/* <tr>
                <th rowSpan="2">Calcário</th>
                <th>Teor de CaO no calcário</th>
                <th>Teor de MgO no calcário</th>
                <th>PRNT</th>
              </tr>
              <tr>
                <td>
                  <Input
                    placeholder="Teor de CaO"
                    onChange={(e) => setTeorCaO(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="Teor de MgO"
                    onChange={(e) => setTeorMgO(e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    placeholder="PRNT"
                    onChange={(e) => setPrnt(e.target.value)}
                  />
                </td>
              </tr> */}
              <tr>
                <th rowSpan="2">Pela V%</th>
                {/* <th>V% Desejada</th> */}
                <th>Total (Kg/ha)</th>
              </tr>
              <tr>
                {/* <td>
                  <Input
                    placeholder="V% desejada"
                    onChange={(e) => setVD(e.target.value)}
                  />
                </td> */}
                <td>{recomendationCalcareousV(vD, v, tezin, prnt)}</td>
              </tr>
              <tr>
                <th rowSpan="2">Pelo Al</th>
                <th>Total (Kg/ha)</th>
              </tr>
              <tr>
                <td>{recomendationCalcareousAl(al, ca, mg)}</td>
              </tr>
              <tr>
                <th rowSpan="2">Pelo Ca</th>
                <th>Total (Kg/ha)</th>
              </tr>
              <tr>
                <td>{recomendationCalcareousCa(tezin, ca, teorCaO)}</td>
              </tr>
              <tr>
                <th rowSpan="2">Pelo Mg</th>
                <th>Total (Kg/ha)</th>
              </tr>
              <tr>
                <td>{recomendationCalcareousMg(tezin, mg, teorMgO)}</td>
              </tr>
            </table>
          </Article>
          <Article title="Recomendação de gesso em kg/ha"></Article>
          <Article title="Recomendação de correção de nutrientes em kg/ha"></Article>
          <Article title="Recomendação de manutenção de nutrientes em kg/ha"></Article>
          <Article title="Recomendação total em kg/ha"></Article>
        </main>
      </Content>
    </Container>
  );
}
