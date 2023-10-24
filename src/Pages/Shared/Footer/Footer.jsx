 import img from '../../../assets/logo.jpg'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-gray-200 text-base-content w-[90%] mx-auto my-12">
        <aside>
         <img  src={img} className=" w-[100px] h-[100px]  " alt="" />
          <p>Car House.<br/>Providing reliable tech since 2002</p>
        </aside> 
        <nav>
          <header className="footer-title">Services</header> 
          <a className="link link-hover">Toyota</a> 
          <a className="link link-hover">BMW</a> 
          <a className="link link-hover">Honda</a> 
          <a className="link link-hover">Mercedes-Benz</a>
          <a className="link link-hover">Ford</a>
        </nav> 
        <nav>
          <header className="footer-title">Company</header> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <header className="footer-title">Legal</header> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Car House Services</a>
        </nav>
      </footer>
    );
};

export default Footer;