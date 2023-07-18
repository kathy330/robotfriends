import React from "react";

function Scroll(props) {
  return (
    <div
      style={{
        overflowY: "scroll",
        marginTop: "40px",
        padding: "20px",
        background: "rgba(255,255,255,0.2)",
        minHeight: "500px",
      }}
    >
      {props.children}
    </div>
  );
}

export default Scroll;
