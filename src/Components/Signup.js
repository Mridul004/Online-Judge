import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import { useState } from "react";
import React from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const getEmail=async()=>{
  //   const response=await Axios.post("http://localhost:5000/users/login");
  //   setEmail(response.data);
  // }
  // // const getPassword=async()=>{
  // //   const response=await Axios.get("http://localhost:5000/login");
  // //   setPassword(response.data);
  // // }
  
  // useEffect(()=>{getEmail()},[]);
  // // useEffect(()=>{getPassword()},[]);

  return (
    <div>
      <div
        style={{
          paddingTop: 100,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant={"h6"}>Welcome to GKOJ. Sign up below</Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card varint={"outlined"} style={{ width: 400, padding: 20 }}>
          <TextField
            helperText="Please enter your email"
            fullWidth={true}
            label="Email"
            variant="outlined"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            helperText="Please enter your password"
            fullWidth={true}
            label="Password"
            variant="outlined"
            type={"password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <Button size={"large"} variant="outlined" style={{margin: 10}}>
            LogIN
          </Button> 
          <Button size={"large"} variant="outlined">
            Signup
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
