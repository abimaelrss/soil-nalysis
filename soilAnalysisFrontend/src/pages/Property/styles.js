import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 230px auto;
  grid-template-rows: 80px 80px auto 64px;
  grid-template-areas: 
  "brand header"
  "menu content"
  "menu content"
  "menu content";
`;

export const Content = styled.div`
  grid-area: content;

  display: flex;
  gap: 10px;
  padding: 0 34px;
  overflow-y: auto;
`;

export const Form = styled.div`
  width: 80%;
  margin: 38px auto;

  .baseboard {
    width: 100%;

    margin: 28px 0;
    padding: 20px;

    display: flex;
    justify-content: space-between;

    /* background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700}; */
    background-color: rgb(255, 255, 255);
  }
`;
