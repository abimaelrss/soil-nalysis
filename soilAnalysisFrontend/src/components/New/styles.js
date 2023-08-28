import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  grid-area: new;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  background-color: #3CB371;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  /* height: 56px; */

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 8px;
  }
`;