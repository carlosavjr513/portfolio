import { type NextPage } from "next";
import Card from "~/components/Card";
//import Link from "next/link";
import Layout from "~/components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-7xl font-extrabold tracking-tight text-slate-100">
        Hello there, I&#39;m Carlos.
      </h1>
      <div className="grid grid-cols-1">
        <Card>
          <div className="p-3">
            <h3 className="font-semibold tracking-wider text-shaman-800">
              I&#39;m a Software Developer, I like storms and creating stuff.
            </h3>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Home;
