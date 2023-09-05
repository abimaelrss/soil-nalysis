import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 230px auto;
  grid-template-rows: 50px 50px auto 64px;
  grid-template-areas:
    "brand header"
    "menu content"
    "menu content"
    "menu content";

  select {
    font-size: 16px;
    padding: 5px;
    margin: 0 0 10px;
    width: auto;

    border-radius: 5px;
  }
`;

export const Content = styled.div`
  grid-area: content;

  display: flex;
  gap: 10px;
  padding: 0 34px;
  overflow-y: auto;
`;

export const Form = styled.div`
  margin: 38px auto;

  background: #fff;

  > table th {
    /* border: solid 1px; */
  }

  table {
    text-align: center;

    thead {
      background: #f1f1f1;
    }

    tbody tr:nth-child(even) {
      background: #f9f9f9;
    }

    tbody tr:nth-child(odd) {
      background: #f1f1f1;
    }
  }

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

export const Input = styled.input`
  width: 100%;
  height: 40px;

  text-align: center;
`;
