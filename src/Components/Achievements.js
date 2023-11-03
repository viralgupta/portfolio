import AchievementCard from './smallComponents/AchievementCard'

function Achievements() {
  return (
    <>
      <br />
      {window.innerWidth > 768 && <br />}
      <div >
        <div className="project-heading text-xl md:text-3xl md:mb-8 mb-3 font-mono font-extrabold" >
          My <strong className="text-green-100">Achievements</strong>
        </div>
        <div className="w-full flex flex-wrap md:p-5 p-2">
          <AchievementCard image={"Assets/Achievements/datakon.jpg"} name={"Datakon Winner"} type={"DSBS Department"} link={"https://drive.google.com/file/d/1atoctL6grC4eXaW70VF0vDVRQ0FjXDik/view?usp=drive_link"} />
          <AchievementCard image={"Assets/Achievements/app-a-thon.jpg"} name={"App-A-Thon Winner"} type={"CINTEL Association"} link={"https://drive.google.com/file/d/13ZGV8TPKKR2RO2940XOdoShvgsohLjMu/view?usp=drive_link"} />
          <AchievementCard image={"Assets/Achievements/tech-mesh.jpg"} name={"Tech Mesh 23 Winner"} type={"C-Tech Department"} link={"https://drive.google.com/file/d/15_6BcJfBnNR2mxhhI06GM2JU-uie2dwv/view?usp=drive_link"} />
        </div>
      </div>
    </>
  );
}

export default Achievements;
