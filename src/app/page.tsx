import { Header } from "@/components/header";
import Hero from "@/components/home/hero";
import Feature from "@/components/home/feature";
import { NewCeramics, PopularProducts } from "@/components/home/listing";
import Sign_up from "@/components/home/sign_up";
import Feature_2 from "@/components/home/feature_2";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <NewCeramics />
      <PopularProducts />
      <Sign_up />
      <Feature_2 />
      <Footer />
    </>
  );
}
