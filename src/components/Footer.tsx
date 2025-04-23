
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-playfair">
              <span className="text-skin-purple">Glow</span>Skin
            </h3>
            <p className="text-gray-300 font-poppins text-sm">
              Premium aesthetic treatments for radiant, healthy skin. Our expert team is dedicated to helping you look and feel your best.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-skin-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-skin-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-skin-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-skin-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold font-playfair mb-4">Quick Links</h4>
            <ul className="space-y-2 font-poppins text-sm">
              <li><a href="#home" className="text-gray-300 hover:text-skin-purple transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-skin-purple transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-skin-purple transition-colors">Our Services</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-skin-purple transition-colors">Before & After</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-skin-purple transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-skin-purple transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold font-playfair mb-4">Our Services</h4>
            <ul className="space-y-2 font-poppins text-sm">
              <li><a href="#services" className="text-gray-300 hover:text-skin-purple transition-colors">Facial Treatments</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-skin-purple transition-colors">Anti-Aging Solutions</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-skin-purple transition-colors">Body Treatments</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-skin-purple transition-colors">Medical Aesthetics</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-skin-purple transition-colors">Skin Analysis</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-skin-purple transition-colors">Custom Treatment Plans</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold font-playfair mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4 font-poppins text-sm">
              Subscribe to our newsletter for skincare tips and exclusive offers.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-skin-purple"
              />
              <Button className="bg-skin-purple hover:bg-skin-purple-dark px-4">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-poppins mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} GlowSkin Aesthetics. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm font-poppins">
              <a href="#" className="text-gray-400 hover:text-skin-purple transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-skin-purple transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-skin-purple transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
