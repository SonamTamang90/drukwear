import MarqueeBox from "@/components/MarqueeBox";
import FlashSale from "@/components/sections/FlashSale";
import Hero from "@/components/sections/Hero";
import NewArrival from "@/components/sections/NewArrival";
import Services from "@/components/sections/Services";

function Home() {
  return (
    <>
      <Hero />
      <MarqueeBox />
      <NewArrival />
      <FlashSale />
      <Services />
    </>
  );
}

export default Home;
