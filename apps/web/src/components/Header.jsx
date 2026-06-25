
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Updated navigation links to use absolute paths with hash routing
  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Certifications', href: '/#certifications' },
    { name: 'Contact', href: '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToElement = (targetId) => {
    const element = document.querySelector(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false); // Close the mobile menu on click

    if (href.startsWith('/#')) {
      const targetId = href.replace('/', '');
      if (location.pathname === '/') {
        // If already on the homepage, scroll directly
        scrollToElement(targetId);
      } else {
        // If on another page, navigate to homepage first, then scroll
        navigate(href);
        // Small delay to ensure the page has mounted before scrolling
        setTimeout(() => {
          scrollToElement(targetId);
        }, 100);
      }
    } else {
      // Regular page routing (e.g., /gallery)
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        /* Hide the default shadcn/ui close button specifically */
        [role="dialog"] > button.absolute.right-4.top-4 {
          display: none !important;
        }
      `}</style>

      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#001F3F] shadow-lg shadow-black/10 py-4' 
            : 'bg-[#001F3F] py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link 
              to="/#home" 
              onClick={(e) => handleNavClick(e, '/#home')}
              className="flex items-center group"
            >
              <img 
                src="https://horizons-cdn.hostinger.com/faa0a94a-a986-4d59-9827-052429046263/f78fb6253ec2ccce8cbfa26c190cdf8b.png" 
                alt="CHEF TY™ official logo" 
                className="h-16 w-16 object-contain group-hover:opacity-80 transition-opacity duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium tracking-wide text-white/90 hover:text-[#D4AF37] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                asChild
                className="bg-[#D4AF37] text-[#001F3F] hover:bg-[#D4AF37]/90 font-semibold rounded-none px-6"
              >
                <Link to="/#contact" onClick={(e) => handleNavClick(e, '/#contact')}>
                  Request a Quote
                </Link>
              </Button>
            </nav>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-white hover:text-[#D4AF37] hover:bg-white/5">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#001F3F] border-l border-white/10 w-full sm:w-[350px] p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                
                {/* Custom Close Button with Text X */}
                <SheetClose asChild>
                  <button
                    className="absolute top-6 right-6 text-white hover:text-[#D4AF37] transition-colors duration-200 bg-transparent border-none outline-none focus:outline-none"
                    aria-label="Close mobile menu"
                  >
                    <span className="text-4xl font-bold leading-none block">×</span>
                  </button>
                </SheetClose>

                <div className="flex flex-col gap-8 mt-12 px-6">
                  <div className="border-b border-white/10 pb-6">
                    <img 
                      src="https://horizons-cdn.hostinger.com/faa0a94a-a986-4d59-9827-052429046263/f78fb6253ec2ccce8cbfa26c190cdf8b.png" 
                      alt="CHEF TY™ official logo" 
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <nav className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="text-lg font-medium text-white/90 hover:text-[#D4AF37] transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    ))}
                    <div className="pt-6 border-t border-white/10">
                      <Button 
                        asChild
                        className="w-full bg-[#D4AF37] text-[#001F3F] hover:bg-[#D4AF37]/90 font-semibold rounded-none h-12"
                      >
                        <Link to="/#contact" onClick={(e) => handleNavClick(e, '/#contact')}>
                          Request a Quote
                        </Link>
                      </Button>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
