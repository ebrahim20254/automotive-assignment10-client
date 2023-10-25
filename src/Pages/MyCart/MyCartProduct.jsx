import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCartProduct = ({ product, carts, setCarts }) => {
    const { _id, photo, name, brand_name, type, description, rating, price } = product;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/cart/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                              Swal.fire(
                                'Deleted!',
                                'Your Car has been deleted.',
                                'success'
                              )
                              const remaining = carts.filter( car => car._id !== _id)
                              setCarts(remaining);
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie" className="w-[500px] h-[200px]" /></figure>
                <div className=" flex justify-between w-full pr-4">
                    <div className="ml-4">
                        <h2 className="card-title">{name}</h2>
                        <p>{brand_name}</p>
                        <p>Price: {price}</p>
                        <p>Rating: {rating}</p>
                        <p>{description}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-4">
                            <button className="btn">view</button>
                            <Link to={`/update/${_id}`}><button className="btn">Update</button></Link>
                            <button onClick={() => handleDelete(_id)} className="btn bg-orange-500">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCartProduct;