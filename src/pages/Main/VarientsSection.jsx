import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import red1 from "../../assets/Animate/red.jpg"
import black1 from "../../assets/Animate/Sugarfree.jpg"
import coffee1 from "../../assets/Animate/black.jpg"

const colaVariants = [
  {
    name: 'Classic Coca-Cola',
    description: 'The original and iconic cola that started it all.',
    ingredients: 'Carbonated water, high fructose corn syrup, caramel color, phosphoric acid, natural flavors, caffeine',
    nutritionalInfo: 'Calories: 140, Caffeine: 34mg, Sugar: 39g',
    image: red1,
    bgColor: 'bg-black'
  },
  {
    name: 'Coca-Cola Zero Sugar',
    description: 'The great taste of Coca-Cola with zero sugar.',
    ingredients: 'Carbonated water, caramel color, phosphoric acid, aspartame, potassium benzoate, natural flavors, caffeine',
    nutritionalInfo: 'Calories: 0, Caffeine: 34mg, Sugar: 0g',
    image: black1,
    bgColor: 'bg-black'
  },
  {
    name: 'Coca-Cola BLACK',
    description: 'Classic Coca-Cola in black edition.',
    ingredients: 'Carbonated water, high fructose corn syrup,phosphoric acid,natural flavors, caffeine',
    nutritionalInfo: 'Calories: 150, Caffeine: 34mg, Sugar: 41g',
    image: coffee1,
    bgColor: 'bg-black'
  }
];

const VariantSection = ({ variant }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    amount: 0.1 
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 50, 
        damping: 10,
        duration: 1 
      }
    }
  };

  const contentVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 20,
        duration: 1 
      }
    }
  };

  return (
    <section 
      ref={ref} 
      className={`min-h-screen flex items-center justify-center  relative ${variant.bgColor} text-white overflow-hidden`}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto flex items-center justify-between flex-col md:flex-row"
      >
        <motion.div 
          variants={imageVariants}
          className="w-full md:w-1/2 p-2 md:p-8 z-10"
        >
          <img 
            src={variant.image} 
            alt={variant.name} 
            className="w-full h-[50vh] md:h-[80vh] object-contain rounded-lg shadow-2xl transform transition-transform hover:scale-105"
          />
        </motion.div>

        <motion.div 
          variants={contentVariants}
          className="w-full md:w-1/2 p-2 md:p-8 z-10"
        >
          <div className="bg-black bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-4xl font-bold mb-4">{variant.name}</h2>
            <p className="mb-4">{variant.description}</p>
            
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Ingredients:</h3>
              <p>{variant.ingredients}</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Nutritional Info:</h3>
              <p>{variant.nutritionalInfo}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const CocaColaVariantsPage = () => {
  return (
    <div className="bg-gray-900">
        <style jsx global>{`
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        .typing-animation {
          overflow: hidden;
          white-space: nowrap;
          animation: typing 2s steps(40, end);
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
      {colaVariants.map((variant) => (
        <VariantSection key={variant.name} variant={variant} />
      ))}
    </div>
  );
};

export default CocaColaVariantsPage;