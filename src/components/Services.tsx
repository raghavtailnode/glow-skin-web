
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  const categories = [
    { id: "facial", label: "Facial Treatments" },
    { id: "antiaging", label: "Anti-Aging" },
    { id: "body", label: "Body Treatments" },
    { id: "medical", label: "Medical Aesthetics" },
  ];

  const services = {
    facial: [
      {
        title: "Hydrating Facial",
        description: "Restore moisture and radiance with our signature hydrating treatment.",
        duration: "60 mins",
        price: "$120",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Deep Cleansing",
        description: "Unclog pores and remove impurities for clearer, healthier skin.",
        duration: "75 mins",
        price: "$140",
        image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Brightening Treatment",
        description: "Reduce pigmentation and even skin tone for a luminous complexion.",
        duration: "60 mins",
        price: "$150",
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
      }
    ],
    antiaging: [
      {
        title: "Micro-Needling",
        description: "Stimulate collagen production and reduce fine lines and wrinkles.",
        duration: "60 mins",
        price: "$220",
        image: "https://images.unsplash.com/photo-1629203432180-71e9b18d855c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Advanced Peptide Therapy",
        description: "Boost skin elasticity and firmness with advanced peptide formulations.",
        duration: "75 mins",
        price: "$240",
        image: "https://images.unsplash.com/photo-1531299244174-d247dd4e5a66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Lifting Treatment",
        description: "Non-surgical face lift for a more youthful, toned appearance.",
        duration: "90 mins",
        price: "$270",
        image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
      }
    ],
    body: [
      {
        title: "Body Contouring",
        description: "Sculpt and tone targeted areas for a more defined silhouette.",
        duration: "90 mins",
        price: "$280",
        image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Detox Wrap",
        description: "Eliminate toxins and reduce water retention for a refreshed body.",
        duration: "75 mins",
        price: "$160",
        image: "https://images.unsplash.com/photo-1609834265242-2732fec1c15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Cellulite Treatment",
        description: "Minimize the appearance of cellulite for smoother skin.",
        duration: "60 mins",
        price: "$190",
        image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
      }
    ],
    medical: [
      {
        title: "Botox Treatment",
        description: "Reduce wrinkles and fine lines with precise botox application.",
        duration: "30 mins",
        price: "$350",
        image: "https://images.unsplash.com/photo-1623697899919-66f16a2690a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Dermal Fillers",
        description: "Restore volume and contour facial features for a youthful look.",
        duration: "45 mins",
        price: "$450",
        image: "https://images.unsplash.com/photo-1628102491629-778571d893a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Chemical Peel",
        description: "Remove damaged skin cells to reveal fresh, renewed skin underneath.",
        duration: "60 mins",
        price: "$180",
        image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
      }
    ]
  };
  
  const [selectedCategory, setSelectedCategory] = useState("facial");

  return (
    <section id="services" className="py-20 bg-skin-soft-purple/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800 mb-4">
            Our <span className="text-skin-purple">Premium</span> Services
          </h2>
          <div className="w-20 h-1 bg-skin-purple mx-auto mb-6"></div>
          <p className="text-gray-600 font-poppins max-w-2xl mx-auto">
            Choose from our range of advanced treatment options designed to address your specific skin concerns and aesthetic goals.
          </p>
        </div>

        <Tabs 
          defaultValue="facial" 
          className="w-full" 
          value={selectedCategory}
          onValueChange={setSelectedCategory}
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
            {categories.map(category => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="text-sm md:text-base font-medium py-3"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {Object.keys(services).map(categoryKey => (
            <TabsContent key={categoryKey} value={categoryKey} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services[categoryKey].map((service, index) => (
                  <Card key={index} className="overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="font-playfair text-gray-800">{service.title}</CardTitle>
                      <CardDescription className="flex justify-between items-center mt-2">
                        <span className="text-skin-purple font-medium">{service.price}</span>
                        <span className="text-gray-500 text-sm">{service.duration}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 font-poppins text-sm">
                        {service.description}
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" className="border-skin-purple text-skin-purple hover:bg-skin-soft-purple w-full">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-12">
          <Button className="bg-skin-purple hover:bg-skin-purple-dark text-white px-8 py-6 font-medium">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
