import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Target, Leaf, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const PishoraAgritechPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Pishora Agritech | Edenara Group</title>
        <meta name="description" content="Sustainable Farming. Reliable Delivery. A subsidiary of Edenara Group." />
      </Helmet>
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511846859610-ea7712ac1c3d')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/95"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/#subsidiaries" 
              className="inline-flex items-center text-sm font-medium text-primary-foreground/70 hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Edenara Group
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <Badge className="bg-accent/20 text-accent hover:bg-accent/30 border-none px-3 py-1 mb-6 text-sm">
                Agriculture & Supply Chain Innovation
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
                Pishora Agritech
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 font-light italic mb-8 border-l-4 border-accent pl-6">
                "Sustainable Farming. Reliable Delivery."
              </p>
            </motion.div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Strategic Focus</h2>
                </div>
                <div className="prose prose-lg text-muted-foreground">
                  <p className="mb-6">
                    Pishora Agritech transforms agricultural ecosystems by deploying technology across the entire value chain—from cultivation to consumption.
                  </p>
                  <ul className="space-y-4 list-none pl-0">
                    <li className="flex items-start gap-3">
                      <Leaf className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span><strong>Smart Agriculture:</strong> Implementing precision farming and IoT solutions to maximize yields while minimizing environmental impact.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Leaf className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span><strong>Supply Chain Optimization:</strong> Utilizing data-driven logistics to streamline distribution networks.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Leaf className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span><strong>Food Security & Loss Reduction:</strong> Developing scalable infrastructure to dramatically reduce post-harvest losses in emerging markets.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sprout className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-card-foreground">Institutional Role</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Pishora Agritech <strong>builds resilient agricultural systems and improves food security.</strong> By integrating intelligent systems and disciplined capital provided by our sister companies, Pishora modernizes legacy farming practices, ensuring reliable delivery networks that can withstand climate volatility and geopolitical supply chain shocks.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PishoraAgritechPage;