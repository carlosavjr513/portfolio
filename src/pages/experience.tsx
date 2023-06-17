import classNames from "classnames";
import { type NextPage } from "next";
import Card from "~/components/Card";
import Layout from "~/components/Layout/Layout";
import { jobs } from "~/utils/jobs";

interface jobProps {
  id: number;
  company: string;
  companyColor: string;
  activities: string;
  skillsUsed: string;
}

const JobCard = ({ company, companyColor, activities, skillsUsed }: Omit<jobProps, "id">) => { 
  return (
    <Card>
      <div className="py-2">
        <fieldset className="m-3 divide-y divide-maelstrom-300 p-2 text-justify text-blue-950">
          <legend className="text-xl font-bold text-transparent">
            <span className={classNames(`${companyColor}`)}>
              {company.toUpperCase()}
            </span>
          </legend>
          <blockquote className="pt-2">
            <p className="font-semibold">Activities</p>
            <span className="ml-5">{activities}</span>
          </blockquote>
          <blockquote className="my-3">
            <p className="font-semibold">Skills Used</p>
            <span className="ml-5">{skillsUsed}</span>
          </blockquote>
        </fieldset>
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
        {jobs.map(({ id, company, companyColor, activities, skillsUsed }) => {
          return (
            <JobCard
              key={id}
              company={company}
              companyColor={companyColor}
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
