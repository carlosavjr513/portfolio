import { type NextPage } from "next";
import Card from "~/components/Card";
import Layout from "~/components/Layout/Layout";
import { jobs } from "~/utils/jobs";

const About: NextPage = () => {
  return (
    <Layout title={"Experience"}>
      <h1 className="text-7xl font-extrabold tracking-tight text-slate-50">
        Experience
      </h1>      
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center"> */}
        <Card>
          <div className="divide-y divide-maelstrom-300">
            <div className="m-5 divide-y-2 divide-maelstrom-300 p-2 text-justify text-black">
              <p className="mb-2 font-semibold text-slate-900">
                {jobs[0]?.company.toUpperCase()}
              </p>
              <p className="pt-2">{jobs[0]?.activities}</p>
            </div>
            <div className="m-5 p-2 text-justify text-slate-950">
              <p className="font-semibold">Skills Used</p>
              <p>{jobs[0]?.skillsUsed}</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="divide-y divide-maelstrom-300">
            <div className="m-5 divide-y-2 divide-maelstrom-300 p-2 text-justify text-black">
              <p className="mb-2 font-semibold text-slate-900">
                {jobs[1]?.company.toUpperCase()}
              </p>
              <p className="pt-2">{jobs[0]?.activities}</p>
            </div>
            <div className="m-5 p-2 text-justify text-slate-950">
              <p className="font-semibold">Skills Used</p>
              <p>{jobs[1]?.skillsUsed}</p>
            </div>
          </div>
        </Card>
      {/* </div> */}
    </Layout>
  );
};

export default About;

{
  /* <p className="text-slate-100 text-justify text-[2rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nibh
        non ex dapibus posuere. Duis in dui massa. Phasellus ac tortor sapien.
        Duis nec vestibulum justo. Morbi elementum arcu sapien, sed semper diam
        rhoncus vitae. Maecenas nec mauris tempor urna congue finibus vel eget
        tellus. Phasellus quis dolor ante. Sed quam orci, blandit eu rutrum at,
        vestibulum ac augue. Nam hendrerit faucibus est, at dictum nunc
        tincidunt lacinia. Cras ultrices congue placerat. Curabitur vulputate
        vulputate leo, accumsan luctus dui. Etiam consequat luctus tempus. Duis
        condimentum auctor aliquet. Donec id odio tempus, ullamcorper lacus id,
        pulvinar nulla. Pellentesque habitant morbi tristique senectus et netus
        et malesuada fames ac turpis egestas. Vivamus at accumsan lectus. Nulla
        aliquam, eros eu porttitor vulputate, nisl est pharetra ligula, et
        malesuada mauris dui sit amet mi. Vestibulum vulputate ac massa ut
        porta. Morbi pretium id libero eget finibus. Nulla facilisi. Aenean
        dignissim a nibh condimentum euismod. In vitae tincidunt justo. Nulla
        quis elit non felis pharetra volutpat. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. In in turpis lacus. Sed id faucibus
        lorem, ut euismod velit. Pellentesque sit amet mauris lacus. Ut rhoncus
        est sit amet fringilla fermentum. Ut faucibus libero non urna luctus, in
        mattis tortor lacinia. Praesent eu nulla tristique, tempus orci sed,
        molestie lacus. Praesent diam massa, dignissim eu interdum at, dictum
        non velit. Morbi feugiat lacus id justo sagittis sagittis. Maecenas at
        aliquam ipsum. Cras gravida leo a vehicula accumsan. Nulla porttitor
        ipsum semper elit lobortis, id consequat leo vestibulum. Sed mauris
        nibh, laoreet eget orci vitae, eleifend pellentesque enim. Proin rutrum
        risus in scelerisque ultrices. Pellentesque scelerisque facilisis sapien
        vitae hendrerit. Phasellus cursus mauris sed cursus blandit. Vivamus
        convallis magna augue. Curabitur non fermentum est. Mauris commodo augue
        purus, sed semper ipsum vestibulum sit amet. Quisque ac tempor orci, at
        commodo ipsum. Sed nec quam purus. Nullam nisi magna, vestibulum in
        vehicula sit amet, gravida ac eros. Suspendisse tristique gravida dui
        nec porta. Sed non odio sem. Sed non elit finibus, tincidunt metus sit
        amet, scelerisque dolor. Phasellus nec augue eget enim placerat posuere.
        In ultrices aliquet ligula vel pharetra. Fusce semper finibus elementum.
        Donec dictum eget augue sed molestie.
      </p>  */
}
