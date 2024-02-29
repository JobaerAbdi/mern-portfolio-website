import SectionTitle from "../components/SectionTitle";
import image from "../assets/my pic.jpg";

const About = () => {
  return (
    <div>
      <SectionTitle title="About Me" />
      <div className="flex items-center gap-7">
        <img className="h-[50vh] rounded-full" src={image} />
        <div className="flex flex-col gap-7">
          <p className="text-white">
            Hello there! I am Jobaer Rahman, a passionate MERN (MongoDB,
            Express.js, React.js, Node.js) stack developer with a keen eye for
            crafting robust and efficient web applications. I thrive on solving
            complex problems and turning ideas into reality through elegant
            code.
          </p>
          <p className="text-white">
            My journey in the world of web development began with a fascination
            for creating dynamic and interactive user experiences. Over the
            years, I've honed my skills in each component of the MERN stack,
            leveraging the power of MongoDB for flexible data storage,
            harnessing the simplicity and versatility of Express.js for backend
            development, building responsive and intuitive user interfaces with
            React.js, and ensuring seamless server-side execution with Node.js.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
