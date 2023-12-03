import dataAbout from "../data/dataAbout";
import CollapsesWrapper from "../components/CollapsesWrapper";

const About = () => {
  return (
    <main>
      <img className="mountainsIgm" src="../Kalen-emsley.png" alt="mountains" />
      <div className="collapse-container-about">
        <CollapsesWrapper collapseData={dataAbout} />
      </div>
    </main>
  );
};

export default About;
