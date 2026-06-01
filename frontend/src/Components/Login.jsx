import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


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

const glow = keyframes`
  0%{
    box-shadow: 0 0 20px rgba(139,92,246,0.4);
  }

  50%{
    box-shadow: 0 0 40px rgba(6,182,212,0.7);
  }

  100%{
    box-shadow: 0 0 20px rgba(139,92,246,0.4);
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    -45deg,
    #0f172a,
    #1e1b4b,
    #312e81,
    #0f766e
  );

  background-size: 400% 400%;
  animation: ${gradientMove} 10s ease infinite;

  overflow: hidden;
  position: relative;
  padding: 20px;
`;

const Ring = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border: 2px solid rgba(255,255,255,0.08);
  border-radius: 50%;
  animation: ${rotate} 20s linear infinite;
`;

const Ring2 = styled(Ring)`
  width: 350px;
  height: 350px;
  animation-direction: reverse;
  animation-duration: 15s;
`;

const Blur = styled.div`
  position: absolute;

  width: 300px;
  height: 300px;

  background: #8b5cf6;
  filter: blur(140px);

  opacity: 0.3;

  top: -100px;
  right: -80px;
`;

const LoginCard = styled.div`
  width: 100%;
  max-width: 420px;

  padding: 45px;
  border-radius: 35px;

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
  width: 90px;
  height: 90px;

  margin: auto;
  margin-bottom: 20px;

  border-radius: 50%;

  background: linear-gradient(135deg,#06b6d4,#8b5cf6);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 38px;

  animation: ${glow} 3s infinite;
`;

const Title = styled.h1`
  font-size: 38px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  color: #d1d5db;
  margin-bottom: 35px;
  line-height: 1.6;
`;

const InputBox = styled.div`
  margin-bottom: 22px;
`;

const Input = styled.input`
  width: 100%;

  padding: 16px;

  border-radius: 16px;
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

  padding: 16px;

  border: none;
  border-radius: 16px;

  background: linear-gradient(135deg,#06b6d4,#8b5cf6);

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

const Forgot = styled.p`
  margin-top: 18px;
  color: #cbd5e1;
  cursor: pointer;
  transition: 0.3s;

  &:hover{
    color: white;
  }
`;

const Bottom = styled.p`
  margin-top: 25px;

  color: #d1d5db;

  font-size: 15px;

  span{
    color: #eeda22c7;
    font-weight: bold;
  }
`;

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {

      const res = await axios.post(

        "http://localhost:3000/api/user/login",

        {
          email,
          password
        },

        {
          withCredentials: true
        }
      );

      alert(res.data.msg);

      navigate("/");

    } catch (error) {

      console.log(error);

      if (error.response) {

        alert(error.response.data.msg);

      } else {

        alert("Backend Server Not Running");
      }
    }
  };

  return (

    <Container>

      <Blur />

      <Ring />
      <Ring2 />

      <LoginCard>

        <Logo>✏️</Logo>

        <Title>Stationery Login</Title>

        <Text>
          Access your premium stationery collection
          and continue your creative journey ✨
        </Text>

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

        <Button onClick={handleLogin}>
          Sign In
        </Button>

        <Forgot>
          Forgot Password?
        </Forgot>

        <Bottom>

          New user?{" "}

          <Link
            to="/register"
            style={{
              color: "#22d3ee",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Create Account
          </Link>

        </Bottom>

      </LoginCard>

    </Container>
  );
}

export default Login;