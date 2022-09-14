import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Pomodorotimer from './components/Pomodorotimer'
import Gitprofile from './components/Gitprofile'
import styled from "styled-components";
import Navbuttons from "./components/Navbuttons";
function App() {
  const [POMODORO, setPOMODORO] = useState(false)
  const [Gitprofiletoggle, setGitprofiletoggle] = useState(false)
  const [showbutton,setshowbutton] = useState(true);
  useEffect(()=>{

  },[POMODORO,Gitprofiletoggle])
  return (
    <>
      <div className="App">
         {showbutton?<Navbuttons setPOMODORO={setPOMODORO} setshowbutton={setshowbutton} setGitprofiletoggle={setGitprofiletoggle}/>:null} 
        {!showbutton?<Backbutton src="/images/back-button.svg" onClick={()=>{setshowbutton(true);setPOMODORO(false);setGitprofiletoggle(false)}}/>:null}
         {POMODORO?<Pomodorotimer/>:null}
         {Gitprofiletoggle?<Gitprofile/>:null}     
      </div>
    </>
  );
}

export default App;
const Backbutton = styled.img`
  position:absolute;
  top:10px;
  left:10px;
  width:5vw;
  max-width:50px;
  border-radius:50%;
  border:2px solid black;
`;
