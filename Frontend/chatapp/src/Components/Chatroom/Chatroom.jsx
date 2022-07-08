import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  background-color: #717192;
  margin: auto;
  height: 70vh;
  padding: 4%;
  border-radius:35px;
 margin-top:10px;
`;

const Chatme = styled.div`
  font-size: 3vw;
  float: left;
  clear: right;
  background-color:wheat ;
  padding:2vh;
  border-radius:15px;
  max-width:40%;
  word-wrap:break-word;
  @media only screen and (min-width: 800px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;
const Chatthem = styled.div`
  font-size: 3vw;
  float: right;
  clear: left;
  background-color:wheat ;
  padding:2vh;
  border-radius:15px;
  max-width:40%;
  word-wrap:break-word;
  @media only screen and (min-width: 800px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

const Inputdiv=styled.div`
    
width:75%;
height:7vh;
background-color:black;
margin:auto;
border-radius:15px;
padding:0px  2% 0px 2%;
display:flex;
justify-content:center;
align-items:center;


`




const Span = styled.span`
  font-size: 2.5vw;
  font-weight: bold;
  @media only screen and (min-width: 800px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

export default function Chatroom() {
  return (
    <>
      <Container>
        <Chatme>ME:helloaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Chatme>
        <Chatthem>
          <Span>UserL:</Span> loop
        </Chatthem> 
        
      </Container>
      <Inputdiv>

      <input type="text"  style={{width:"90%",height:"80%",borderRadius:"5px",fontSize:"1em",paddingLeft:"20px"}} />
      <button style={{height:"90%",borderRadius:"6px",width:"10%"}}>
            Send
        </button>
        </Inputdiv>
      
    </>
  );
}
