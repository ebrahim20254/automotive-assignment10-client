import { Link } from "react-router-dom";


const DetailCart = ({ cart }) => {
    const {_id, name, photo, brand_name, description, price, rating } = cart;
    return (
        <div className="my-12"> 
            <div className="card w-96 bg-base-300 shadow-xl ">
                <figure className="">
                    <img src={photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center space-y-2">
                    <h2 className="card-title">{name}</h2>
                    <h3>{brand_name}</h3>
                    <p>Price: {price}</p>
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    </div>
                    <p>{description}</p>
                    <div className=" text-center">
                        <Link to={`/detailBtn/${_id}`}><button className="btn btn-primary w-full px-12">Details button</button></Link>
                        <Link to={`/addCart/${_id}`}><button className="btn btn-secondary  w-full px-12 mt-4">Update button</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailCart;