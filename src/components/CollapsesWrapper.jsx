import Collapses from "./Collapses";

const CollapsesWrapper = ({ collapseData }) => {
  return (
    <>
      {collapseData.map((data, index) => (
        <div
          key={`collapse-wrapper${index}`}
          className={`collapse-wrapper${data.type === "about" ? "-about" : ""}`}
        >
          <Collapses
            description={data.description}
            title={data.title}
            type={data.type}
          />
        </div>
      ))}
    </>
  );
};

export default CollapsesWrapper;
