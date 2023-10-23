

const DetailCart = ({ cart }) => {
    const {name, photo, brand_name, description} = cart;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center space-y-2">
                    <h2 className="card-title">{name}</h2>
                    <h3>{brand_name}</h3>
                    <p>{description}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary w-full px-12">Details button</button>
                        <button className="btn btn-secondary w-full px-12 my-4">Update button</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailCart;