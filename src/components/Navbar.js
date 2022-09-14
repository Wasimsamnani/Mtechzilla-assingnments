import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { auth, Provider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Navbar() {
  const [user, setuser] = useState(null);
  useEffect(() => {
  }, [user])
  
  function onSigninbtnClick(e) {
    signInWithPopup(auth, Provider)
      .then((result) => {
        setuser(result);
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <Container>
      <Logo src="/images/Logo.svg" />
      <ButtonGroup>
        {user ? (
          <Avatar src={user?.user?.photoURL} onClick={(e) => setuser(null)} />
        ) : (
          <LoginButton onClick={onSigninbtnClick}>SIGN IN</LoginButton>
        )}
      </ButtonGroup>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  width: 90vw;
  height: 20vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid black;
`;
const Logo = styled.img``;
const ButtonGroup = styled.div``;
const LoginButton = styled.button`
  font-size:calc(1rem + 1vw);
  color: white;
  background: linear-gradient(21deg, black, blue, white);
  :hover {
    transform: scale(1.5);
    background-color: pink;
    font-weight: 700;
    border: 1px solid;
  }
`;
const Avatar = styled.img`
  border-radius: 50%;
  width: 5vw;
  min-width: 40px;
  cursor: pointer;
`;

const SignOutBtn = styled.button`
  display: ${(props) => (props.show ? "block" : "none")};
`;
