import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import MainData from "./pages/mainHome";
import AddProduct from "./pages/add";


function App() {
  return (
    <BrowserRouter>
    <AddProduct />
    <MainData/>      
      {/* 
       */}
    </BrowserRouter>
  );
}

export default App;
