import React from 'react';
import { useContext } from "react";
import Context from '../store/store';


const Home = () => {
  const { username, password, birthDay } = useContext(Context);

  return (
    <div className='home'>        
    <h1>Hi {username}</h1>
      <div className='container'>
        <p>Password: {password}</p>
        <p>Birthday: {birthDay}</p>
      </div>
    </div>

  );
}

export default Home;