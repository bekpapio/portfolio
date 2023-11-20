import DotList from "./DotList";
import ProgressBar from "./ProgressBar";

export default function Skills() {
  const skillList = [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "TypeScript",
    "TypeScript",
  ];

  return (
    <div>
      <div className="mb-3 space-y-2">
        <h1 className="text-white text-center text-2xl font-bold">Skills</h1>
        <div className="w-[60px] h-[2px] bg-primary mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="md:w-3/4 mx-auto">
          <h1 className="font-bold text-primary mb-2 text-center text-xl">
            Programming Languages
          </h1>
          <div className="grid grid-cols-2 gap-5">
            <ProgressBar progress={100} color="primary" />
            <ProgressBar progress={100} color="primary" />
            <ProgressBar progress={50} color="primary" />
            <ProgressBar progress={100} color="primary" />
            <ProgressBar progress={100} color="primary" />
            <ProgressBar progress={75} color="primary" />
            <ProgressBar progress={90} color="primary" />
          </div>
        </div>
        <div className=" md:w-3/4 mx-auto">
          <h1 className="font-bold text-primary mb-2 text-center text-xl">
            Framework/Libraries
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {skillList.map((skill, index) => (
              <div key={index}>
                <DotList item={skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
