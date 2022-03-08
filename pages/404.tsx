import { motion } from "framer-motion";
import Head from "next/head";
import Custom404 from "../components/Custom404";

const Home = () => {
  return (
    <>
      <Head>
        <title>Not found | Rolling Dinos</title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <Custom404 />
      </motion.div>
    </>
  );
};

export default Home;
