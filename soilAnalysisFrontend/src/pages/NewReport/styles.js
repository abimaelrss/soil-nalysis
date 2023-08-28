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

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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
  max-width: 550px;
  margin: 38px auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 36px;

    button {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
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