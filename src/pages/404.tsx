import { type NextPage } from "next";
import Layout from "~/components/Layout";
import Image from 'next/image'

const PageNotFound: NextPage = () => {
  return (
    <>
    <Layout title='Not Found'>
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Oops! <span className="text-orange-600">404</span>
      </h1>
      <h2 className="text-3x1 font-black text-slate-100">
        Don&#39;t worry we have a team of Experts working on it
      </h2>    
      <Image 
        src='/patrick.png'
        alt='experts working on 404'
        width={512}
        height={512}
      />
    </Layout>
    </>
  );
};

export default PageNotFound;
