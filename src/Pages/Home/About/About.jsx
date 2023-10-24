import img1 from '../../../assets/tesla.jpg'
import img2 from '../../../assets/car-repair.jpg'


const About = () => {
  return (
    <div className="my-12 w-[90%] mx-auto">
      <h2 className=' text-4xl text-center my-4 text-orange-500 font-bold'>About Us</h2>
      <p className=' text-xl text-center  w-[50%] mx-auto'>We are passionate about cars, dedicated to excellence. Your journey is our priority. Discover the road with us today.</p>
      <div className="hero bg-base-200 h-[600px] my-4">
        <div className="hero-content flex-col lg:flex-row">
          <div className=' lg:w-1/2 relative'>
            <img src={img1} className="w-3/4 rounded-lg shadow-2xl" />
            <img src={img2} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-6 border-white shadow-2xl" />
          </div>
          <div className=' lg:w-1/2 space-y-6'>
            <h1 className="text-6xl font-bold">Best way to find your <span className=' text-orange-600'>dream</span> car</h1>
            <p>My dream car is a sleek and powerful Tesla Model S, known for its cutting-edge electric technology and impressive acceleration. Its elegant design and eco-friendly features make it the perfect combination of style and sustainability. Driving it would be a thrilling and responsible experience.</p>
            <p>Car engineers design, develop, and improve automobiles. They integrate advanced technologies, enhance safety, and optimize performance. These professionals are vital to the automotive industry, shaping the vehicles we drive today and in the future.</p>
            <button className="btn btn-warning ml-8">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;