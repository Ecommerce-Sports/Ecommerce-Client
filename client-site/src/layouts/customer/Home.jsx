import React, { useEffect } from 'react';
import { Header } from "../../components/customer";
import { useNavigate } from 'react-router-dom';
import '../../style/customer/main.css';

const Home = () => {
  const navigate = useNavigate();

  useEffect(()=> {
    if(!localStorage.token) navigate("/login");
  }, [])
  
  return (
    <>
    <Header />
    </>
  )
}

export default Home