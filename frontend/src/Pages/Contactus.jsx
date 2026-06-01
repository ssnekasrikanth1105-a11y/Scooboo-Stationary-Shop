import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {

    if (!name || !email || !message) {
      alert("Please Fill All Fields");
      return;
    }

    try {

      const res = await axios.post(

        "http://localhost:3000/api/contact/send",

        {
          name,
          email,
          message
        }

      );

      alert(res.data.msg);

      setName("");
      setEmail("");
      setMessage("");

    } catch (error) {

      console.log(error);

      if (error.response) {

        alert(error.response.data.msg);

      } else {

        alert("Server Error");
      }
    }
  };

  return (
    <Container>

      <Card>

        <Title>📞 Contact Us</Title>

        <Input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextArea
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button onClick={handleSubmit}>
          Send Message
        </Button>

      </Card>

    </Container>
  );
};

export default Contact;

/* ================= STYLES ================= */

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg,#0f172a,#1e293b);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const Card = styled.div`
  width: 450px;
  background: #111827;
  padding: 40px;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);

  @media(max-width: 500px){
    width: 100%;
  }
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 30px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 12px;
  border: none;
  outline: none;
  background: #1f2937;
  color: white;
  box-sizing: border-box;

  &::placeholder{
    color: #9ca3af;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 140px;
  padding: 15px;
  border-radius: 12px;
  border: none;
  outline: none;
  resize: none;
  background: #1f2937;
  color: white;
  box-sizing: border-box;

  &::placeholder{
    color: #9ca3af;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 12px;
  margin-top: 20px;
  background: linear-gradient(
    90deg,
    #06b6d4,
    #8b5cf6
  );
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: .3s;

  &:hover{
    transform: translateY(-3px);
  }
`;