import PropertyCard from "../../Components/HomePageCom/PropertyCard";

const sampleProperties = [
    {
      id: 1,
      title: 'Beautiful 3 Bedroom House',
      description: 'This beautiful house has 3 bedrooms, 2 bathrooms, a spacious living room, and a modern kitchen...',
      price: 2000,
      image: 'https://via.placeholder.com/400x300',
    },
    {
      id: 2,
      title: 'Cozy 2 Bedroom Apartment',
      description: 'A cozy apartment located in the heart of the city with 2 bedrooms, 1 bathroom, and a balcony...',
      price: 1500,
      image: 'https://via.placeholder.com/400x300',
    },
    // Add more sample properties as needed
  ];
  
  const ListingsPage = () => {
    return (
      <section className="py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
          {sampleProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    );
  };
  
  export default ListingsPage;