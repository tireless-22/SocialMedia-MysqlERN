import React from "react";
import styled from "styled-components";


import { loginContext } from "../Helper/Context";
import { useContext } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  margin-top: 20px;
  width: 450px;
  height: 400px;
  background-color: #45ed88;

  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
`;

const Header = styled.div`
  width: 100%;
  height: 80px;
  background-color: #5d3d5d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LableAndInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100px; ;
`;

const Label = styled.label`
  font-size: 30px;
`;

const Input = styled.input`
  width: 400px;
  height: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
  font-size: 24px;
  background-color: blue;
  color: white;
`;








const Login = () => {


  const {LoggedIn,setLoggedIn}=useContext(loginContext)
  return (
    <Container>
      <Box>
        <Header>
          <h1>Login</h1>
        </Header>
        <LableAndInput>
          <Label>username</Label>
          <Input></Input>
        </LableAndInput>
        <LableAndInput>
          <Label>password</Label>
          <Input></Input>
        </LableAndInput>
        <ButtonContainer>
          <Button
            onClick={()=>setLoggedIn(true)}
          >Login</Button>
        </ButtonContainer>
      </Box>
    </Container>
  );
};

export default Login;
