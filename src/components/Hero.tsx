
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-skin-soft-purple/30 to-white"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-gray-800 leading-tight mb-4">
              Reveal Your Skin's 
              <span className="text-skin-purple"> Natural Beauty</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 font-poppins max-w-lg">
              Experience advanced aesthetic treatments tailored to enhance your natural beauty. 
              Our expert professionals are committed to helping you achieve radiant, healthy skin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-skin-purple hover:bg-skin-purple-dark text-white px-8 py-6 font-medium">
                Book Consultation
              </Button>
              <Button variant="outline" className="border-skin-purple text-skin-purple-dark hover:bg-skin-soft-purple px-8 py-6">
                Explore Services
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative animate-fade-in-right">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-skin-purple/20 rounded-full absolute -top-10 -left-10 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1571875257727-256c39da42af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Woman with glowing skin" 
                className="rounded-lg shadow-xl relative z-10 object-cover w-full h-full max-w-md mx-auto"
              />
              <div className="w-40 h-40 bg-skin-soft-pink rounded-full absolute -bottom-5 -right-5 z-0"></div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-lg absolute bottom-5 left-0 z-20 border-l-4 border-skin-purple md:max-w-xs animate-fade-in">
              <p className="text-sm text-gray-600 font-poppins">
                "My skin has never looked better! The treatments are personalized and the results are amazing."
              </p>
              <p className="text-skin-purple font-medium mt-2 font-poppins">— Sarah M.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative shapes */}
      <div className="hidden md:block absolute top-20 right-10 w-20 h-20 bg-skin-soft-yellow rounded-full opacity-70"></div>
      <div className="hidden md:block absolute bottom-10 left-10 w-32 h-32 bg-skin-soft-green rounded-full opacity-70"></div>
    </section>
  );
};

export default Hero;
