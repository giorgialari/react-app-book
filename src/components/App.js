import Home from "./home/Home";
import MainTemplate from "./template/MainTemplate";
import Login from './login/Login'
import Booklist from './booklist/Booklist'

import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import '../css/style.css'


function App() {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/booklist" element={<Booklist/>}></Route>
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default App;
