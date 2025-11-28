import homem from "../Assets/SQ55.avif"


export default function Carroseel() {
    return (
     <div 
     id="carousel" className="carousel slide">
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
            
    )
}

