import { type NextPage } from "next";
import Layout from "~/components/Layout";

const About: NextPage = () => {
  return (
    <Layout title={'About Me'}>
      <h1 className="text-5xl font-extrabold tracking-tight text-slate-100 sm:text-[5rem]">
        About Me
      </h1>
    </Layout>
  );
};

export default About;
