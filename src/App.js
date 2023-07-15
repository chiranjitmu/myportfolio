import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter,
  Route,
  Routes
}from 'react-router-dom'
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='/About' element={<About />}/>
            <Route path='/Resume' element={<Resume />}/>
            <Route path='/Contact' element={<Contact />}/>
          </Routes>
       </BrowserRouter>
       </div>
  );
}

export default App;
