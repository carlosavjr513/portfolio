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
      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <Card>
                <div>teste</div>
                {project.name}
              </Card>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Projects;
