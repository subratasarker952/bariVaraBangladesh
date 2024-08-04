import TestimonialItem from "./TestimonialItem.jsx";

const testimonials = [
  {
    name: "John Doe",
    image: "https://via.placeholder.com/150",
    feedback:
      "This is the best rental service I have ever used. Highly recommended!",
  },
  {
    name: "Jane Smith",
    image: "https://via.placeholder.com/150",
    feedback:
      "Fantastic properties and great customer service. I found my perfect home!",
  },
  {
    name: "Michael Johnson",
    image: "https://via.placeholder.com/150",
    feedback:
      "A seamless and stress-free experience. Thank you for your excellent service!",
  },
];

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialItem key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
