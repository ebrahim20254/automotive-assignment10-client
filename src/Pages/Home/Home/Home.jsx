import Footer from "../../Shared/Footer/Footer";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Choose from "../Choose/Choose";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <About></About>
          <Services></Services>
          <Choose></Choose>
          <Footer></Footer>
        </div>
    );
};

export default Home;