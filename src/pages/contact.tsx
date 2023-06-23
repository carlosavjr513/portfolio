import { type NextPage } from "next";
import Card from "~/components/Card";
import Layout from "~/components/Layout/Layout";
import SvgIcon from "~/components/SvgIcon";

const About: NextPage = () => {
  return (
    <Layout title={"Contact"}>
      <h1 className="text-7xl font-extrabold tracking-tight text-slate-100">
        Contact
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <Card className="flex flex-col items-center justify-center p-2">
          <a href="https://www.linkedin.com/in/carlos-alberto-valerio-junior-7134b0139/">
            <SvgIcon name="linkedin" size={150} className="text-shaman-500" />
          </a>
        </Card>
        <Card className="flex flex-col items-center justify-center p-2">
          <a href="https://github.com/carlosavjr513">
            <SvgIcon name="github" size={150} className="text-purple-600" />
          </a>
        </Card>
      </div>
    </Layout>
  );
};

export default About;
