import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  /* background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900}; */
  /* background-color: #8FBC8F; */
  background-color: rgb(255, 255, 255);
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  margin-bottom: 8px;
  border: solid 1px;
  border-radius: 5px;

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
    background: transparent;
    border: 0;
    
    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    margin-left: 16px;
  }
`;