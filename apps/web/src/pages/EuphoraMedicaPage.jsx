import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Microscope, Target, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const EuphoraMedicaPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Euphrora Medica | Edenara Group</title>
        <meta name="description" content="Bridging the gap between laboratory discovery and clinical impact. A subsidiary of Edenara Group." />
      </Helmet>
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1701848055770-effbdb148e15')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
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
                Healthcare & Biotechnology
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
                Euphrora Medica
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 font-light italic mb-8 border-l-4 border-accent pl-6">
                "Bridging the gap between laboratory discovery and clinical impact."
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
                    Euphrora Medica operates at the cutting edge of biomedical sciences, ensuring that breakthrough discoveries do not remain confined to the laboratory. 
                  </p>
                  <ul className="space-y-4 list-none pl-0">
                    <li className="flex items-start gap-3">
                      <Activity className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span><strong>Diagnostics:</strong> Developing and deploying rapid, accurate diagnostic tools to facilitate early intervention.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Activity className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span><strong>MedTech:</strong> Investing in medical technologies that streamline clinical workflows and improve patient outcomes.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Activity className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span><strong>Precision Medicine:</strong> Expanding access to targeted therapies and localized genomic medicine in historically underserved emerging markets.</span>
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
                    <Microscope className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-card-foreground">Institutional Role</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Within the Edenara Group ecosystem, Euphrora Medica <strong>drives biomedical innovation and healthcare access.</strong> It serves as the primary vehicle for identifying promising therapeutic and diagnostic assets, guiding them through regulatory pathways, and scaling their commercial deployment across global markets to ensure maximum clinical and operational impact.
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

export default EuphoraMedicaPage;