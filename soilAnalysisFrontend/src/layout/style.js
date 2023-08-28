import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 0 auto 64px;
  grid-template-areas: 
  "brand header"
  "menu search"
  "menu content"
  "menu content";
`;

export const Content = styled.div`
  grid-area: content;

  display: flex;
  gap: 10px;

  padding: 20px 64px;
  overflow-y: auto;
`;