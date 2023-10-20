import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res=> res.json())
        .then(data => setServices(data))
        console.log(data);
    },[])
    return (
        <div className="w-[80%] mx-auto">
            <h2>services</h2>
            <h3>Our services :  {services.length}</h3>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;