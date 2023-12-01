import React from "react";

const Tags = ({ data }) => {
  return (
    <>
      {data.tags.map((tag, index) => (
        <li key={`tag${index}`} className="tag">
          {tag}
        </li>
      ))}
    </>
  );
};

export default Tags;
