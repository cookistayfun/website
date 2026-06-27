import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { 
  ChefHat, 
  Utensils, 
  CalendarDays, 
  Wine, 
  Users, 
  Home, 
  Briefcase, 
  Gift, 
  Anchor, 
  FileText,
  Star,
  Sparkles,
  HeartHandshake,
  Award,
  MapPin,
  ArrowRight
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Google Maps Configuration
const mapContainerStyle = {
  width: '100%',
  height: '100%'
};

const mapCenter = {
  lat: 40.8500,
  lng: -73.1000 // Centered on Long Island
};

const mapMarkers = [
  { id: 'nyc', position: { lat: 40.7128, lng: -74.0060 }, title: 'New York City' },
  { id: 'li', position: { lat: 40.7891, lng: -73.1350 }, title: 'Long Island' },
  { id: 'hamptons', position: { lat: 40.9634, lng: -72.1848 }, title: 'The Hamptons' }
];

const WEB3FORMS_ACCESS_KEY = 'bc8479a0-0975-43bf-ae8a-8cd0c03f63ad';

const mapOptions = {
  styles: [
    { elementType: "geometry", stylers: [{ color: "#001F3F" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#001F3F" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#8ec3b9" }] },
    { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#D4AF37" }] },
    { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
    { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#00152b" }] },
    { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#6b9a76" }] },
    { featureType: "road", elementType: "geometry", stylers: [{ color: "#002a5c" }] },
    { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#003b82" }] },
    { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#9ca5b3" }] },
    { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#004080" }] },
    { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#002a5c" }] },
    { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#f3d19c" }] },
    { featureType: "water", elementType: "geometry", stylers: [{ color: "#001024" }] },
    { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#515c6d" }] },
    { featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#17263c" }] }
  ],
  disableDefaultUI: true,
  zoomControl: true,
};

function ServiceMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ""
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={mapCenter}
      zoom={9}
      options={mapOptions}
    >
      {mapMarkers.map(marker => (
        <Marker 
          key={marker.id} 
          position={marker.position} 
          title={marker.title}
        />
      ))}
    </GoogleMap>
  ) : (
    <div className="w-full h-full flex items-center justify-center bg-[#00152b] text-[#D4AF37]">
      Loading Map...
    </div>
  );
}

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guests: '',
    location: '',
    eventType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData(e.target);
      formDataToSend.append('access_key', WEB3FORMS_ACCESS_KEY);
      formDataToSend.append('subject', 'New Quote Request — CHEF TY Website');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Inquiry sent successfully. The CHEF TY™ team will contact you shortly.");
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventDate: '',
          guests: '',
          location: '',
          eventType: '',
          message: ''
        });
      } else {
        toast.error(data.message || 'Something went wrong. Please try again or contact us directly.');
      }
    } catch {
      toast.error('Unable to send your inquiry. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const services = [
    { icon: ChefHat, title: "Private Chef Services", desc: "Customized in-home dining experiences for families, special occasions, and intimate gatherings." },
    { icon: Utensils, title: "Luxury Catering", desc: "Full-service catering for private, corporate, and social events." },
    { icon: CalendarDays, title: "Event Planning & Coordination", desc: "Professional event planning, logistics, timelines, vendor coordination, rentals, staffing, and guest experience management." },
    { icon: Wine, title: "Bar Services", desc: "Professional bartending services, wine service, cocktail service, champagne toasts, beverage planning, and bar management." },
    { icon: Users, title: "Food & Beverage Service Staff", desc: "Experienced servers, bartenders, captains, buffet attendants, and event support staff for seamless event execution." },
    { icon: Home, title: "Family Meal Programs", desc: "Weekly customized meal preparation tailored to family needs and dietary preferences." },
    { icon: Briefcase, title: "Corporate Events", desc: "Executive dinners, business meetings, networking events, and corporate celebrations." },
    { icon: Gift, title: "Engagement Parties & Special Events", desc: "Engagement parties, birthdays, anniversaries, graduation celebrations, and private gatherings." },
    { icon: Anchor, title: "Yacht & Estate Dining", desc: "Luxury culinary experiences for yachts, waterfront properties, and private estates." },
    { icon: FileText, title: "Menu Development & Culinary Consulting", desc: "Restaurant menu development, kitchen consulting, food cost management, and culinary training." }
  ];

  const homeGalleryVideos = Array.from({ length: 9 }, (_, i) => ({
    src: `/${i + 1}.mp4`,
    alt: `CHEF TY culinary showcase video ${i + 1}`,
  }));

  const certifications = [
    { title: "ServSafe Food Protection Manager", status: "completed" },
    { title: "TIPS/ATAP Alcohol Server Certification", status: "completed" },
    { title: "Worldchefs Sustainability for Culinary Professionals", status: "completed" },
    { title: "Mastery Certificate in Culinary Arts (Turkey)", status: "completed" },
    { title: "Master Instructor Certificate (Turkey)", status: "completed" },
    { title: "HACCP Certification", status: "coming-soon" },
    { title: "FSVP Certification", status: "coming-soon" }
  ];

  return (
    <div className="bg-background min-h-screen">
      <Helmet>
        <title>CHEF TY™ | Luxury Private Chef, Catering & Event Services in Long Island & NYC</title>
        <meta name="description" content="CHEF TY™ by NY GLN Culinary Group LLC provides luxury private chef services, catering, event planning, bar services, and hospitality experiences across Long Island, NYC, The Hamptons, and surrounding areas." />
      </Helmet>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.jpeg" 
            alt="Luxury Private Chef Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#001F3F]/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <span className="block text-[#D4AF37] font-medium tracking-[0.2em] uppercase mb-6 text-sm md:text-base drop-shadow-md">
              CHEF TY™ by NY GLN Culinary Group LLC
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-8 drop-shadow-lg">
              Luxury Private Chef, Catering & Event Services
            </h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-8 font-light leading-relaxed drop-shadow-md">
              Bringing world-class culinary experiences, professional hospitality, and unforgettable events to Long Island, New York City, The Hamptons, and beyond.
            </p>
            <p className="text-sm md:text-base font-medium tracking-widest text-[#D4AF37] uppercase mb-12 drop-shadow-md">
              Serving Long Island • New York City • The Hamptons • Surrounding Areas
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-[#D4AF37] text-[#001F3F] hover:bg-[#D4AF37]/90 rounded-none h-14 px-10 text-base font-semibold transition-all duration-300"
                onClick={() => scrollTo('contact')}
              >
                Request a Quote
              </Button>
              <Button 
                size="lg" 
                className="w-full sm:w-auto border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#001F3F] rounded-none h-14 px-10 text-base font-semibold transition-all duration-300"
                onClick={() => scrollTo('contact')}
              >
                Book a Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-foreground">About Chef Ty</h2>
            <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mb-10" />
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed text-left md:text-center">
              <p>
                Chef Tayfun Tarakcioglu is an internationally experienced culinary professional with over 18 years of experience in luxury hotels, cruise lines, private residences, catering operations, and executive chef leadership positions. His career includes international cruise lines, luxury hospitality brands, private family dining, corporate events, and high-end catering services. 
              </p>
              <p>
                Chef Ty specializes in customized dining experiences, private chef services, event catering, luxury events, menu development, and hospitality consulting.
              </p>
              <p className="p-6 bg-card border border-border shadow-sm mt-8 italic text-foreground rounded-sm relative">
                <span className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]" />
                NY GLN Culinary LLC is a Long Island–based private chef and catering company specializing in luxury private dining, corporate events, cocktail receptions, holiday parties, and customized culinary experiences. The company focuses on fresh ingredients, elegant presentation, and personalized service for every client.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-foreground">Our Services</h2>
            <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto" />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-card p-8 border-t-4 border-transparent hover:border-[#D4AF37] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
              >
                <div className="w-12 h-12 bg-[#001F3F]/5 flex items-center justify-center rounded-full mb-6 group-hover:bg-[#001F3F] transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-[#001F3F] group-hover:text-[#D4AF37] transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed mt-auto">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Luxury Experience Section */}
      <section id="experience" className="py-24 bg-[#001F3F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">Designed for Memorable Culinary Experiences</h2>
              <div className="w-16 h-[2px] bg-[#D4AF37] mb-8" />
              <p className="text-lg text-white/80 font-light leading-relaxed mb-10">
                From intimate private dinners to large-scale events, CHEF TY™ delivers thoughtful menus, polished service, and elegant presentation tailored to each occasion. Every experience is built around the client's vision, guest experience, and the highest standard of hospitality.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Star, text: 'Fresh ingredients' },
                  { icon: Sparkles, text: 'Elegant presentation' },
                  { icon: HeartHandshake, text: 'Personalized service' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-[#D4AF37]/50 flex items-center justify-center shrink-0 bg-[#D4AF37]/10">
                      <item.icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <span className="text-lg font-medium tracking-wide">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1588087803910-1574c4436162" 
                alt="Luxury Event Table Setting" 
                className="w-full h-full object-cover rounded-sm"
              />
              <div className="absolute inset-0 border-2 border-[#D4AF37] m-4 pointer-events-none rounded-sm" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 md:py-32">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-foreground">Gallery</h2>
            <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A curated selection of our fine culinary creations. Follow our latest work on Instagram: <a href="https://instagram.com/nyglnculinary" target="_blank" rel="noopener noreferrer" className="text-[#001F3F] font-semibold hover:text-[#D4AF37] transition-colors">@nyglnculinary</a>
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {homeGalleryVideos.map((video) => (
              <motion.div
                key={video.src}
                variants={fadeIn}
                className="gallery-item aspect-video-portrait w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <video
                  src={video.src}
                  className="gallery-image w-full h-full object-cover"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  aria-label={video.alt}
                />
                <div className="gallery-overlay pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-[#D4AF37] text-[#001F3F] hover:bg-[#D4AF37]/90 rounded-none h-14 px-10 text-base font-semibold transition-all duration-300 group"
            >
              <Link to="/gallery" className="flex items-center gap-2">
                View Full Gallery
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 bg-muted/50 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-foreground">Certifications & Professional Standards</h2>
            <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto" />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-card p-6 border border-border flex items-start gap-4 hover:shadow-md transition-shadow relative"
              >
                {cert.status === 'coming-soon' && (
                  <Badge className="absolute top-3 right-3 bg-amber-500/20 text-amber-700 border border-amber-200 hover:bg-amber-500/30">
                    Coming Soon
                  </Badge>
                )}
                <Award className={`w-8 h-8 shrink-0 ${cert.status === 'coming-soon' ? 'text-amber-500 opacity-60' : 'text-[#D4AF37]'}`} />
                <p className={`font-medium text-sm sm:text-base leading-snug pt-1 ${cert.status === 'coming-soon' ? 'text-muted-foreground' : 'text-foreground'}`}>
                  {cert.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Area Section */}
      <section id="service-area" className="py-24 bg-[#001F3F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="w-full lg:w-1/2"
            >
              <MapPin className="w-12 h-12 text-[#D4AF37] mb-8" />
              <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">Serving Long Island, NYC, The Hamptons & Beyond</h2>
              <p className="text-white/80 font-light leading-relaxed mb-10 text-lg">
                CHEF TY™ provides private chef, catering, event hospitality, and bar services across Long Island, New York City, The Hamptons, and surrounding areas.
              </p>
              <ul className="space-y-4">
                {['Long Island', 'New York City', 'The Hamptons', 'Surrounding Areas'].map((area, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                    <span className="text-xl font-medium tracking-wide">{area}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="w-full lg:w-1/2 h-[400px] lg:h-[500px] rounded-sm overflow-hidden border border-white/10 shadow-2xl"
            >
              <ServiceMap />
            </motion.div>
          </div>
        </div>
      </section>

      {/* NY GLN IMPORTS */}
      <section id="imports" className="py-24 bg-[#D4AF37] text-[#001F3F] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532635221-7bb24003b3ee')] opacity-10 mix-blend-multiply bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-2xl"
          >
            <span className="inline-block bg-[#001F3F] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 mb-6 rounded-sm">
              Coming Soon
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">NY GLN IMPORTS™</h2>
            <h3 className="text-xl md:text-2xl font-serif mb-6 opacity-90">Premium Food Imports & Distribution</h3>
            <p className="text-lg font-medium leading-relaxed opacity-90">
              Premium imported specialty foods, olive oils, truffles, pasta, sauces, and gourmet products for restaurants, hospitality, and retail partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl md:text-5xl font-serif mb-6 text-foreground">Request a Quote</h2>
              <div className="w-16 h-[2px] bg-[#D4AF37] mb-8" />
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12">
                Tell us about your event, gathering, or culinary needs. The CHEF TY™ team will help create the right experience for your occasion.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-serif text-xl mb-3 text-foreground">Contact Information</h4>
                  <ul className="space-y-4 text-muted-foreground">
                    <li>
                      <a href="tel:5169912326" className="flex items-center gap-3 hover:text-[#001F3F] transition-colors">
                        <span className="font-medium text-foreground">Phone:</span> (516) 991-2326
                      </a>
                    </li>
                    <li>
                      <a href="mailto:nyglnculinary@gmail.com" className="flex items-center gap-3 hover:text-[#001F3F] transition-colors">
                        <span className="font-medium text-foreground">Email:</span> nyglnculinary@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/nyglnculinary" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#001F3F] transition-colors">
                        <span className="font-medium text-foreground">Instagram:</span> @nyglnculinary
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:col-span-3 bg-card p-8 md:p-10 border border-border shadow-lg rounded-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                    <Input 
                      id="name" name="name" value={formData.name} onChange={handleInputChange} 
                      placeholder="Full Name" required 
                      className="bg-background rounded-none h-12 focus-visible:ring-[#001F3F]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                    <Input 
                      id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} 
                      placeholder="Email Address" required 
                      className="bg-background rounded-none h-12 focus-visible:ring-[#001F3F]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-medium">Phone Number</Label>
                    <Input 
                      id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} 
                      placeholder="(555) 123-4567" 
                      className="bg-background rounded-none h-12 focus-visible:ring-[#001F3F]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eventDate" className="text-foreground font-medium">Event Date</Label>
                    <Input 
                      id="eventDate" name="eventDate" type="date" value={formData.eventDate} onChange={handleInputChange} 
                      className="bg-background rounded-none h-12 focus-visible:ring-[#001F3F]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-foreground font-medium">Number of Guests</Label>
                    <Input 
                      id="guests" name="guests" type="number" min="1" value={formData.guests} onChange={handleInputChange} 
                      placeholder="E.g. 50" 
                      className="bg-background rounded-none h-12 focus-visible:ring-[#001F3F]"
                    />
                  </div>
                  <div className="space-y-2 col-span-1 md:col-span-2">
                    <Label htmlFor="location" className="text-foreground font-medium">Event Location / Town</Label>
                    <Input 
                      id="location" name="location" value={formData.location} onChange={handleInputChange} 
                      placeholder="City, Venue, or Zip Code" 
                      className="bg-background rounded-none h-12 focus-visible:ring-[#001F3F]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventType" className="text-foreground font-medium">Type of Event</Label>
                  <Input 
                    id="eventType" name="eventType" value={formData.eventType} onChange={handleInputChange} 
                    placeholder="Private Dinner, Wedding, Corporate, etc." 
                    className="bg-background rounded-none h-12 focus-visible:ring-[#001F3F]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">Message / Details</Label>
                  <Textarea 
                    id="message" name="message" value={formData.message} onChange={handleInputChange} 
                    placeholder="Tell us more about your vision, dietary requirements, or special requests..." 
                    required
                    className="bg-background rounded-none min-h-[120px] resize-none focus-visible:ring-[#001F3F]"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#001F3F] text-white hover:bg-[#001F3F]/90 rounded-none h-14 text-sm font-bold tracking-widest uppercase transition-all"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;