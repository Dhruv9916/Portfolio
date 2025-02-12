import { motion } from 'framer-motion';
import { Mail, MapPin, User, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 relative text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Contact me
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-crimson mt-4"></div>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Reach Out to me!</h3>
            <p className="text-gray-300 mb-8">
              Discuss a Project or just want to say Hi? My inbox is open for all.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <User className="text-crimson" size={24} />
                <div>
                  <p className="font-semibold">Name</p>
                  <p className="text-gray-300">Dhruv Kumar</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="text-crimson" size={24} />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-300">Greater Noida, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="text-crimson" size={24} />
                <div>
                  <p className="font-semibold">Email</p>
                  <a 
                    href="mailto:dhruvkumar182003@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    dhruvkumar182003@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">Stay Connected</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/dhruv-kumar-29b279230/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/Dhruv9916"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-gray-800 rounded-full hover:bg-gray-900 transition-colors"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-crimson focus:ring-1 focus:ring-crimson"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-crimson focus:ring-1 focus:ring-crimson"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-crimson focus:ring-1 focus:ring-crimson"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  rows="6"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-crimson focus:ring-1 focus:ring-crimson"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-crimson text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;