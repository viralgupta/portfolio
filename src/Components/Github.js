import GitHubCalendar from "react-github-calendar";

function Github() {
  const windowWidth = window.innerWidth;
  const size = windowWidth < 768 ? 8 : 16;
  return (
    <>
    <br />
      <div >
        <div className="project-heading text-xl md:text-3xl pb-3 md:pb-8 font-mono font-extrabold" >
          Github <strong className="text-green-100">History</strong>
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
