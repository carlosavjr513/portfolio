import { type NextPage } from "next";
import Card from "~/components/Card";
import Layout from "~/components/Layout/Layout";
import { projects } from "~/utils/projects";

const Projects: NextPage = () => {
  return (
    <Layout title="Projects">
      <h1 className="items-center text-7xl font-extrabold tracking-tight text-slate-50">
        Projects
      </h1>
      <div className="grid grid-cols-1 justify-items-stretch md:grid-cols-2">
        {projects.map(({ image, name }, index) => {
          return (
            <div key={index} className="">
              <Card>
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={name}
                    width={500}
                    className="easy-in-out rounded-t-md p-5 duration-500 hover:rotate-[720deg]"
                  />
                  <fieldset className="p-2">
                    <legend>{name}</legend>
                    <blockquote>teste</blockquote>
                    <blockquote>teste</blockquote>
                  </fieldset>
                </figure>
              </Card>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Projects;
