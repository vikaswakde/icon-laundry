import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import WhyChooseUs from '@/components/WhyChooseUs';
import OurServices from '@/components/OurServices';
import RequestService from '@/components/RequestService';
import Footer from '@/components/Footer';
import AppPromotion from '@/components/AppPromotion';
import ProcessStages from '@/components/ProcessStages';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <OurServices />
      <ProcessStages />
      <AppPromotion />
      <Testimonials />
      <FAQ />
      <RequestService />
      <Footer />
    </main>
  );
}
