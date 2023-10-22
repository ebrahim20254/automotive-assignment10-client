import img from '../../../assets/green-theme-rent-a-car.jpg'


const Banner = () => {
    return (
      <div className='w-[90%]  mx-auto my-8'>
        <img src={img} alt="" className='w-full h-[600px] rounded-lg' />
      </div>
    );
};

export default Banner;