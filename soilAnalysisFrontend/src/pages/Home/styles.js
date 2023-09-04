import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 230px auto;
  grid-template-rows: 50px 50px auto 64px;
  grid-template-areas: 
  "brand header"
  "menu search"
  "menu content"
  "menu footer";
`;

export const Search = styled.div`
  grid-area: search;
  padding: 64px 64px 0;
`;

export const Content = styled.div`
  grid-area: content;

  display: flex;
  gap: 10px;
  padding: 0 64px;
  overflow-y: auto;
`;