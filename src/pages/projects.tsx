import { type NextPage } from "next";
import Image from "next/image";
import Layout from "~/components/Layout/Layout";

const PageNotFound: NextPage = () => {
  const stringText = "//TODO";
  return (
    <Layout title="Not Found">
      <h1 className="text-7xl font-extrabold tracking-tight text-white">
        Hang in there,
        <p>
          its on my <span className="text-green-600">{stringText}</span> list
        </p>
      </h1>
      <h2 className="text-3xl font-normal text-slate-100 ">
        Work in Progress...
      </h2>
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
