import img1 from '../../../assets/tesla.jpg'
import img2 from '../../../assets/car-repair.jpg'


const About = () => {
    return (
        <div className="my-12 w-[90%] mx-auto">
            <h2 className=' text-4xl text-center my-4 text-orange-500 font-bold'>About Us</h2>
            <p className=' text-xl text-center  w-[50%] mx-auto'>We are passionate about cars, dedicated to excellence. Your journey is our priority. Discover the road with us today.</p>
            <div className="hero bg-base-200 h-[500px] my-4">
  <div className="hero-content flex-col lg:flex-row">
    <div className=' lg:w-1/2 relative'>
      <img src={img1} className="w-3/4 rounded-lg shadow-2xl" />
      <img src={img2} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-6 border-white shadow-2xl" />
    </div>
    <div className=' lg:w-1/2'>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;