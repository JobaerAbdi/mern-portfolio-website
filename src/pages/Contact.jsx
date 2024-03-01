import SectionTitle from "../components/SectionTitle";
import image from "../assets/ju.jpg";

const Contact = () => {
  const user = {
    name: "Jobaer Rahman",
    age: 30,
    gender: "male",
    email: "jobaerrahman89@gmail.com",
    contact: "01722765438",
  };

  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex sm:flex-col gap-10 items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-tertiary">{"{"}</p>
          {Object.keys(user).map((person) => (
            <p key={person.id} className="text-tertiary pl-8 text-sm">
              <span>{person}</span> : <span>{user[person]}</span>
            </p>
          ))}
          <p className="text-tertiary">{"}"}</p>
        </div>
        <div>
          <img className="w-80 h-72  rounded-full" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
