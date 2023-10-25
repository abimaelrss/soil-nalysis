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
`;

export const Search = styled.div`
  grid-area: search;
  padding: 64px 64px 0;
`;

export const Content = styled.div`
  grid-area: content;
  padding: 0 14px;
  overflow-y: auto;

  > main {
    padding: 10px;
    border-top: 3px solid green;
    background-color: rgb(255, 255, 255);

    summary{
      all: unset;
      padding: 1.6rem;
      width: 100%;
      cursor: pointer;
    }

    details {

    }

    ul {
      padding-bottom: 1.6rem;
      font-size: .8rem;
      list-style: none;
    }

    li + li {
      margin-top: .5rem;
    }

    select {
      font-size: 16px;
      padding: 5px;
      margin: 0 0 10px;
      width: auto;

      border-radius: 5px;
    }

    table {
      width: 100%;

      margin: 40px 0;
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

      tbody td {
        padding-left: 20px;
      }
    }
  }
`;
