import { useLoaderData } from "react-router-dom";
import DetailData from "./DetailData";


const DetailButton = () => {
    const details = useLoaderData()
    console.log(details);
    return (
        <div className=" my-8">
            <h2 className=" text-center text-4xl text-orange-600 font-bold">Details Button Page</h2>
            <div className=" grid md:grid-cols-1 lg:grid-cols-2 my-8">
                {
                    details?.map(detail => <DetailData key={detail._id} detail={detail}></DetailData>)
                }
            </div>
        </div>
    );
};

export default DetailButton;