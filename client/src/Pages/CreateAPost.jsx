import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../App.js"
import styled from "styled-components";

import { loginContext } from "../Helper/Context";
import { useContext } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  margin-top: 20px;
  width: 450px;
  height: 500px;
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



function CreateAPost() {

  const { LoggedIn, setLoggedIn } = useContext(loginContext);
  
  const initialValues = {
    title: "",
    description: "",
    summary: "",
    UserId: LoggedIn.id

  };

  const submit = async(dt) => {
    // console.log(dt);

    await axios.post("http://localhost:3001/posts", dt)
      .then(
        // console.log("hello")
    )
      .catch((e) => {
        // console.log(e);
      })
      ;




    // console.log("hello");
    // console.log(data);
  };
  const validate = Yup.object().shape({
    title: Yup.string().min(3).max(15).required(),
    description: Yup.string().min(15).max(150).required(),
    summary: Yup.string().min(3).max(15).required(),
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
              <h1>Create a Post</h1>
            </Header>

            <LableAndInput>
              <Label>title</Label>
              <ErrorMessage name="title" component="span" />
								<Field
									
                id="inputCreatePost"
                name="title"
                placeholder="title"
                autoComplete="off"
              />
            </LableAndInput>

            <LableAndInput>
              <Label>Description</Label>
              <ErrorMessage name="description" component="span" />
              <Field
                id="inputCreatePost"
                name="description"
                placeholder="description"
                autoComplete="off"
              />
            </LableAndInput>

            <LableAndInput>
              <Label>summary</Label>
              <ErrorMessage name="summary" component="span" />
              <Field
                id="inputCreatePost"
                name="summary"
                placeholder="summary"
                autoComplete="off"
              />
            </LableAndInput>

            <ButtonContainer>
              <Button type="submit">Login</Button>
            </ButtonContainer>
          </Box>
        </Form>
      </Formik>
    </Container>
  );
}

export default CreateAPost;
