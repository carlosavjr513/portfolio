import { type NextPage } from "next";
import Layout from "~/components/Layout/Layout";

const About: NextPage = () => {
  return (
    <Layout title={"About"}>
      <h1 className="text-7xl font-extrabold tracking-tight text-slate-100">
        About
      </h1>
    </Layout>
  );
};

export default About;
