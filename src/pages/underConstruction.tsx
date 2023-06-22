import { type NextPage } from "next";
import Image from "next/image";
import Layout from "~/components/Layout/Layout";

const PageNotFound: NextPage = () => {
  return (
    <Layout title="Under Construction">
      <Image
        src="/img/underConstruction.webp"
        alt="under construction"
        width={410}
        height={410}
        className="rounded-lg shadow-lg shadow-black"
      />
      <h2 className="text-3xl font-extrabold text-slate-100">
        <p className="rotate-3 pb-5">
          I&#39;m currently working on something else so,
        </p>
        <p className="-rotate-6 text-right">
          this is on my backlog right now.
        </p>
        <div className="ml-10 flex pt-2">
          <p className="ml-10 rotate-12">It&#39;s not ideal but it is what</p>
          <p className="-rotate-12">it is and I&#39;ll deal with it in</p>
        </div>
        <p className="pt-9 -rotate-12">due time, I appreciate the understanding</p>
        <p className="font-semibold text-end -rotate-12">Everything is under control as you can see :D</p>
      </h2>
    </Layout>
  );
};

export default PageNotFound;
