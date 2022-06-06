import React from "react";

import styled from "styled-components";

import { useState, useEffect } from "react";
import axios from "axios";
import Post from "../Components/Post";

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PostContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  border: 2px solid black;
  height: 400px;
  width: 800px;

 
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: green;
`;

const PostBodyContainer = styled.div`
  display: flex;
  flex-direction: row;
		height: 100%;
`;
const PostLeft = styled.div`
  display: flex;
  flex: 1;
		flex-direction: column;
		background-color: aquamarine;
		
`;





const PostBody=styled.div`
	display: flex;
`


const PostRight = styled.div`
  display: flex;
  flex: 1;
		height: 100%;
		background-color: lightblue;
`;
const CommmentSection = styled.div`
width: 100%;
  display: flex;
  /* background-color: lightpink; */
`;

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fn = async () => {
      await axios.get("http://localhost:3001/posts").then((dt) => {
        setPosts(dt.data);
      });
    };
    fn();
  }, []);

  // console.log(posts);

  return (
    <PostsContainer>
      {posts.map((post) => (
        <PostContainer>
          <PostHeader>
            <h3>{post.title}</h3>
										</PostHeader>
								
          <PostBodyContainer>
            <PostLeft>
              <PostBody>
                <h5>{post.description}</h5>
              </PostBody>
            </PostLeft>

            <PostRight>
              <CommmentSection>
                  <h3>Comments</h3>             
              </CommmentSection>
            </PostRight>
          </PostBodyContainer>
        </PostContainer>
      ))}
    </PostsContainer>
  );
};

export default Posts;
