import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold text-center text-teal-900 mb-6">
            Contact Us
          </h3>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-500"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-8 text-center text-gray-600">
            <h4 className="text-lg font-medium text-teal-900 mb-2">
              Or Reach Us At:
            </h4>
            <p className="text-sm">Email: contact@homeservice.com</p>
            <p className="text-sm">Phone: +123 456 7890</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
