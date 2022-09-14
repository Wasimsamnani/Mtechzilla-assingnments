import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function Timer() {
  const [minutes, setminutes] = useState(0);
  const [pause, setpause] = useState(true);
  const pauseref = useRef(pause);
  const minutesref = useRef(minutes);
  const [Break, setBreak] = useState(false);
  function initialTimer() {
    if (Break) {
      minutesref.current = 5 * 60;
      setminutes(minutesref.current);
    } else {
      minutesref.current = 25 * 60;
      setminutes(minutesref.current);
    }
  }
  useEffect(() => {
    initialTimer();
    const interval = setInterval(() => {
      // console.log(minutesref.current);
      if (!minutesref.current) {
        setBreak(!Break);
        clearInterval(interval);
      }
      if (pauseref.current) {
        return;
      }
      setminutes((minutes) => minutes - 1);
      minutesref.current -= 1;
    }, 1000);
    return () => clearInterval(interval);
  }, [Break]);
  let seconds = minutes % 60;
  if (seconds < 10) seconds = "0" + seconds;
  return (
    <Container>
      <CardBoard>
        <CardTitle>
          <h4>{Break ? "Break" : "Pomodoro"}</h4>
        </CardTitle>
        <TimerRange>
          {Math.floor(minutes / 60)}:{seconds}
        </TimerRange>
        <ButtonGroup>
          {pause ? (
            <img
              src="/images/play-button.svg"
              onClick={() => {
                setpause(false);
                pauseref.current = false;
              }}
            />
          ) : (
            <img
              src="/images/pause-button.svg"
              onClick={() => {
                setpause(true);
                pauseref.current = true;
              }}
            />
          )}
          <img
            src="/images/reset-button.svg"
            onClick={() => {
              setBreak(false);
              initialTimer();
              setpause(true);
              pauseref.current = true;
            }}
          />
        </ButtonGroup>
      </CardBoard>
    </Container>
  );
}

export default Timer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: max(10vw, 20px);
`;

const CardBoard = styled.div`
  width: 60vw;
  margin: auto;
  background: linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  border-radius: 1rem;
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;

const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  h4 {
    padding: 5px;
    border-radius: 10px;
    font-size: calc(10px + 1.5vw);
    cursor: pointer;
    transition: background 1s ease-out;
    &:hover {
      background: linear-gradient(45deg, black, transparent);
    }
  }
`;

const TimerRange = styled.h1`
  font-size: calc(2rem + 8vw);
  margin: 0;
  padding: 0;
`;
const StartButton = styled.button`
  color: white;
  width: 30%;
  margin: 2vw auto;
  font-size: calc(10px + 3vw);
  :hover {
    transform: none;
  }
  background: linear-gradient(21deg, #000101, #673ab7, white);
`;

const ButtonGroup = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  margin: 5% auto;
  cursor: pointer;
  img {
    width: 10%;
    transition: all 250ms ease-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
