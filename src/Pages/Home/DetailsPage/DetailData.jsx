import { Link } from "react-router-dom";


const DetailData = ({ detail }) => {
    const { photo, price, rating, name } = detail;
    return (
        <div className="W-[90%] mx-auto my-4">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} className="w-[300px]" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <Link to="/"><button className="btn btn-primary">Add To CART</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailData;