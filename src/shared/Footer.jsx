import logo from "/logo.png"
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className=" bg-white border-t border-b border-primary text-dark">
            <div className='container max-w-5xl mx-auto py-10 md:flex justify-between gap-5 z-50'>
                <div className='mb-10 md:mb-0 w-fit'>
                  <img className="w-40" src={logo} alt="" />
                  <div className="flex justify-center gap-3 items-center mt-5">
                    <a href="https://www.facebook.com/SAC122018/" target="_blank" className="flex justify-center items-center rounded-full border border-primary w-8 h-8 text-primary hover:bg-primary/80 hover:text-white duration-300 cursor-pointer">
                      <FaFacebookF />
                    </a>
                    <a href="https://www.youtube.com/@shopnojoyee1737" target="_blank" className="flex justify-center items-center rounded-full border border-primary w-8 h-8 text-primary hover:bg-primary/80 hover:text-white duration-300 cursor-pointer">
                      <FaYoutube />
                    </a>
                  </div>
                </div> 

                <div className='flex flex-col mb-10 md:mb-0 w-fit'>
                  <header className='text-xl text-primary mb-1'>Quick Links</header> 
                  <p className='border rounded border-primary mb-2 w-16'></p>
                  <Link to="/aboutUs" className="link link-hover hover:text-title duration-300">About us</Link> 
                  <Link to="/programs" className="link link-hover hover:text-title duration-300">Our Programs</Link> 
                  <Link to="/teachers" className="link link-hover hover:text-title duration-300">Our Teachers</Link> 
                  <Link to="/contact" className="link link-hover hover:text-title duration-300">Contact</Link>
                </div> 

                <div className='mb-10 md:mb-0 w-fit'>
                <header className='text-xl text-primary mb-1'>Contact Us</header> 
                  <p className='border rounded border-primary mb-2 w-16'></p>
                  <p>Dakshinkhan Girls School Road</p>
                  <p>Dakshinkhan, Dhaka, Bangladesh</p>
                  <p>shapnojoyee@gmail.com</p>
                  <p>01908-115192</p>
                </div>
            </div> 
        </footer>
    );
};

export default Footer;