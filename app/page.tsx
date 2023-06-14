import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Enterprise from "@/components/Enterprise";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Tagline from "@/components/Tagline";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Tagline />
      <Clients />
      <Products />
      <Enterprise />
      <Contact />
      <Footer />
    </main>
  );
}
