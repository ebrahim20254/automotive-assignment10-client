
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://automotive-assignment10-server.vercel.app/services')
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="w-[80%] mx-auto">
                <h2 className=' text-4xl text-center my-4 text-orange-500 font-bold'>Our Trusted Brands</h2>
            <p className=' text-xl text-center  w-[50%] mx-auto'>The automotive industry is constantly evolving with innovations in electric and autonomous vehicles.</p>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {
                    services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;