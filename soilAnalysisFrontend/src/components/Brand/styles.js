import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  /* background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900}; */
  /* background-color: rgb(0, 113, 188); */
  background-color: #2F4F4F;

  > h1 {
    font-size: 24px;
    /* color: ${({ theme }) => theme.COLORS.ORANGE}; */
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  
  > h1:hover {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    transition: 0.2s;
  }
`;