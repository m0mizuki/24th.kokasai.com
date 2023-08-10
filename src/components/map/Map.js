import { Pages } from "../Pages";
import backGround from "../../img/backGround/fantasy.jpg"
import openMapImg from "../../img/openMap.png";
import "../../css/pageStyle.css";
import "./mapStyle.css";
import "../common/commonStyle.css";
import PopUp from "../common/PopUp";

function Map() {
  function openMap(){
    const target = document.getElementById("popUp"); //popUpはPopUp.jsの要素,このファイルに無いので分かりづらい
    if(target.classList.contains("invisible")){
      target.classList.remove("invisible");
    }
  }

  return (
    <>
      <PopUp>
        <iframe id="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.3668851173343!2d139.02025627574992!3d36.37611147237107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601e8cc32e0daf8d%3A0x207d7e6356e87ed8!2z576k6aas5bel5qWt6auY562J5bCC6ZaA5a2m5qCh!5e0!3m2!1sja!2sjp!4v1691332826280!5m2!1sja!2sjp" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </PopUp>

      <h1>{Pages.map.displayName}</h1>
      <img src={backGround} className="backGroundImage" />
      <div className="contents">
        <br />
        <p>あいうえお</p><br />
        <p>かきくけこ</p><br />
        <p>さしすせそ</p><br />

        <p><input type="image" id="openMapButton" src={openMapImg} onClick={()=>openMap()} /></p>
        <br />

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