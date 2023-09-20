import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Viral Gupta",
          "Freelancer",
          "Video Editor",
          "Web Developer",
          "IOT Developer",
          "CAD Designer",
          "Entrepreneur",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;