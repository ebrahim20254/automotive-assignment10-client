import img from '../../../assets/car-rental.jpg'


const Banner = () => {
    return (
      <div className='w-[90%]  mx-auto my-8'>
        <img src={img} alt="" className='w-full  rounded-lg' />
      </div>
    );
};

export default Banner;