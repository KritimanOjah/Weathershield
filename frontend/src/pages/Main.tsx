import React from 'react';
import Navbar from '../components/Navbar';
import Box from '../components/Box';

const Main: React.FC = () => {
  return (
    <div className="w-full max-h-screen overflow-auto"> 
      <Navbar />
      
      <Box />
    </div>
  );
};

export default Main;
