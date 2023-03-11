import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Crud from "./CRUD";
import Auth from "./Authentication";

function App() {
  return(
    <BrowserRouter>
      <Routes>
          <Route path='/crud' element={<Crud />} />
          <Route path='/auth' element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
