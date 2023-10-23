import img1 from '../../assets/auto2.pg.jpg'
import img2 from '../../assets/car.jpg'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Slider = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <div className="carousel h-[700px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full " />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className=' space-y-4'>
                            <h2 className='text-3xl text-yellow-300 ml-6 font-bold w-[50%] '>Automotive design blends art and engineering seamlessly.</h2>
                            <p className=' text-white w-[40%] ml-6 text-sm'>Leading automotive brands like Toyota, Ford, and BMW continuously innovate, offering a wide range of vehicles to meet global demand.</p>
                            <div className='ml-4'>
                                <button class="btn btn-warning px-6">Discover More</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide" className="btn btn-secondary rounded-full mr-5">❮</a>
                        <a href="#slide2" className="btn btn-secondary rounded-full">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#1515158f] to-[rgba(21, 21, 21, 0)]">
                        <div className=' space-y-2'>
                            <h2 className='text-2xl text-yellow-400 font-bold w-[50%]'>Automotive design blends art and engineering seamlessly.</h2>
                            <p className=' text-sm text-white w-[60%]'>Leading automotive brands like Toyota, Ford, and BMW continuously innovate, offering a wide range of vehicles to meet global demand.</p>
                            <div className='space-y-6'>
                                <button className=' text-2xl text-white mr-4 text-center'><FaFacebook></FaFacebook></button>
                                <button className=' text-2xl text-white mr-4'><FaTwitter></FaTwitter></button>
                                <button className=' text-2xl text-white mr-4'><FaInstagram></FaInstagram></button>
                                <button class="btn btn-primary px-6">Latest More</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-secondary rounded-full mr-5">❮</a>
                        <a href="#slide1" className="btn btn-secondary rounded-full">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;