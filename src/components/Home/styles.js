import styled from "styled-components";

export const Container = styled.main`
  width: fit-content;
  background-color: ${props => props.theme.colors.containerColor};
  display: flex;
  border-radius: 20px;
  padding: 30px;
  margin: 80px auto;

  @media (max-width: 375px) {
    flex-direction: column;
    width: 100%;
    margin: 50px 0;
  }

  @media (max-width: 850px){
    flex-direction: column;
    width: 100%;
    margin: 50px 0;
  }
`

export const FirstBox = styled.div`
  width: 380px;
  margin-right: 30px;

  @media (max-width: 375px) {
    width: 100%;
  }

  @media (max-width: 850px){
    width: 100%;
  }
`

export const InputBox = styled.div`
  position: relative;

  p {
    color: ${props => props.theme.colors.textColor};
    font-weight: 700;
  }

  .errorText {
    position: absolute;
    right: 0;
    top: 5px;
    color: ${props => props.theme.colors.error};
    font-size: 14px;
  }

  span {
    position: relative;
  }

  input {
    text-align: right;
    cursor: pointer;
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.inputBackground};
    color: ${props => props.theme.colors.textPrimary};
    padding: 10px;
    margin-top: 5px;
    font-size: 20px;
    font-weight: 700;

    &:focus {
      outline: ${props => props.theme.colors.primary} solid 2px;
    }

    &.valueError {
      outline: ${props => props.theme.colors.error} solid 2px;
      
    }

    &::placeholder {
      text-align: right;
      color: ${props => props.theme.colors.textPlaceholder};
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 3px;
    }
  }

  img {
    position: absolute;
    left: 15px;
    top: 3px;
  }
`

export const TipBox = styled.div`
  margin-block: 25px 20px;

  p {
    color: ${props => props.theme.colors.textColor};
    font-weight: 700;
    margin-bottom: 10px;
  }

  div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 15px;
  }

  button {
    display: grid;
    place-items: center;
    background-color: ${props => props.theme.colors.secondary};
    font-weight: 700;
    font-size: 22px;
    color: ${props => props.theme.colors.textSecondary};
    height: 47px;
    border: none;
    border-radius: 5px;
    flex-basis: 30%;

    @media (max-width: 375px) {
      flex-basis: 47%;
    }

    &:hover {
      cursor: pointer;
      background-color: ${props => props.theme.colors.terciary};
      color: ${props => props.theme.colors.secondary};
    }
  }

  button.active {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
  }

  input {
    cursor: pointer;
    width: 80px;
    height: 47px;
    border: none;
    border-radius: 5px;
    color: ${props => props.theme.colors.textPrimary};
    text-align: right;
    padding: 13px;
    flex-basis: 30%;
    font-weight: 700;
    font-size: 22px;
    background-color: ${props => props.theme.colors.inputBackground};

    @media (max-width: 375px) {
    flex-basis: 47%;
  }

    &:focus {
      outline: ${props => props.theme.colors.primary} solid 2px;
    }

    &::placeholder {
      text-align: center;
      color: ${props => props.theme.colors.textPlaceholder};  
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    }
  }
  
`

export const SecondBox = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 9px;
  padding: 35px;
  width: 380px;

  @media (max-width: 375px) {
    width: 100%;
    margin-top: 25px;
  }

  @media (max-width: 850px){
    width: 100%;
    margin-top: 25px;
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;

    h3 {
      color: ${props => props.theme.colors.textSecondary};
      font-size: 17px;
      align-self: flex-end;
    }

    p {
      color: ${props => props.theme.colors.terciary};
      font-weight: 700;
      font-size: 13px;
    }

    span {
      color: ${props => props.theme.colors.primary};
      font-size: 42px;
      font-weight: 700;
      grid-column: 2;
      grid-row: 1 / 3;
      justify-self: end;
    }
  }

  button {
    background-color: ${props => props.theme.colors.primary};
    width: 100%;
    height: 50px;
    color: ${props => props.theme.colors.secondary};
    font-size: 20px;
    font-weight: 700;
    border: none;
    border-radius: 7px;
    margin-top: 120px;

    @media (max-width: 850px) {
    margin-top: 30px;
    }

    &:disabled,
    &:disabled:hover {
      opacity: 0.3;
      cursor: initial;
      background-color: ${props => props.theme.colors.primary};
    }

    &:hover {
      background-color: ${props => props.theme.colors.resetHover};
      cursor: pointer;
    }
  }
`