import React from "react";

import styled from "styled-components";

import {Link } from "react-router-dom"
import { loginContext } from "../Helper/Context";
import { useContext } from "react";


const NavbarContainer = styled.div`
  display: flex;
		background-color: gray;
		cursor: pointer;
		
`;

const LeftNav = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
`;

const RightNav = styled.div`
  display: flex;
  flex: 1;
		flex-direction: row;
		justify-content: space-evenly;
`;

const Navbar = () => {

  const {LoggedIn,setLoggedIn }=useContext(loginContext)
  
  console.log(LoggedIn)

  return (
    <NavbarContainer>
      <LeftNav>
        <Link to="/">
          <h4>Posts</h4>
        </Link>
        <Link to="/create">
          <h4>Create a Post</h4>
        </Link>
      </LeftNav>
      <RightNav>
        {!LoggedIn.status ? (
          <RightNav>
            <Link to="/register">
              <h4>Register</h4>
            </Link>
            <Link to="/login">
              <h4>Login</h4>
            </Link>
          </RightNav>
        ) : (
          <RightNav>
            <Link to="profile">
              <h4>Profile</h4>
            </Link>

              <h4 onClick={() => {
                setLoggedIn({username:"",id:0,status:false})
            }}>Logout</h4>
          </RightNav>
        )}
      </RightNav>
    </NavbarContainer>
  );
};

export default Navbar;
