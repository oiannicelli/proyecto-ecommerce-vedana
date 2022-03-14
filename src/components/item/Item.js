import { Link } from "react-router-dom";

const Item = ({ id, name, price, image }) => {

    return (
        <>
            <div className="card">
                <img src={image} alt={name} />
                <div className="card-body">
                    <div className="card-body-layout">
                        <h3>{name}</h3>
                        <p>$ {price}</p>
                        <Link to={`/item/${id}`}><button>+</button></Link>
                    </div>
                </div>    
            </div>
        </>
    );
};

export default Item;