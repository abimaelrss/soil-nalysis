import styled from "styled-components";

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

  /* display: flex; */
  /* gap: 10px; */
  padding: 0 14px;
  overflow-y: auto;

  main {
    /* display: flex; */
    /* gap: 2rem; */

    /* padding: 1rem; */

    table {
      width: 100%;
      /* text-align: center; */

      background: #f1f1f1;
      thead {
      }

      tr {
      }

      tr:nth-child(even) {
        /* background: green; */
      }
      
      tr:nth-child(odd) {
        background: #836FFF;
      }

      input {
        width: 100%;
      }
    }
  }
`;

export const Form = styled.div`
  margin: 38px auto;

  padding: 1rem;

  background: #fff;

  > table th {
    /* border: solid 1px; */
  }

  table {
    width: 100%;
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

    .resultInterpretation{
      background: #8FBC8F;
      /* color: ${({ theme }) => theme.COLORS.WHITE}; */
      color: green;
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
  height: 1.5rem;

  text-align: center;
`;
