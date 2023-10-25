import { useLoaderData } from "react-router-dom";
import MyCartProduct from "./MyCartProduct";


const MyCart = () => {
    const products = useLoaderData();
    const [ carts, setCarts] =  products;
    // console.log(products);

    return (
        <div className=" m-20">
            <h2 className=" text-center text-3xl">my cart product a car</h2>
           <div className=" grid md:grid-cols-2 gap-4 my-6">
            {
                products.map(product =>
                     <MyCartProduct
                      key={product._id}
                      product={product}
                      carts={carts}
                      setCarts={setCarts}
                      >
                      </MyCartProduct>)
             }
           </div>
        </div>
    );
};

export default MyCart;