import React from "react";

const Internal = () => {
  const h1style = {
    color: "green",
    textAlign: "center",
    border: "2px solid",
    backgroundColor: "wheat",
  };
  return (
    <div>
      <h1
        style={h1style}
      >
        Hello This is Internal CSS Styling in React App
      </h1>
    </div>
  );
};

export default Internal;
