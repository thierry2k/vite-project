import homem from "./Assets/SQ55.avif"
import Home from "./Views/Home";
import Carros from "./Views/Carros";
import Nav from "./Components/Nav";

import CardComp from "./Components/CardComp";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function App() {
    return (
        <BrowserRouter>
            {/* Navigation */}
            <Nav/>

            {/* Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="" element={<Carros />} />
                
            </Routes>
        </BrowserRouter>
    );

}

export default App



