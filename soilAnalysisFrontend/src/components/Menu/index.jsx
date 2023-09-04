import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Container } from "./styles";

import { ButtonText } from "../ButtonText";
import { useProperty } from "../../hooks/propertyProvider";

export function Menu() {
  const { properties, selectedProperty } = useProperty();

  const navigate = useNavigate();

  return (
    <Container>
      <li>
        <ButtonText title="HOME" onClick={() => navigate("/")} />
      </li>

      {selectedProperty && (
        <>
          <li>
            <ButtonText
              title="PROPRIEDADES"
              onClick={() => navigate("/properties")}
            />
          </li>
          <li>
            <ButtonText title="AREAS" onClick={() => navigate("/areas")} />
          </li>
          <li>
            <ButtonText
              title="ANALISES"
              onClick={() => navigate("/analysis")}
            />
          </li>
        </>
      )}
    </Container>
  );
}
