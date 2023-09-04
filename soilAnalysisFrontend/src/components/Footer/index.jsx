import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { RiShutDownLine } from "react-icons/ri";

import { useAuth } from "../../hooks/auth";
import { useProperty } from "../../hooks/propertyProvider";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <p>Copyright © 2023 Todos direitos reservados.</p>
    </Container>
  );
}
