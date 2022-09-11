import styled from "styled-components";

export const Container = styled.main`
  width: fit-content;
  background-color: white;
  display: flex;
  border-radius: 20px;
  padding: 30px;
  margin: 80px auto;

  @media (max-width: 375px) {
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
`

export const InputBox = styled.div`
  position: relative;

  p {
    color: var(--dark-grayish-cyan);
    font-weight: 700;
  }

  .errorText {
    position: absolute;
    right: 0;
    top: 5px;
    color: red;
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
    background-color: var(--very-light-grayish-cyan);
    padding: 10px;
    margin-top: 5px;
    font-size: 20px;
    font-weight: 700;

    &:focus {
      outline: var(--strong-cyan-primary) solid 2px;
    }

    &.valueError {
      outline: red solid 2px;
      
    }

    &::placeholder {
      text-align: right;
      color: var(--grayish-cyan);
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

  @media (max-width: 375px) {
    
  }
`

export const TipBox = styled.div`
  margin-block: 25px 20px;

  p {
    color: var(--dark-grayish-cyan);
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
    background-color: var(--very-dark-cyan);
    font-weight: 700;
    font-size: 22px;
    color: white;
    height: 47px;
    border: none;
    border-radius: 5px;
    flex-basis: 30%;

    @media (max-width: 375px) {
    flex-basis: 47%;
    }

    &:hover {
      cursor: pointer;
      background-color: var(--grayish-cyan);
      color: var(--very-dark-cyan);
    }
  }

  button.active {
    background-color: var(--strong-cyan-primary);
    color: var(--very-dark-cyan);
  }

  input {
    cursor: pointer;
    width: 80px;
    height: 47px;
    border: none;
    border-radius: 5px;
    text-align: right;
    padding: 13px;
    flex-basis: 30%;
    font-weight: 700;
    font-size: 22px;
    background-color: var(--very-light-grayish-cyan);

    @media (max-width: 375px) {
    width: 150px;
  }

    &:focus {
      outline: var(--strong-cyan-primary) solid 2px;
    }

    &::placeholder {
      text-align: center;
      color: var(--dark-grayish-cyan);  
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    }
  }
  
`

export const SecondBox = styled.div`
  background-color: var(--very-dark-cyan);
  border-radius: 9px;
  padding: 35px;
  width: 380px;

  @media (max-width: 375px) {
    width: 100%;
    margin-top: 25px;
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;

    h3 {
      color: white;
      font-size: 17px;
      align-self: flex-end;
    }

    p {
      color: var(--grayish-cyan);
      font-weight: 700;
      font-size: 13px;
    }

    span {
      color: var(--strong-cyan-primary);
      font-size: 42px;
      font-weight: 700;
      grid-column: 2;
      grid-row: 1 / 3;
      justify-self: end;
    }
  }

  button {
    background-color: var(--strong-cyan-primary);
    width: 100%;
    height: 50px;
    color: var(--very-dark-cyan);
    font-size: 20px;
    font-weight: 700;
    border: none;
    border-radius: 7px;
    margin-top: 120px;

    @media (max-width: 375px) {
    margin-top: 30px;
  }

    &:disabled,
    &:disabled:hover {
      opacity: 0.3;
      cursor: initial;
      background-color: var(--strong-cyan-primary);
    }

    &:hover {
      background-color: var(--light-grayish-cyan);
      cursor: pointer;
    }
  }
`