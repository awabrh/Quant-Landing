import Clients from "@/components/Clients";
import Enterprise from "@/components/Enterprise";
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
    </main>
  );
}
