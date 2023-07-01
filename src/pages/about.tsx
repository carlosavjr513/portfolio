import { type NextPage } from "next";
import Card from "~/components/Card";
import Layout from "~/components/Layout/Layout";

const About: NextPage = () => {
  return (
    <Layout title={"About"}>
      <h1 className="text-7xl font-extrabold tracking-tight text-slate-100">
        About
      </h1>
      <Card className="max-w-4xl p-4 text-justify text-maelstrom-700">
        <p>
          <span className="ml-5">
            Let me tell a litle bit about me, first of all: I like storms, maybe
            It&apos;s because I&apos;m from Brazil the country that is most hit
            by lightning bolts in the entire planet an average of 70 million per
            year.
          </span>
          <span className="ml-1">
            Another thing I like is to create things, which started with
            drawings when I was a kid. It didn&apos;t take long for me to like
            video games and also computers as well.
          </span>
        </p>
        <p>
          <span className="ml-5">
            While I was gaming I always had the most interest in the ones that
            gave me more freedom of customization. Which eventually led me to
            games that with macros that allowed me to control the behavior of
            certain things in my interface and addons that made it possible to
            create my very own interface.
          </span>
          <span className="ml-1">
            At the same time I was finishing my engineer major where I had my
            first contact with programming, and that&apos;s when i found out
            what I liked.
          </span>
        </p>
        <p>
          <span className="ml-5">
            After that I enrolled into an IT course, and I have been working
            with software development ever since.
          </span>
          <span className="ml-1">
            And in the last few years I have been able to work with what I like
            the most: Front-end.
          </span>
        </p>
        <p>
          <span className="ml-5">
            Nowadays I strive to keep learning more and improving my coding
            skills.
          </span>
        </p>
      </Card>
    </Layout>
  );
};

export default About;
