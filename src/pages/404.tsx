import { type NextPage } from "next";
import Image from "next/image";
import Layout from "~/components/Layout/Layout";

const PageNotFound: NextPage = () => {
  return (
    <Layout title="Not Found">
      <h1 className="text-7xl font-extrabold tracking-tight text-white">
        Oops! <span className="text-orange-600">404</span>
      </h1>
      <div className="flex flex-col items-start justify-center">
        <h2 className="text-3xl font-normal text-slate-100">
          Something went wrong, but don&#39;t worry...
        </h2>
        <h2 className="text-3xl font-normal text-slate-100">
          We have a team of professionals working on it.
        </h2>
      </div>
      <Image
        src="/img/patrick.webp"
        alt="experts working on 404"
        width={512}
        height={512}
      />
    </Layout>
  );
};

export default PageNotFound;
