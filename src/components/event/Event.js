import { Pages } from "../Pages";
import "../../css/pageStyle.css";

import Plant from "../common/transitionalMotion/Plant";

function Event() {
  return (
    <>
      <Plant />
      <p></p>
      <img src={`${process.env.PUBLIC_URL}/img/backGround/plant.jpg`} className="backGroundImage responsiveWidth" />
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