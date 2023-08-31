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
    if (props.color == "back") {
      return "#F1F1F1"
    }
  }};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  align-items: center;
  justify-content: center;

  width: 110px;
  height: 36px;
  border: 0;
  padding: 0 16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;