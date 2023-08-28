import styled from 'styled-components';

export const Container = styled.button`
  background: none;
  /* color: ${({ theme, $isactive }) => $isactive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100}; */
  color: ${({ theme, $isactive }) => theme.COLORS.GRAY_100};

  border: none;
  font-size: 16px;
  width: 100%;
  height: 50px;
  text-align: left;
  padding-left: 20px;
`;