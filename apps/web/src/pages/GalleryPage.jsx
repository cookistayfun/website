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
  { type: "image", src: "/new1.jpeg", alt: "Chef plating chocolate desserts in a professional kitchen" },
  { type: "image", src: "/new2.jpeg", alt: "Luxury charcuterie board catering spread" },
  { type: "image", src: "/new3.jpeg", alt: "Gourmet charcuterie board on marble serving platter" },
  { type: "image", src: "/Screenshot%202026-06-25%20at%2010.51.18%E2%80%AFPM.png", alt: "Gourmet chocolate soufflé with dessert sauce" },
  { type: "image", src: "/Screenshot%202026-06-25%20at%2010.51.31%E2%80%AFPM.png", alt: "Shrimp cocktail appetizer with fresh dill garnish" },
  { type: "image", src: "/Screenshot%202026-06-25%20at%2010.51.44%E2%80%AFPM.png", alt: "Fresh gourmet mixed vegetable salad" },
  { type: "image", src: "/Screenshot%202026-06-25%20at%2010.53.13%E2%80%AFPM.png", alt: "Pan-seared scallops with herb gremolata" },
];

const galleryVideos = Array.from({ length: 21 }, (_, i) => ({
  type: "video",
  src: `/${i + 1}.mp4`,
  alt: `CHEF TY culinary showcase video ${i + 1}`,
}));

const galleryItems = [...galleryImages, ...galleryVideos];

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
          {galleryItems.map((item, i) => (
            <motion.div 
              key={`${item.type}-${item.src}`} 
              variants={fadeIn} 
              className="break-inside-avoid gallery-item"
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="gallery-image w-full"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  aria-label={item.alt}
                />
              ) : (
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="gallery-image"
                  loading="lazy"
                />
              )}
              <div className="gallery-overlay pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default GalleryPage;