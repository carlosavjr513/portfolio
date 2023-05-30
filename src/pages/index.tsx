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
      {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-lg bg-white/10 p-4 text-white hover:bg-white/20"
          href="https://create.t3.gg/en/usage/first-steps"
          target="_blank"
        >
          <h3 className="text-2xl font-bold">First Steps →</h3>
          <div className="text-lg">
            Just the basics - Everything you need to know to set up your
            database and authentication.
          </div>
        </Link>
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          href="https://create.t3.gg/en/introduction"
          target="_blank"
        >
          <h3 className="text-2xl font-bold">Documentation →</h3>
          <div className="text-lg">
            Learn more about Create T3 App, the libraries it uses, and how to
            deploy it.
          </div>
        </Link>
      </div> */}
    </Layout>
  );
};

export default Home;
