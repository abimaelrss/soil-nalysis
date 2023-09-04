import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: footer;

  width: 100%;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

  display: flex;
  justify-content: space-between;

  padding: 20px 80px;
`;