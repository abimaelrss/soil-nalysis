import styled from 'styled-components';

export const Container = styled.button`
  /* background-color: ${({ theme }) => theme.COLORS.ORANGE}; */
  /* color: ${({ theme }) => theme.COLORS.BACKGROUND_800}; */
  /* background-color: #3CB371; */
  background-color: ${props => {
    if (props.color == "save") {
      return "#3CB371"
    }
    if (props.color == "alter") {
      return "#ADD8E6"
    }
    if (props.color == "delete") {
      return "#FF6347"
    }
  }};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  width: 100px;
  height: 36px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;