
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <p>&copy; 2024 RentalHouse. All rights reserved.</p>
      <div className="space-x-4">
        <a href="/terms" className="text-gray-400">
          Terms
        </a>
        <a href="/privacy" className="text-gray-400">
          Privacy
        </a>
        <a href="/contact" className="text-gray-400">
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
