import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';


function App() {

const [loading,setLoading]=useState(false);
useEffect(() => {
  setTimeout(() => {
      setLoading(true);
    }, 2000);
}, []); 

  return (
    <Router>
      {!loading ?(<></>):(
        <div className="App">
        <div className='a-app-content'>
          <SideBar />
          <Routes>
          </Routes>
        </div>
      </div>
      )
      }
    </Router>
  );
}

export default App;
