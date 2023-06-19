import { type NextPage } from "next";
import Card from "~/components/Card";
import Layout from "~/components/Layout/Layout";
import { jobs } from "~/utils/jobs";

interface jobProps {
  id: number;
  role: string;
  company: string;
  workTime: string;
  activities: string[];
  skillsUsed: string;
}

const JobCard = ({
  role,
  company,
  workTime,
  activities,
  skillsUsed,
}: Omit<jobProps, "id">) => {
  return (
    <Card>
      <div className="py-2">
        <div className="m-3 divide-y divide-maelstrom-300 p-2 text-maelstrom-800">
          <p className="flex justify-between text-xl font-bold">
            <span>{company}</span>
            <span className="text-sm font-normal text-slate-700">
              {workTime}
            </span>
          </p>
          <div className="pt-2">
            <p className="font-semibold">{role}</p>
            {activities.map((activity, index) => {
              return (
                <p key={index} className="text-justify">
                  <span className="ml-5">{`- ${activity}`}</span>
                </p>
              );
            })}
          </div>
          <div className="my-3">
            <p className="font-semibold">Skills Used</p>
            <p className="ml-5">{`- ${skillsUsed}`}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

const About: NextPage = () => {
  return (
    <Layout title={"Experience"}>
      <h1 className="items-center text-7xl font-extrabold tracking-tight text-slate-50">
        Experience
      </h1>
      <div className="grid grid-cols-1">
        {jobs.map(({ id, role, company, workTime, activities, skillsUsed }) => {
          return (
            <JobCard
              key={id}
              role={role}
              company={company}
              workTime={workTime}
              activities={activities}
              skillsUsed={skillsUsed}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default About;
