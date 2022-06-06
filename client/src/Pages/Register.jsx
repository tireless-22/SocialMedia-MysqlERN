import React from "react";
import styled from "styled-components";

import { loginContext } from "../Helper/Context";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../App.js";

import axios from "axios";
import { useState } from "react";

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

function Register() {
  const history = useNavigate();


  const initialValues = {
    username: "",
    password: "",
  };

  const submit = async(data) => {
    await axios.post("http://localhost:3001/users/register", data);
    history("/login");


    
  };
  const validate = Yup.object().shape({
    username: Yup.string().min(5).max(15).required(),
    password: Yup.string().min(5).max(15).required(),
  });



  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={submit}
        validationSchema={() => validate}
      >
        <Form>
          <Box>
            <Header>
              <h1>Registration</h1>
            </Header>

            <LableAndInput>
              <Label>username</Label>
              <ErrorMessage name="username" component="span" />
              <Field
                id="inputCreatePost"
                name="username"
             
                placeholder="title"
                autoComplete="off"
              />
            </LableAndInput>

            <LableAndInput>
              <Label>password</Label>
              <ErrorMessage name="password" component="span" />
              <Field
                id="inputCreatePost"
                name="password"
             
                placeholder="description"
                autoComplete="off"
              />
            </LableAndInput>

            <ButtonContainer>
              <Button type="submit">Register</Button>
            </ButtonContainer>
          </Box>
        </Form>
      </Formik>
    </Container>
  );
}

export default Register;
