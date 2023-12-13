import img from '../../../assets/car - Copy.jpg'


const Banner = () => {
    return (
      <div className='w-[80%]  mx-auto my-8'>
        <img data-aos="flip-up" src={img} alt="" className='w-full  rounded-lg' />
      </div>
    );
};

export default Banner;