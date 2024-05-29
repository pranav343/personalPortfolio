import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Facts from "@/components/Facts";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/featuredProjects";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-wite/[0.02]">
      <HeroSection></HeroSection>
      <FeaturedProjects />
      <AboutUs />
      <Facts />
      <ContactUs />
      <Footer />
    </main>
  );
}
