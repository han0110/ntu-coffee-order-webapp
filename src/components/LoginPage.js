import React from 'react';
import styled from 'styled-components';

import media from './style-utils';

const Wrapper = styled.div`
  height: calc( 100vh - 60px );
  padding: 20px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  background-color: #FFFFFF;
  font-size: 1.5em;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 1em;
`;

const Label = styled.label`
  width: 200px;
  color: #AAAAAA;
`;

const Input = styled.input`
  width: 200px;
  margin: 10px 0px;
  padding: 5px 0px;
  
  border: none;
  border-bottom: 1px solid #AAAAAA;
  outline: none;
  box-sizing: border-box;
  
  font-size: 1.2em;
  font-family: futura;
  
  &:focus {
    border-bottom: 1px solid #000000;
    transition-duration: 0.5s;
  }
`;

const Button = styled.button`
  margin: 15px 0px;
  padding: 5px 10px;

  background-color: rgba(224,224,224,1);
  border: none;
  border-radius: 5px;
  outline: none;

  font-size: 1.2em;
  font-family: futura;
`;

const LoginPage = () => (
  <Wrapper>
    <Form onSubmit={(e) => {e.preventDefault()}}>
      <Label className="username">Username</Label>
      <Input />
      <Label className="password">Password</Label>
      <Input type='password'/>
      <Button>Log In</Button>
    </Form>
  </Wrapper>
);

export default LoginPage;
