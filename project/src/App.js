import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Home from './Header/Home';
import Main from './Header/Main';
import Contacts from './Header/Contacts';
import ContactID from './Header/ContactID';
import Mobiles from './Header/Mobiles';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Mobiles/> */}
      <Router>
        <Routes>
          <Route exact path="/"  element={<Home/>}></Route>
          <Route path="/mainTEST"  element={<Main/>}></Route>
          <Route exact path="/contacts"  element={<Contacts/> }></Route>
          <Route path="/contacts/mobile"  element={<Mobiles/>}></Route>
          <Route path="/wife/mobile wife"  element={<ContactID/>}></Route>
          <Route path="/contacts/:userPhone"  element={<ContactID/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
