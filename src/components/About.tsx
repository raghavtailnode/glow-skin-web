
import { Lamp, Shield, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-skin-purple" />,
      title: "Certified Experts",
      description: "Our team consists of licensed aestheticians and medical professionals with years of experience."
    },
    {
      icon: <Lamp className="h-10 w-10 text-skin-purple" />,
      title: "Advanced Technology",
      description: "We use the latest, scientifically-proven equipment and techniques for optimal results."
    },
    {
      icon: <Users className="h-10 w-10 text-skin-purple" />,
      title: "Personalized Care",
      description: "Each treatment plan is custom-tailored to your unique skin type and aesthetic goals."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 animate-fade-in-left">
            <div className="relative">
              <div className="w-64 h-64 bg-skin-soft-purple rounded-full absolute -top-8 -left-8 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1607008829749-c7c468c57617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Inside our clinic" 
                className="rounded-lg shadow-xl relative z-10 object-cover w-full max-w-lg"
              />
              <div className="w-40 h-40 bg-skin-soft-green rounded-full absolute -bottom-5 -right-5 z-0"></div>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-fade-in-right">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800 mb-4">
                About <span className="text-skin-purple">GlowSkin</span> Clinic
              </h2>
              <div className="w-20 h-1 bg-skin-purple mb-6"></div>
              <p className="text-gray-600 mb-6 font-poppins">
                With over 10 years of experience, GlowSkin has been at the forefront of aesthetic innovations, 
                providing cutting-edge treatments in a luxurious, comfortable environment.
              </p>
              <p className="text-gray-600 mb-6 font-poppins">
                Our mission is to enhance your natural beauty while promoting long-term skin health. 
                We believe in education, personalization, and using only the most effective, clinically-proven treatments.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 bg-skin-soft-purple rounded-xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-playfair text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 font-poppins">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
