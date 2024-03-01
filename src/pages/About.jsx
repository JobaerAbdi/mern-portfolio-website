import SectionTitle from "../components/SectionTitle";
import image from "../assets/my pic.jpg";

const About = () => {
  const skills = [
    "Javascript",
    "React",
    "Node",
    "Express",
    "MongoDb",
    "Firebase",
  ];
  return (
    <div>
      <SectionTitle title="About Me" />
      <div className="flex items-center gap-7 sm:flex-col">
        <div className="w-2/5 sm:w-full">
          <img className="h-[60vh] rounded-full" src={image} />
        </div>
        <div className="flex flex-col gap-7 w-3/5 sm:w-full">
          <p className="text-white sm:text-sm">
            Hello there! I am Jobaer Rahman, a passionate MERN (MongoDB,
            Express.js, React.js, Node.js) stack developer with a keen eye for
            crafting robust and efficient web applications. I thrive on solving
            complex problems and turning ideas into reality through elegant
            code.
          </p>
          <p className="text-white sm:text-sm">
            My journey in the world of web development began with a fascination
            for creating dynamic and interactive user experiences. Over the
            years, I have honed my skills in each component of the MERN stack,
            leveraging the power of MongoDB for flexible data storage,
            harnessing the simplicity and versatility of Express.js for backend
            development, building responsive and intuitive user interfaces with
            React.js, and ensuring seamless server-side execution with Node.js.
          </p>
        </div>
      </div>

      <div className="py-10">
        <h1 className="text-tertiary font-semibold">
          Here are a few technologies i have working with recently.{" "}
        </h1>
        <div className="flex flex-wrap gap-8 mt-8">
          {skills.map((skill) => (
            <h1
              key="index"
              className="text-tertiary border-2 border-tertiary px-7 py-2 rounded-lg"
            >
              {skill}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
