import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateProduct = () => {
    const product = useLoaderData();
    const {_id, photo, name, brand_name, type, description, rating, price } = product;


    const handleUpdateAddProduct = event =>{
        event.preventDefault();

        const form = event.target;

        const photo = form.photo.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const description= form.description.value;
        const rating = form.rating.value;

        const updateCarProduct = {
            photo, name, brand, type, description, rating
        }
        console.log(updateCarProduct);

        fetch(`https://automotive-assignment10-server.vercel.app/cart/${_id}`,{
          method:'PUT',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(updateCarProduct)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.modifiedCount > 0){
            Swal.fire({
              title: 'success',
              text: 'product Updated successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
        })
    }
    return (
        <div className=" bg-[#F4F3F0] w-[60%] mx-auto text-center text-3xl my-6 card-body rounded-xl">
        <h2>Add Product</h2>
        <form onSubmit={handleUpdateAddProduct}>
        <div className="  ">
          <div className="form-control ">
             <label className="label">
            <span className="label-text">Image</span>
              </label>
             <label className="input-group">
             <input type="text" name="photo" defaultValue={photo} placeholder=" Enter photo URL" className="input input-bordered w-full" />
            </label>
           </div>
        </div>

        <div className=" md:flex ">
          <div className="form-control w-1/2">
             <label className="label">
            <span className="label-text">Name</span>
              </label>
             <label className="input-group">
             <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered w-full" />
            </label>
           </div>
          <div className="form-control w-1/2 ml-6">
             <label className="label">
            <span className="label-text">Brand Name</span>
              </label>
             <label className="input-group">
             <input type="text" name="brand"defaultValue={brand_name} placeholder="Brand Name" className="input input-bordered w-full" />
            </label>
           </div>
        </div>

        <div className=" md:flex ">
          <div className="form-control w-1/2">
             <label className="label">
            <span className="label-text">Type</span>
              </label>
             <label className="input-group">
             <input type="text" name="type" defaultValue={type} placeholder="Type" className="input input-bordered w-full" />
            </label>
           </div>
          <div className="form-control w-1/2 ml-6">
             <label className="label">
            <span className="label-text">Price</span>
              </label>
             <label className="input-group">
             <input type="text"name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
            </label>
           </div>
        </div>

        <div className=" md:flex ">
          <div className="form-control w-1/2">
             <label className="label">
            <span className="label-text">Short description</span>
              </label>
             <label className="input-group">
             <input type="text" name="description" defaultValue={description} placeholder="Short description" className="input input-bordered w-full" />
            </label>
           </div>
          <div className="form-control w-1/2 ml-6">
             <label className="label">
            <span className="label-text">Rating</span>
              </label>
             <label className="input-group">
             <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
            </label>
           </div>
        </div>
        <input type="submit" value="Add Product" className="btn btn-block my-4 bg-blue-400" />
        </form>
    </div>
    );
};

export default UpdateProduct;