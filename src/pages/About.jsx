import Collapses from "../components/Collapses";
import dataAbout from "../data/dataAbout";

const About = () => {
  console.log(dataAbout);
  return (
    <main>
      <img className="mountainsIgm" src="../Kalen-emsley.png" alt="mountains" />
      <div className="collapse-container">
        <div className="collapse-wrapper about">
          {dataAbout.map((item, index) => (
            <Collapses
              dataDrop={item.description}
              title={item.title}
              type="about"
              key={index}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default About;
