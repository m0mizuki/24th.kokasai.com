import { Pages } from "../Pages";
import backGround from "../../img/backGround/plant.jpg"
import "../../css/pageStyle.css";

function Event() {
  return (
    <>
      <h1>{Pages.event.displayName}</h1>
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

export default Event;  