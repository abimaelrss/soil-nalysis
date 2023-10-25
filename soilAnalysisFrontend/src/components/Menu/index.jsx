import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RiShutDownLine } from "react-icons/ri";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Container } from "./styles";

import { ButtonText } from "../ButtonText";
import { useProperty } from "../../hooks/propertyProvider";

export function Menu() {
  const { user } = useAuth();
  const { properties, selectedProperty } = useProperty();

  const navigate = useNavigate();

  return (
    <Container>
      <li>
        <ButtonText title="HOME" onClick={() => navigate("/")} />
      </li>
      {user.role === USER_ROLE.ADMIN && (
        <>
          <li>
            <ButtonText
              title="USUARIOS"
              // onClick={() => navigate("/users")}
            />
          </li>
          <li>
            <ButtonText
              title="FORRAGENS"
              onClick={() => navigate("/forages")}
            />
          </li>
          <li>
            <ButtonText
              title="INSUMOS"
              // onClick={() => navigate("/inputs")}
            />
          </li>
        </>
      )}

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
