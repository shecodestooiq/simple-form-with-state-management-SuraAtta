import './App.css';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {UserProvider} from './store/store';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserProvider><LoginForm /></UserProvider>}></Route>
        <Route path="/Home" element={<UserProvider><Home /></UserProvider>}></Route>
      </Routes>     
      </BrowserRouter>
    </div>
  );
}

export default App;
