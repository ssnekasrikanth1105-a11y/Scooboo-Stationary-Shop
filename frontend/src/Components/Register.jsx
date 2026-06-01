import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const gradientMove = keyframes`
  0%{
    background-position: 0% 50%;
  }
  50%{
    background-position: 100% 50%;
  }
  100%{
    background-position: 0% 50%;
  }
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

const fadeUp = keyframes`
  from{
    opacity: 0;
    transform: translateY(40px);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #0f172a, #1e1b4b, #312e81, #0f766e);
  background-size: 400% 400%;
  animation: ${gradientMove} 10s ease infinite;
  overflow: hidden;
  position: relative;
`;

const Ring = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border: 2px solid rgba(255,255,255,0.1);
  border-radius: 50%;
  animation: ${rotate} 20s linear infinite;
`;

const Ring2 = styled(Ring)`
  width: 350px;
  height: 350px;
  animation-direction: reverse;
  animation-duration: 15s;
`;

const RegisterCard = styled.div`
  width: 400px;
  padding: 45px;
  border-radius: 30px;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 15px 40px rgba(0,0,0,0.4);
  text-align: center;
  color: white;
  z-index: 1;
  animation: ${fadeUp} 1s ease;
`;

const Logo = styled.div`
  width: 85px;
  height: 85px;
  margin: auto;
  margin-bottom: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #06b6d4, #8b5cf6);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  font-weight: bold;
  box-shadow: 0 0 30px rgba(139,92,246,0.6);
`;

const Title = styled.h1`
  font-size: 34px;
  margin-bottom: 8px;
`;

const Text = styled.p`
  color: #d1d5db;
  margin-bottom: 30px;
`;

const InputBox = styled.div`
  margin-bottom: 22px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border-radius: 14px;
  border: none;
  outline: none;
  background: rgba(255,255,255,0.12);
  color: white;
  font-size: 15px;
  transition: 0.3s;

  &::placeholder{
    color: #cbd5e1;
  }

  &:focus{
    background: rgba(255,255,255,0.18);
    transform: scale(1.02);
    box-shadow: 0 0 15px rgba(6,182,212,0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #06b6d4, #8b5cf6);
  color: white;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.4s;

  &:hover{
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(139,92,246,0.6);
  }
`;

const Bottom = styled.p`
  margin-top: 22px;
  color: #d1d5db;
  font-size: 14px;

  span{
    color: #d3d60ad3;
    font-weight: bold;
    cursor: pointer;
  }
`;

function Register() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();


  const handleRegister = async () => {

    try {

      const res = await axios.post(

        "http://localhost:3000/api/user/createuser",

        {
          name,
          email,
          password
        },

        {
          withCredentials: true
        }
      )

      alert(res.data.msg)

      console.log(res.data)
      navigate("/login");

    } catch (error) {

      console.log(error)

      if (error.response) {

        alert(error.response.data.msg)

      } else {

        alert("Backend Server Error")
      }
    }
  }



  return (
    <Container>

      <Ring />
      <Ring2 />

      <RegisterCard>

        <Logo>📚</Logo>

        <Title>Create Account</Title>

        <Text>
          Join your premium stationery world ✨
        </Text>

        <InputBox>

          <Input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

        </InputBox>

        <InputBox>

          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </InputBox>

        <InputBox>

          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

        </InputBox>

        <Button onClick={handleRegister}>
          Create Account
        </Button>

        <Bottom>
          Already have an account? 
          <span><Link to="/login">Login</Link></span>
        </Bottom>

      </RegisterCard>

    </Container>
  );
}

export default Register;