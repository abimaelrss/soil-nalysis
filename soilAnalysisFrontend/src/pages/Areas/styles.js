import styled from 'styled-components';

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

    table {
      width: 100%;

      margin: 40px 0;
      text-align: center;

      thead {
        background: #F1F1F1;
      }
      
      tbody tr:nth-child(even) {
        background: #F9F9F9;
      }
      
      tbody tr:nth-child(odd) {
        background: #F1F1F1;
      }
      
      tbody td {
        padding-left: 20px;
      }
    }
  }
`;