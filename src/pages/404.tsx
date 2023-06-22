import { type NextPage } from "next";
import Image from "next/image";
import Layout from "~/components/Layout/Layout";

const PageNotFound: NextPage = () => {
  return (
    <Layout title="Not Found">
      <h1 className="text-7xl font-extrabold tracking-tight text-white">
        Oops! <span className="text-orange-600">404</span>
      </h1>
      <h2 className="text-2xl font-semibold text-slate-100">
        Something went wrong, but don&#39;t worry...
        <br />
        We have a team of professionals working on it.
      </h2>
      <Image
        src="/img/patrick.webp"
        alt="experts working on 404"
        width={500}
        height={500}
        className="rounded-lg shadow-lg shadow-black"
      />
    </Layout>
  );
};

export default PageNotFound;
