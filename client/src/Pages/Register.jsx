import React from 'react'
import styled from 'styled-components'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup";
import axios from "axios";



const Container = styled.div`

display: flex;
justify-content: center;
align-items: center;
	


`

const Box = styled.div`
margin-top: 20px;
width: 450px;
height:400px;
background-color: #45ed88;

display: flex;
flex-direction: column;
/* justify-content: space-evenly; */
`

const Header=styled.div`
	width: 100%;
	height: 80px;
	background-color: #5d3d5d;
	display: flex;
	justify-content: center;
	align-items: center;


`

const LableAndInput = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
height: 100px;;


`

const Label = styled.label`
font-size:30px;


`


const Input = styled.input`
width:400px;
height: 40px;

`

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
	


`

const Button = styled.button`
width: 200px;
height: 40px;
font-size: 24px;
background-color: blue;
color:white;

	




`

function Register() {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(20).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth", data).then(() => {
      console.log(data);
    });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="(Ex. John123...)"
          />

          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            autocomplete="off"
            type="password"
            id="inputCreatePost"
            name="password"
            placeholder="Your Password..."
          />

          <button type="submit"> Register</button>
        </Form>
      </Formik>
    </div>
  );
}
export default Register