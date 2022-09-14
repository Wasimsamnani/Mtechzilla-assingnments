import React from "react";
import styled from "styled-components";

function Navbuttons({ setPOMODORO, setshowbutton, setGitprofiletoggle }) {
  return (
    <ButtonsGroup>
      <button
        onClick={() => {
          setPOMODORO(true);
          setshowbutton(false);
          setGitprofiletoggle(false);
        }}
      >
        POMODORO APP
      </button>
      <button
        onClick={() => {
          setGitprofiletoggle(true);
          setshowbutton(false);
          setPOMODORO(false);
        }}
      >
        GITHUB PROFILE
      </button>
    </ButtonsGroup>
  );
}

export default Navbuttons;
const ButtonsGroup = styled.div`
  height: 100vh;
  max-width: 50vw;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: space-evenly;
  button {
    font-size: calc(1rem + 1vw);
    background: linear-gradient(45deg, pink, red, white, blue);
    transition:all 1s;
    &:hover {
      transform: scale(1.5);
      font-weight: 700;
      border: 1px solid;
      background: linear-gradient(21deg, pink, red, white, blue);
    }
  }
`;
