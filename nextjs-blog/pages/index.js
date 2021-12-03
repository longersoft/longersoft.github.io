import Head from "next/head";
import Layout from "../components/Layout";
// import Loader from "../components/Loader";
import HomeSlider from "../components/HomeSlider";
// import About from "../components/About";
// import Services from "../components/Services";
// import Features from "../components/Features";
// import Skills from "../components/Skills";
// import Experiences from "../components/Experiences";
// import Portfolio from "../components/Portfolio";
// import ContactText from "../components/ContactText";
// import Pricing from "../components/Pricing";
// import Blog from "../components/Blog";
// import Testimonial from "../components/Testimonial";
// import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Long Vu's Portfolio</title>
      </Head>

      <HomeSlider />
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Features /> */}
      {/* <Skills /> */}
      {/* <Experiences /> */}
      {/* <Portfolio /> */}
      {/* <ContactText /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Testimonial /> */}
    </Layout>
  );
}
