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
            As I stated before i like storms, maybe It&apos;s because I&apos;m
            from Brazil the country that is most hit by lightning bolts in the
            entire planet an average of 70 million per year.
          </span>
          <span className="ml-1">
            And also as said i like to create things, which started with
            drawings when I was a kid and yes, storms were in the background of
            them. It didn&apos;t take long for me to like video games and from
            there expanding into passion for computers as well.
          </span>
        </p>
        <p>
          <span className="ml-5">
            While I was gaming I always had the most interest in the ones that
            allowed me to customize my own character or HUD. Which eventually
            led me to games that with macros that allowed me to control the
            behavior of certain things in my interface and addons that made it
            possible to create my very own interface. At the same time I was
            finishing my engineer major where I had my first contact with
            programming, and there I was hooked.
          </span>
        </p>
        <p>
          <span className="ml-5">
            After that I enrolled into an IT course and since than I have been
            working with software development.
          </span>
          <span className="ml-1">
            At first I had to learn it all but in the last few years I have been
            able to work with I like the most: Front-end. After all, that was my
            idea way at the start even though I didn&apos;t knew exactly what it
            was.
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
