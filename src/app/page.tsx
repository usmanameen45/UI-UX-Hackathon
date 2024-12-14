import Header from "@/components/header";
import Hero from "@/components/home/hero";
import Feature from "@/components/home/feature";
import { Listing_01, Listing_02 } from "@/components/home/listing";
import Sign_up from "@/components/home/sign_up";
import Feature_2 from "@/components/home/feature_2";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className="w-full">
        <div className="max-w-[1440px] mx-auto">
          <Header />
          <Hero />
          <Feature />
          <Listing_01 />
          <Listing_02 />
          <Sign_up />
          <Feature_2 />
          <Footer />
        </div>
      </main>
    </>
  );
}
