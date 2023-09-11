import { Pages } from "../Pages";
import backGround from "../../img/backGround/plant.jpg"
import "../../css/pageStyle.css";

import Plant from "../common/transitionalMotion/Plant";

function Event() {
  return (
    <>
      <Plant />
      <p></p>
      <img src={backGround} className="backGroundImage responsiveWidth" />
      <div className="contents">
        <div className="contents_innerBlock">
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

      </div>
    </>
  );
}

export default Event;  