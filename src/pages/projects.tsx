import { type NextPage } from "next";
import { FaGithub, FaLink } from "react-icons/fa6";
import Card from "~/components/Card";
import Layout from "~/components/Layout/Layout";
import { projects } from "~/utils/projects";

const Projects: NextPage = () => {
  return (
    <Layout title="Projects">
      <h1 className="items-center text-7xl font-extrabold tracking-tight text-slate-50">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map(({ name, description, url, gitHub }, index) => {
          return (
            <div key={index}>
              <Card className="px-2 py-4">
                <div className="flex flex-col divide-y-[1px] divide-maelstrom-300">
                  <p className="pb-2 text-center font-semibold">{name}</p>
                  <p className="min-h-[7rem] py-3 text-justify">
                    <span className="ml-5">{description}</span>
                  </p>
                  <div className="flex flex-col pt-5">
                    <div className="inline-flex items-center gap-2">
                      {url && (
                        <>
                          <FaLink size={30} className="text-shaman-500" />
                          <a href={url} className="text-blue-600 underline">
                            Project
                          </a>
                        </>
                      )}
                    </div>
                    <div className="inline-flex items-center gap-2">
                      {gitHub && (
                        <>
                          <FaGithub size={30} className="text-purple-600" />
                          <a href={gitHub} className="text-blue-600 underline">
                            Repository
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Projects;
