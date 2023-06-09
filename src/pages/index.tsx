import { type NextPage } from "next";
//import Link from "next/link";
import Layout from "~/components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-7xl font-extrabold tracking-tight text-slate-100">
        Hello there, I&#39;m Carlos.
      </h1>
      {/* <div className="grid grid-cols-11 gap-4 sm:grid-cols-1 md:gap-8">      
        <div className="flex max-w-md flex-col rounded-lg bg-white/10 hover:bg-white/30 p-4">
          <h3 className="text-lg font-bold tracking-wider text-slate-100 ">
            I&#39;m a Software Developer and I love to create stuff
          </h3>
        </div>
      </div> */}        
    </Layout>
  );
};

export default Home;
