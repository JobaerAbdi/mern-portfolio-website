const Intro = () => {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start p-3 justify-center gap-8 py-10">
      <h1 className="text-white">Hi, I am</h1>
      <h1 className="text-secondary text-5xl sm:text-2xl font-semibold">
        Md Jobaer Rahman
      </h1>
      <h1 className="text-white text-4xl sm:text-2xl font-semibold">
        I build think for the web
      </h1>
      <p className="text-white w-2/3 sm:text-sm">
        I am MERN stack Web Developer. Currently i am working as a React
        Developer. Also sharing my knowledge to the students that I have gained
        in my carrier through across the world.{" "}
      </p>
      <button className="text-tertiary border-2 border-tertiary px-8 py-2 rounded-xl hover:text-secondary">
        Get Started
      </button>
    </div>
  );
};

export default Intro;
