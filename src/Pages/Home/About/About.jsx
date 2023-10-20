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
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p>We are a leading card driver software company, specializing in developing cutting-edge drivers for various card reader devices. With a strong commitment to innovation and security, we empower businesses and individuals to seamlessly interact with smart cards, ensuring reliability and data protection.</p>
      <p>Car engineers design, develop, and improve automobiles. They integrate advanced technologies, enhance safety, and optimize performance. These professionals are vital to the automotive industry, shaping the vehicles we drive today and in the future.</p>
      <button className="btn btn-warning ml-8">Get More Info</button>
      </div>
     </div>
    </div>
    </div>
    );
};

export default About;