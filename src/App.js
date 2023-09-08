import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom';
import Home from './components/Home';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#0b285e';
      showAlert("Dark mode has been enabled","success");
      // setInterval(() => {
      //   document.title = "affected virus";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "install software";
      // }, 1500);
      document.title = 'Learning - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title = 'Learning - Light Mode';
    }
  }
  return (
    <>
    <Router>    
      <Navbar title="Learning" mode={mode} toggleMode={togglemode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>          
          <Route exact path='/textform' element={<TextForm title="Enter the text" showAlert={showAlert}  mode={mode}/>}></Route>            
        </Routes>          
      </div>
      </Router>
    </>
  );
}

export default App;