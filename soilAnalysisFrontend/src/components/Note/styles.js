import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;

  /* border-top: solid 1px ${({ theme }) => theme.COLORS.GRAY_300};
  border-bottom: solid 1px ${({ theme }) => theme.COLORS.GRAY_300};
  border-left: none;
  border-right: none; */

  padding: 22px;
  margin-bottom: 16px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
  
`;