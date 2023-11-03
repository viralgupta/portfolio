import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  const windowWidth = window.innerWidth;
  const size = windowWidth < 768 ? 8 : 16;
  return (
    <>
    {window.innerWidth > 768 && <br/>}
      <br />
      <div >
        <div className="project-heading text-xl md:text-3xl pb-2 md:pb-8 font-mono font-extrabold" >
          Days I <strong className="text-green-100">Code</strong>
        </div>
        <div className="md:px-5">
          <GitHubCalendar
            username="viralgupta"
            blockSize={12}
            blockMargin={5}
            fontSize={size}
            colorScheme="dark"
            color="#c084f5"
          />
        </div>
      </div>
    </>
  );
}

export default Github;
