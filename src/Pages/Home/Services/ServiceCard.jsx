import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    const {service_id,image, brand_name} = service;
    return (
         <Link to={`/details/${service_id}`}>
          <div className="card w-96 bg-base-300 shadow-xl">
            <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl">{brand_name}</h2>
          </div>
      </div>
         </Link>
    );
};

export default ServiceCard;