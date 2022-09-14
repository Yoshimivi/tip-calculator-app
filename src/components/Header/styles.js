import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  width: fit-content;
  margin: 0 auto;

  @media (max-width: 850px){
    margin: 50px auto;
  }

  img.dark {
    filter: brightness(2);
  }

  .clickMeImg {
    width: 50px;
    position: absolute;
    top: 10px;
    right: -70px;
  }
`