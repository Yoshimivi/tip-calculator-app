import styled from 'styled-components';

export const StyleFooter = styled.footer`
  font-size: 14px;
  text-align: center;
  margin-top: 8px;
  color: ${props => props.theme.colors.textPrimary};

  a {
    text-decoration: none;
    font-weight: 700;
    color: ${props => props.theme.colors.textPrimary};
  }

`