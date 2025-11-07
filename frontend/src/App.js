import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './screens/LandingPage/LandingPage.js'
import MyNotes from './screens/MyNotes/MyNotes.js';
import {BrowserRouter , Route , Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage/>} exact/> 
          <Route path="/mynotes" element={<MyNotes/>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
