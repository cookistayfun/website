import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HomePage from '@/pages/HomePage.jsx';
import GalleryPage from '@/pages/GalleryPage.jsx';
import PaymentDuePage from '@/pages/PaymentDuePage.jsx';
import { Spinner } from '@/components/ui/spinner';
import { useSiteAvailability } from '@/hooks/useSiteAvailability';

function AppContent() {
  const { isAvailable, isLoading } = useSiteAvailability();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#001F3F] flex items-center justify-center">
        <Spinner className="size-10 text-[#D4AF37]" />
      </div>
    );
  }

  if (!isAvailable) {
    return <PaymentDuePage />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
      <Toaster 
        position="bottom-right" 
        toastOptions={{
          style: {
            background: '#001F3F',
            color: 'white',
            border: '1px solid #D4AF37'
          }
        }} 
      />
    </BrowserRouter>
  );
}

export default App;