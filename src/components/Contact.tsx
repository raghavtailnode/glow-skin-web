
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800 mb-4">
            Book Your <span className="text-skin-purple">Consultation</span>
          </h2>
          <div className="w-20 h-1 bg-skin-purple mx-auto mb-6"></div>
          <p className="text-gray-600 font-poppins max-w-2xl mx-auto">
            Take the first step towards radiant, healthy skin. Schedule a consultation with our expert team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in-left">
            <Card className="border border-gray-100 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-skin-purple p-8 text-white">
                  <h3 className="text-2xl font-bold font-playfair mb-4">Contact Information</h3>
                  <p className="font-poppins mb-6">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 mt-1" />
                      <div>
                        <p className="font-medium">Call Us</p>
                        <p className="text-white/90">(123) 456-7890</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 mt-1" />
                      <div>
                        <p className="font-medium">Visit Us</p>
                        <p className="text-white/90">123 Beauty Lane, Suite 100<br />Skincare City, SC 12345</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 mt-1" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-white/90">Mon - Fri: 9:00 AM - 7:00 PM<br />Sat: 9:00 AM - 5:00 PM<br />Sun: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <Input
                          id="first-name"
                          name="first-name"
                          required
                          className="bg-gray-50 border-gray-200 focus:border-skin-purple focus:ring-skin-purple"
                        />
                      </div>
                      <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <Input
                          id="last-name"
                          name="last-name"
                          required
                          className="bg-gray-50 border-gray-200 focus:border-skin-purple focus:ring-skin-purple"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="bg-gray-50 border-gray-200 focus:border-skin-purple focus:ring-skin-purple"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          className="bg-gray-50 border-gray-200 focus:border-skin-purple focus:ring-skin-purple"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service You're Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full rounded-md bg-gray-50 border-gray-200 py-2 pl-3 pr-10 text-gray-900 focus:border-skin-purple focus:ring-skin-purple text-sm"
                      >
                        <option value="">Select a service</option>
                        <option value="facial">Facial Treatments</option>
                        <option value="antiaging">Anti-Aging Treatments</option>
                        <option value="body">Body Treatments</option>
                        <option value="medical">Medical Aesthetics</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="bg-gray-50 border-gray-200 focus:border-skin-purple focus:ring-skin-purple"
                      />
                    </div>

                    <Button className="w-full bg-skin-purple hover:bg-skin-purple-dark">
                      Book Consultation
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in-right">
            <div className="h-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910934!2d-74.25986548248684!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1681472081844!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GlowSkin location map"
              ></iframe>
            </div>

            <div className="mt-8 bg-skin-soft-purple/20 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Calendar className="h-8 w-8 text-skin-purple mr-4" />
                <h3 className="text-xl font-semibold font-playfair text-gray-800">
                  Quick Appointment
                </h3>
              </div>
              <p className="text-gray-600 mb-6 font-poppins">
                Need a quick appointment? Call us directly at <span className="text-skin-purple font-semibold">(123) 456-7890</span> or fill out the request form for faster booking.
              </p>
              <Button variant="outline" className="border-skin-purple text-skin-purple hover:bg-skin-soft-purple w-full">
                Request Quick Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
