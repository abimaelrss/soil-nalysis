import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  height: 100px;

  margin: 28px 0;
  padding: 10px;

  /* background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700}; */
  background-color: rgb(255, 255, 255);

  > h2 {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};

    margin-bottom: 18px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;
  }
`;