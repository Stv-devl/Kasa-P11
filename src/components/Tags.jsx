import React from "react";

const Tags = ({ data: { tags } }) => {
  return (
    <>
      {tags.map((tag, index) => (
        <li key={`tag${index}`} className="tag">
          {tag}
        </li>
      ))}
    </>
  );
};

export default Tags;
