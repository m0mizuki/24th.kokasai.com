import { Pages } from "../Pages";
import backGround from "../../img/backGround/space.jpg"
import "../../css/pageStyle.css";

function Project() {
  return (
    <>
      <h1>{Pages.project.displayName}</h1>
      <img src={backGround} className="backGroundImage" />
      <div className="contents">
        <p>あいうえお</p><br />
        <p>かきくけこ</p><br />
        <p>さしすせそ</p><br />
        <p>たちつてと</p><br />
        <p>なにぬねの</p><br />
        <p>はひふへほ</p><br />
        <p>まみむめも</p><br />
        <p>やゆよ</p><br />
        <p>らりるれろ</p><br />
        <p>わをん</p>
      </div>
    </>
  );
}

export default Project;