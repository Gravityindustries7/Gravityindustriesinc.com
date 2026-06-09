import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AppointmentForm from '@/components/AppointmentForm';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <AppointmentForm />
      <Contact />
    </>
  );
}