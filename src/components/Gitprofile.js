import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Gitprofile() {
  const [userProfile, setuserProfile] = useState({});
  const [inputvalue, setinputvalue] = useState("");
  useEffect(()=>{
  },[userProfile])
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  function clickHandeler(e){
    e.preventDefault();
     fetch(`https://api.github.com/users/${inputvalue}`).then((res)=>{
      return res.json()
    }).then((res)=>{
      setuserProfile(res)
    })
  }
  return (
    <Container>
      <Input>
        <h4>Enter Profile name to Search</h4>
        <input type="text" value={inputvalue} onChange={(e)=>setinputvalue(e.target.value)}/><br/><br/>
      <button onClick={clickHandeler}>SUBMIT</button>
      </Input>
      {userProfile?.login?<Card sx={{ maxWidth: 1000 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={userProfile?.avatar_url}
            alt="avatar-image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Github Profile
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>
                Username:<strong>{userProfile?.login}</strong>
              </p>
              <p>
                Name:<strong>{userProfile?.name}</strong>
              </p>
              <p>
                No. of public repos:<strong>{userProfile?.public_repos}</strong>
              </p>
              <p>
                No. of public gists:<strong>{userProfile?.public_repos}</strong>
              </p>
              <p>
                Profile created at:
                <strong>{formatDate(userProfile?.created_at)}</strong>
              </p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>:null}
    </Container>
  );
}

export default Gitprofile;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  h4 {
    color: black;
    font-weight: 500;
  }
  input {
    font-size: 1.4rem;
  }
`;

const Input = styled.div``;
