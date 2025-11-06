import homem from "./Assets/images.png"
import Home from "./Views/Home";
import Carros from "./Views/Carros";

import CardComp from "./Components/CardComp";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  //  ADICIONE ESTA LINHA
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function App() {
    return (
        <BrowserRouter>
            {/* Navigation */}
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/Carros">Carros</Link> |{" "}
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Carros" element={<Carros />} />
            </Routes>
        </BrowserRouter>
    );

}
export default App

export function CarosselCompo() {
    return (
        <div id="carousel" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={homem} className="d-block w-10" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={homem} className="d-block w-1" alt="" />
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
