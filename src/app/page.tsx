import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import MenuHighlights from "@/components/sections/MenuHighlights";
import About from "@/components/sections/About";
import Categories from "@/components/sections/Categories";
import Gallery from "@/components/sections/Gallery";
import Locations from "@/components/sections/Locations";
import Testimonials from "@/components/sections/Testimonials";
import CateringCTA from "@/components/sections/CateringCTA";
import ReservationCTA from "@/components/sections/ReservationCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MenuHighlights />
        <About />
        <Categories />
        <Gallery />
        <Locations />
        <Testimonials />
        <CateringCTA />
        <ReservationCTA />
      </main>
      <Footer />
    </>
  );
}
