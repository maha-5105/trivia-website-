import React from 'react';  
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';     
import Login from './pages/Login';  
import Trivia from './pages/Trivia';    

function App() 
{          
  return (   
    <Router>           
      <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600">    
        <Routes>  
          <Route path="/login" element={<Login />} />        
          <Route path="/trivia" element={<Trivia />} />  
          <Route path="/" element={<Navigate to="/login" replace />} />       
        </Routes>  
      </div>  
    </Router>  
  );  
}  

export default App;   