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
              <Card>
                <div className="flex min-h-[16rem] flex-col divide-y-[1px] divide-maelstrom-300 p-2">
                  <p className="text-center font-semibold">{name}</p>
                  <p className="min-h-[7rem] py-5">{description}</p>
                  <div className="flex flex-col pt-5">
                    <p className="inline-flex items-center gap-2">
                      <FaLink size={30} className="text-shaman-500" />
                      {/* prettier-ignore */}
                      <a href={url ?? "/underConstruction"} className="text-blue-600 underline">
                        Check the project
                      </a>
                    </p>
                    <p className="inline-flex items-center gap-2">
                      <FaGithub size={30} className="text-fuchsia-700" />
                      {/* prettier-ignore */}
                      <a href={gitHub ?? "/underConstruction"} className="text-blue-600 underline">
                        Check the repository
                      </a>
                    </p>
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
