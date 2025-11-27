import carro from "../Assets/audi.webp";


export default function CardComp() {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={carro} className="card-img-top" alt="Carro" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    
                </p>
                <a href="#" className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>

    );
  
}
