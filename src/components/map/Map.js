import { Pages } from "../Pages";
import backGround from "../../img/backGround/fantasy.jpg";
import "../../css/pageStyle.css";
import "../common/commonStyle.css";
import "./mapStyle.css";
import campusMap_1 from "../../img/campusMap_1.png";

function Map() {
  var mouseDown={x:0,y:0};

  function mapTouchStart(e) {
    e.preventDefault();
    mouseDown.x=e.clientX;
    //alert(e.clientX);
  }

  function mapTouchMove(e){
    e.preventDefault();
    //alert(e.clientX);
    alert(e.screenX);
  }

  return (
    <>
      <h1>{Pages.map.displayName}</h1>

      <div id="mapCanvas" onTouchStart={mapTouchStart} onTouchMove={mapTouchMove} onClick={mapTouchStart}>
        <img className="campusMap_1" src={campusMap_1} />
      </div>

      <img src={backGround} className="backGroundImage" />
      <div className="contents">
        <br />
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

export default Map;