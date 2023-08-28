import styled from 'styled-components';

export const Container = styled.ul`
  grid-area: menu;
  /* background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900}; */
  background-color: rgb(34, 45, 50);
  
  padding-top: 24px;
  text-align: left;

  > li {
    list-style: none;

    display: flex;
    
    border-left: solid 2px rgb(34, 45, 50);
  }
  
  > li:hover {
    /* background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000}; */
    background-color: rgb(30, 40, 44);
    border-left: solid 2px rgb(60, 141, 188);
  }
`;



