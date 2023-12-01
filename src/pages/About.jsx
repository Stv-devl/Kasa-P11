import Collapses from "../components/Collapses";
import dataAbout from "../data/dataAbout";

const About = () => {
  return (
    <main>
      <img className="mountainsIgm" src="../Kalen-emsley.png" alt="mountains" />
      <div className="collapse-container-about">
        <div className="collapse-wrapper-about">
          {dataAbout.map((item, index) => (
            <Collapses
              dataDrop={item.description}
              title={item.title}
              type="desc"
              key={index}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default About;
