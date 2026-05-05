import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import IntroVideo from "@/components/IntroVideo";
import About from "@/components/About";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <IntroVideo />
        <About />
        <Work />
      </main>
      <Footer />
    </>
  );
}
