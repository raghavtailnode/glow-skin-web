
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  const categories = [
    { id: "all", label: "All Results" },
    { id: "facial", label: "Facial Treatments" },
    { id: "antiaging", label: "Anti-Aging" },
    { id: "body", label: "Body Treatments" },
  ];

  const galleryItems = [
    {
      id: 1,
      category: "facial",
      title: "Acne Treatment",
      before: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Significant improvement in acne condition after 6 treatment sessions"
    },
    {
      id: 2,
      category: "antiaging",
      title: "Fine Lines & Wrinkles",
      before: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Reduction in fine lines and wrinkles after our premium anti-aging treatment"
    },
    {
      id: 3,
      category: "facial",
      title: "Hyperpigmentation",
      before: "https://images.unsplash.com/photo-1588867702066-f3a8796e2b3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1515688594390-b649af70d282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Visible reduction in dark spots and hyperpigmentation after treatment series"
    },
    {
      id: 4,
      category: "body",
      title: "Body Contouring",
      before: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Enhanced body contours and reduced fat deposits after our body sculpting treatment"
    },
    {
      id: 5,
      category: "antiaging",
      title: "Dermal Fillers",
      before: "https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Restored facial volume and definition with premium dermal fillers"
    },
    {
      id: 6,
      category: "body",
      title: "Cellulite Reduction",
      before: "https://images.unsplash.com/photo-1626893873869-0ac58ab5b34f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Smoother skin texture and reduced cellulite appearance after targeted treatments"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openModal = (item) => {
    setSelectedItem(item);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="gallery" className="py-20 bg-skin-soft-purple/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800 mb-4">
            Before & <span className="text-skin-purple">After</span> Gallery
          </h2>
          <div className="w-20 h-1 bg-skin-purple mx-auto mb-6"></div>
          <p className="text-gray-600 font-poppins max-w-2xl mx-auto">
            See the transformative results achieved by our expert aestheticians using advanced techniques and premium products.
          </p>
        </div>

        <Tabs 
          defaultValue="all" 
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
          
          <TabsContent value={selectedCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div 
                  key={item.id} 
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in cursor-pointer"
                  onClick={() => openModal(item)}
                >
                  <div className="relative">
                    <div className="flex">
                      <div className="w-1/2 relative">
                        <div className="absolute top-4 left-4 bg-gray-900/70 text-white text-sm py-1 px-3 rounded-full">
                          Before
                        </div>
                        <img 
                          src={item.before} 
                          alt={`Before ${item.title}`} 
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <div className="w-1/2 relative">
                        <div className="absolute top-4 right-4 bg-skin-purple/90 text-white text-sm py-1 px-3 rounded-full">
                          After
                        </div>
                        <img 
                          src={item.after} 
                          alt={`After ${item.title}`} 
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </div>
                    <div className="p-4 bg-white">
                      <h3 className="font-playfair font-semibold text-lg text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1 font-poppins">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 font-poppins">No gallery items found for this category.</p>
          </div>
        )}
        
        {selectedItem && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="font-playfair font-semibold text-xl text-gray-800">
                  {selectedItem.title}
                </h3>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-4">
                  <div className="text-center mb-2">
                    <span className="inline-block bg-gray-900/70 text-white text-sm py-1 px-3 rounded-full">
                      Before
                    </span>
                  </div>
                  <img 
                    src={selectedItem.before} 
                    alt={`Before ${selectedItem.title}`} 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <div className="text-center mb-2">
                    <span className="inline-block bg-skin-purple/90 text-white text-sm py-1 px-3 rounded-full">
                      After
                    </span>
                  </div>
                  <img 
                    src={selectedItem.after} 
                    alt={`After ${selectedItem.title}`} 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-playfair font-semibold text-lg text-gray-800 mb-2">
                  Treatment Details
                </h4>
                <p className="text-gray-600 font-poppins mb-4">
                  {selectedItem.description}
                </p>
                <Button className="w-full bg-skin-purple hover:bg-skin-purple-dark" onClick={closeModal}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
