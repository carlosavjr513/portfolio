import { type NextPage } from "next";
import Card from "~/components/Card";
import Layout from "~/components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-7xl font-extrabold tracking-tight text-slate-100">
        Hello there, I&apos;m Carlos.
      </h1>
      <div className="grid grid-cols-1">
        <Card>
          <div className="p-3">
            <h3 className="font-semibold tracking-wider text-shaman-800">
              I&apos;m a FullStack Software Developer with focus in Frontend and I love creating stuff.
            </h3>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Home;
