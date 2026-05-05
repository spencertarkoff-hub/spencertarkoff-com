import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import IntroVideo from "@/components/IntroVideo";
import About from "@/components/About";
import Work from "@/components/Work";
import InField from "@/components/InField";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <IntroVideo />
        <About />
        <InField />
        <Work />
      </main>
      <Footer />
    </>
  );
}
