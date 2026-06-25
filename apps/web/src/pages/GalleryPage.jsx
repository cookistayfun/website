import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const galleryImages = [
  // Original 10 Images
  { src: "https://horizons-cdn.hostinger.com/faa0a94a-a986-4d59-9827-052429046263/c44ecfd82689ce2ff91ff4f6232253a3.jpg", alt: "Culinary Dish - Salmon Appetizer" },
  { src: "https://horizons-cdn.hostinger.com/faa0a94a-a986-4d59-9827-052429046263/330f603b4719bd36e0758ba8b0720317.jpg", alt: "Culinary Dish - Tuna Tartare" },
  { src: "https://horizons-cdn.hostinger.com/faa0a94a-a986-4d59-9827-052429046263/0b9c745779fa42177b5106a8b0cede43.jpg", alt: "Culinary Dish - Seared Steak" },
  { src: "https://horizons-cdn.hostinger.com/faa0a94a-a986-4d59-9827-052429046263/036da6f8ee0828d547a09dc1fd9287e9.jpg", alt: "Culinary Dish - Seafood Appetizer" },
  { src: "https://horizons-cdn.hostinger.com/faa0a94a-a986-4d59-9827-052429046263/455db2611fbbe95d135cac6751baa474.jpg", alt: "Culinary Dish - Tuna Sushi" },
  { src: "https://horizons-cdn.hostinger.com/faa0a94a-a986-4d59-9827-052429046263/a734cc5ac403f939848de5f11ea67b72.jpg", alt: "Chef Ty in Kitchen" },
  { src: "https://horizons-cdn.hostinger.com/faa0a94a-a986-4d59-9827-052429046263/ad03d8b1007245f939848de5f11ea67b72.jpg", alt: "Culinary Presentation" },
  { src: "https://horizons-cdn.hostinger.com/faa0a94a-a986-4d59-9827-052429046263/1309f4ef2d3ba4776ad8c08586fb5185.jpg", alt: "Elegant Dish Preparation" },
  { src: "https://horizons-cdn.hostinger.com/faa0a94a-a986-4d59-9827-052429046263/3db36d7ae9b8ff169780fa26765141ef.jpg", alt: "Gourmet Culinary Experience" },
  { src: "https://horizons-cdn.hostinger.com/faa0a94a-a986-4d59-9827-052429046263/2eb9b8c4e13cdeec434bc2dc99f502e4.jpg", alt: "Luxury Private Chef Dining" },
  // New 10 Images
  { src: "https://horizons-cdn.hostinger.com/faa0a94a-a986-4d59-9827-052429046263/f983cd6cd414bf4c880674a05a625410.jpg", alt: "TV screen display showing Chef Ty at Star Theater event" },
  { src: "https://horizons-cdn.hostinger.com/faa0a94a-a986-4d59-9827-052429046263/166451958aba452df2c8de95d0a6df6f.jpg", alt: "TV screen display showing two chefs at Star Theater event" },
  { src: "https://horizons-cdn.hostinger.com/faa0a94a-a986-4d59-9827-052429046263/11df65621a8c8e4455d7e225503275e4.jpg", alt: "Professional catering setup with chef and multiple plated dishes" },
  { src: "https://horizons-cdn.hostinger.com/faa0a94a-a986-4d59-9827-052429046263/59088184c649c9ea76082088e8c8210d.jpg", alt: "Elegant fine dining dessert plate with white wine glass" },
  { src: "https://horizons-cdn.hostinger.com/faa0a94a-a986-4d59-9827-052429046263/80eb31f6d19816e19a4afbffc55d6bbd.jpg", alt: "Gourmet seafood dish with scallop and artistic plating" },
  { src: "https://horizons-cdn.hostinger.com/faa0a94a-a986-4d59-9827-052429046263/f789aa5ef5095f0cc915b7943ff3cddd.jpg", alt: "Tasting flight of colorful beverages and sauces" },
  { src: "https://horizons-cdn.hostinger.com/faa0a94a-a986-4d59-9827-052429046263/34a6ac96dd12c63bd7305ee621a8944c.jpg", alt: "Artistic plated dish with red sauce and garnishes on burgundy plate" },
  { src: "https://horizons-cdn.hostinger.com/faa0a94a-a986-4d59-9827-052429046263/3dd973f8f32ad1d463bcda2fc2742392.jpg", alt: "Professional kitchen team of four chefs at catering event" },
  { src: "https://horizons-cdn.hostinger.com/faa0a94a-a986-4d59-9827-052429046263/3ca19d0cb0a8c1bad696dff00c0556a6.jpg", alt: "Three professional chefs at luxury catering event" },
  { src: "https://horizons-cdn.hostinger.com/faa0a94a-a986-4d59-9827-052429046263/022b23f8a5643b9b2f9580f1d990a384.jpg", alt: "Fresh salad with raspberries served by poolside" }
];

const GalleryPage = () => {
  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      <Helmet>
        <title>Gallery | CHEF TY™</title>
        <meta name="description" content="Explore the culinary gallery of CHEF TY™. View our luxury private chef experiences, elegant catering, and professional dining presentations." />
      </Helmet>

      <section className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16 pt-8"
        >
          <span className="block text-[#D4AF37] font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
            Culinary Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-foreground">
            Gallery
          </h1>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A visual showcase of our premium ingredients, elegant plating, and unforgettable dining experiences.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
        >
          {galleryImages.map((img, i) => (
            <motion.div 
              key={i} 
              variants={fadeIn} 
              className="break-inside-avoid gallery-item"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay" />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default GalleryPage;