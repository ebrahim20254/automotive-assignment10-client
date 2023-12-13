
import Slider from '../../Slider/Slider';
import { useLoaderData } from 'react-router-dom';
import DetailCart from './DetailCart';

const DetailsPage = () => {
  const carts = useLoaderData();
  // console.log(carts);
    return (
      <div className='w-[90%] mx-auto'>
        <Slider></Slider>

        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {
            carts?.map(cart => <DetailCart key={cart.id} cart={cart}></DetailCart>)
          }
        </div>
      </div>
    );
};

export default DetailsPage;