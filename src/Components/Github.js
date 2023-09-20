import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <>
      <br />
      <br />
      <div >
        <div className="project-heading text-3xl pb-8 font-mono font-extrabold" >
          Days I <strong className="text-green-100">Code</strong>
        </div>
        <div className="px-5">
          <GitHubCalendar
            username="viralgupta"
            blockSize={12}
            blockMargin={5}
            fontSize={16}
            colorScheme="dark"
            color="#c084f5"
          />
        </div>
      </div>
    </>
  );
}

export default Github;
