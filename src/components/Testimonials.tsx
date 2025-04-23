
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily Johnson",
      role: "Loyal Client - 2 Years",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      content: "I've been coming to GlowSkin for two years now, and the results have been nothing short of amazing. The staff is professional, knowledgeable, and they always make me feel comfortable. My skin has never looked better!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "New Client",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      content: "After just three sessions, I've seen a significant improvement in my skin texture and tone. The personalized approach and attention to detail set GlowSkin apart from other clinics I've tried in the past.",
      rating: 5
    },
    {
      name: "Sophia Patel",
      role: "Regular Client - 1 Year",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      content: "The anti-aging treatments at GlowSkin have turned back the clock for me. People keep asking what my secret is! The team's expertise and the welcoming atmosphere make every visit a pleasure.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Client - 6 Months",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      content: "I was hesitant about skin treatments, but the team at GlowSkin put me at ease from my first consultation. They explained everything thoroughly and the results have exceeded my expectations.",
      rating: 4
    },
    {
      name: "Olivia Martinez",
      role: "Loyal Client - 3 Years",
      image: "https://images.unsplash.com/photo-1563306406-e66174fa3787?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      content: "I've tried many aesthetic clinics over the years, but none compare to GlowSkin. Their approach is holistic and the results are lasting. My skin has never been healthier or more radiant.",
      rating: 5
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right
      setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800 mb-4">
            What Our <span className="text-skin-purple">Clients</span> Say
          </h2>
          <div className="w-20 h-1 bg-skin-purple mx-auto mb-6"></div>
          <p className="text-gray-600 font-poppins max-w-2xl mx-auto">
            Discover why our clients trust us with their skin and aesthetic goals.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="border-0 shadow-none">
                    <CardContent className="px-8 py-10">
                      <div className="flex flex-col items-center text-center">
                        <div className="relative mb-6">
                          <div className="w-20 h-20 bg-skin-soft-purple rounded-full absolute -top-2 -left-2"></div>
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md relative z-10"
                          />
                        </div>
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-600 font-poppins mb-6 max-w-2xl">
                          "{testimonial.content}"
                        </p>
                        <h3 className="text-xl font-semibold font-playfair text-gray-800">
                          {testimonial.name}
                        </h3>
                        <p className="text-skin-purple text-sm">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white rounded-full p-3 shadow-md hover:bg-skin-soft-purple transition-colors z-10 focus:outline-none hidden md:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white rounded-full p-3 shadow-md hover:bg-skin-soft-purple transition-colors z-10 focus:outline-none hidden md:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeIndex === index ? "bg-skin-purple" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
