import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ContactPage from './pages/ContactPage';

import "./App.css";
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
 

  return (
    <div className="App">
     

      <Router>
        <Routes>
          <Route path="/" element={<Main/>} />
        <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
