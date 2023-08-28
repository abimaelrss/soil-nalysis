import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;

  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  /* background-color: rgb(132, 0, 220); */
  background-color: #2E8B57;

  display: flex;
  justify-content: space-between;

  padding: 0 80px;

`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 40px;
    height: 40px;

    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      /* color: ${({ theme }) => theme.COLORS.WHITE}; */
      color: rgb(26, 41, 71);
    }
    
    strong {
      font-size: 16px;
      /* color: ${({ theme }) => theme.COLORS.WHITE}; */
      color: rgb(26, 41, 71);
    }
  }
`;

export const Farm = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  width: 70%;
  
  > select {
    font-size: 16px;
    padding: 5px;

    border-radius: 5px;
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: rgb(26, 41, 71);
    font-size: 36px;
  }
  
  > svg:hover {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    transition: 0.2s;
  }
`;