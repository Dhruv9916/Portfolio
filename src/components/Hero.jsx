import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-hero-pattern bg-cover bg-center bg-fixed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl mb-2">Hello 👋 I'm</h3>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Dhruv Kumar</h1>
          <h2 className="text-3xl md:text-4xl">
            And I'm a{' '}
            <span className="text-cyan-400">
              <TypeAnimation
                sequence={[
                  'Front End Developer',
                  2000,
                  'React.js Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;