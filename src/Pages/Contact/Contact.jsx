const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-4">
        We would love to hear from you! If you have any questions, comments, or
        inquiries, please reach out to us using the information below.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Email</h2>
        <p className="text-gray-700">info@houserental.com</p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Phone</h2>
        <p className="text-gray-700">+8801521335328 / +8801797433936</p>
      </div>
      {/* <div>
        <h2 className="text-2xl font-bold mb-2">Address</h2>
        <p className="text-gray-700">
          123 Main Street, Suite 100, City, State, ZIP
        </p>
      </div> */}
    </div>
  );
};

export default Contact;
