import myImage from "../assets/cvPic.jpg";
export default function AboutMe() {
  return (
    <div className="mt-5 bg-secondary p-5">
      <div className="mb-3 space-y-2">
        <h1 className="text-white text-center text-2xl font-bold">About Me</h1>
        <div className="w-[60px] h-[2px] bg-primary mx-auto"></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-3 items-center justify-center">
        <img src={myImage} alt="" className="w-[300px] md:w-[400px] mx-auto" />
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam at
          tempora quasi corrupti voluptate beatae maxime totam eius. Consequatur
          quos sequi cum delectus harum necessitatibus, assumenda iure
          cupiditate dolorem libero voluptate corporis illo tenetur dicta quo,
          quia commodi fugiat. Dolor?
        </p>
      </div>
    </div>
  );
}
