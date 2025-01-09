import Sub_header from "@/components/about/sub_header";
import { Header_about } from "@/components/header";
import Footer from "@/components/footer";
import Sign_up from "@/components/home/sign_up";
import Feature from "@/components/home/feature";
import {Feature_3, Feature_4} from "@/components/about/feature";
export default function About() {
  return (
    <>
      <Header_about />
      <Sub_header />
      <Feature_4 />
      <Feature_3 />
      <Feature />
      <Sign_up />
      <Footer />
    </>
  );
}
