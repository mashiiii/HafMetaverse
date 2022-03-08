import { motion } from "framer-motion";
import Head from "next/head";
import Hero from "../components/Hero";
import Roadmap from "../components/Roadmap";
import Social from "../components/Social";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Head>
        <title>Haf Metaverse</title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <Header />
        <Hero />
        <Social />
        <Roadmap />
        <Team />
        <Footer />
      </motion.div>
    </>
  );
};

export default Home;
