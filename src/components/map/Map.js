import { Pages } from "../Pages";
import backGround from "../../img/backGround/fantasy.jpg";
import "../../css/pageStyle.css";
import "../common/commonStyle.css";
import "./mapStyle.css";
import campusMap_1 from "../../img/campusMap_1.png";
import mapObjectIcon from "../../img/tipIcon.png";
import projectData from "../../json/projectData.json";

import { useEffect, useRef } from "react";

function Map() {
  var prePos0 = { x: 0, y: 0 }; //指1本目
  var prePos1 = { x: 0, y: 0 }; //指2本目
  var preDis = 0; //指1本目と2本目の距離
  var preMidPos = { x: 0, y: 0 }; //指1本目と2本目の中間の座標
  var mapPos = { x: 0, y: 0 };
  const mapWidth = 500; //画像によるので読み込めるようにする
  var mapSize = mapWidth;
  var isMouseDown = 0; //マウスが押されたか

  //1度だけ実行
  useEffect(() => {
    //2回実行されないよう一時的にindex.jsの<React.StrictMode>を外している

    CreateMapObjects();

  }, []);


  //置かれた指の位置を取得(指)
  function SetPrePos(e) {
    //e.preventDefault();
    prePos0.x = e.touches[0].clientX;
    prePos0.y = e.touches[0].clientY;

    if (e.touches.length == 2) {
      prePos1.x = e.touches[1].clientX;
      prePos1.y = e.touches[1].clientY;
      preMidPos.x = (prePos0.x + prePos1.x) / 2;
      preMidPos.y = (prePos0.y + prePos1.y) / 2;
      preDis = Math.hypot(prePos1.x - prePos0.x, prePos1.y - prePos0.y); //2本の指の距離
    }
  }
  //クリックされたマウスの位置を取得(マウス)
  function SetPrePos_mouse(e) {
    e.preventDefault();
    isMouseDown = 1;
    prePos0.x = e.clientX;
    prePos0.y = e.clientY;
  }

  //マップのスクロール(指)
  function ScrollMap(e) {
    e.preventDefault();
    if (e.touches.length == 1) {
      const pos = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };

      mapPos.x += pos.x - prePos0.x;
      mapPos.y += pos.y - prePos0.y;

      prePos0.x = pos.x;
      prePos0.y = pos.y;

      SetMapPos(mapPos.x, mapPos.y, mapSize);
    }
    else if (e.touches.length == 2) {

      prePos0.x = e.touches[0].clientX;
      prePos0.y = e.touches[0].clientY;
      prePos1.x = e.touches[1].clientX;
      prePos1.y = e.touches[1].clientY;
      const midPos = {
        x: (prePos0.x + prePos1.x) / 2,
        y: (prePos0.y + prePos1.y) / 2
      }
      let dis = Math.hypot(prePos1.x - prePos0.x, prePos1.y - prePos0.y); //2本の指の距離

      let campusMap = document.getElementById("mapMovingBox"); //画像によるので引数で変えられるようにする
      let campusMapBounds = campusMap.getBoundingClientRect();

      const zoomRate = 2 * (dis - preDis) * mapSize / mapWidth;
      mapSize += zoomRate; //ズームイン・アウト

      mapPos.x += zoomRate * (campusMapBounds.left - midPos.x) / mapSize;
      mapPos.y += zoomRate * (campusMapBounds.top - midPos.y) / mapSize;

      preDis = dis;

      //2本指での移動
      mapPos.x += midPos.x - preMidPos.x;
      mapPos.y += midPos.y - preMidPos.y;
      preMidPos.x = midPos.x;
      preMidPos.y = midPos.y;

      SetMapPos(mapPos.x, mapPos.y, mapSize);

      //一定の拡大倍率になったら表示
      if (mapSize >= 800 && mapSize - zoomRate < 800) {
        let mapObjectBox = document.getElementsByClassName("mapObjectBox");
        for (let i = 0; i < mapObjectBox.length; i++) {
          mapObjectBox[i].classList.remove("invisible");
        }
      }
      else if (mapSize < 800 && mapSize - zoomRate >= 800) {
        let mapObjectBox = document.getElementsByClassName("mapObjectBox");
        for (let i = 0; i < mapObjectBox.length; i++) {
          mapObjectBox[i].classList.add("invisible");
        }
      }
    }
  }
  //マップのスクロール(マウス)
  function ScrollMap_mouse(e) {
    e.preventDefault();
    if (isMouseDown == 1) {
      const pos = {
        x: e.clientX,
        y: e.clientY
      };

      mapPos.x += pos.x - prePos0.x;
      mapPos.y += pos.y - prePos0.y;

      prePos0.x = pos.x;
      prePos0.y = pos.y;

      SetMapPos(mapPos.x, mapPos.y, mapSize);
    }
  }
  //マップのズーム(マウス)
  function ZoomMap_mouse(e) {
    e.preventDefault();
    const pos = {
      x: e.clientX,
      y: e.clientY
    };

    let campusMap = document.getElementById("mapMovingBox"); //画像によるので引数で変えられるようにする
    let campusMapBounds = campusMap.getBoundingClientRect();

    const zoomRate = e.deltaY * -0.4 * mapSize / mapWidth;
    mapSize += zoomRate; //ズームイン・アウト

    mapPos.x += zoomRate * (campusMapBounds.left - pos.x) / mapSize;
    mapPos.y += zoomRate * (campusMapBounds.top - pos.y) / mapSize;

    SetMapPos(mapPos.x, mapPos.y, mapSize);

    //一定の拡大倍率になったら表示
    if (mapSize >= 800 && mapSize - zoomRate < 800) {
      let mapObjectBox = document.getElementsByClassName("mapObjectBox");
      for (let i = 0; i < mapObjectBox.length; i++) {
        mapObjectBox[i].classList.remove("invisible");
      }
    }
    else if (mapSize < 800 && mapSize - zoomRate >= 800) {
      let mapObjectBox = document.getElementsByClassName("mapObjectBox");
      for (let i = 0; i < mapObjectBox.length; i++) {
        mapObjectBox[i].classList.add("invisible");
      }
    }
  }

  //マップが瞬間移動しないようにする(指)
  function SetEndPos(e) {
    //e.preventDefault();
    if (e.touches.length == 1) {
      prePos0.x = e.touches[0].clientX;
      prePos0.y = e.touches[0].clientY;
    }
  }
  //マウスが押されていない判定にする(マウス)
  function SetEndPos_mosue(e) {
    //e.preventDefault();
    isMouseDown = 0;
  }

  //マップの位置,大きさを設定
  function SetMapPos(mapPosX, mapPosY, mapSize) {
    let campusMap = document.getElementById("mapMovingBox");
    campusMap.style.width = mapSize + "px";
    campusMap.style.left = mapPosX + "px";
    campusMap.style.top = mapPosY + "px";
  }


  function CreateMapObjects() {
    const mapMovingBox = document.getElementById("mapMovingBox");

    //マップ上のアイコンを生成
    for (let i = 1; i < projectData.length; i++) {
      for (let j = 1; j < projectData[i].length; j++) {
        //mapObjectImage,mapObjectTextはmapObjectBoxの子要素
        //mapObjectBoxはmapMovingBoxの子要素になる
        let mapObjectBox = document.createElement("div");
        mapObjectBox.classList.add("mapObjectBox");
        mapObjectBox.classList.add("invisible");
        mapObjectBox.style.top = projectData[i][j].posTop;
        mapObjectBox.style.left = projectData[i][j].posLeft;

        let mapObjectImage = document.createElement("input");
        mapObjectImage.type = "image";
        mapObjectImage.src = mapObjectIcon;
        mapObjectImage.classList.add("mapObjectImage");
        mapObjectImage.onclick = ToProjectDetail;
        mapObjectImage.id = i + "-" + j;

        let mapObjectText = document.createElement("p");
        mapObjectText.classList.add("mapObjectText");
        mapObjectText.innerText = projectData[i][j].groupName;

        mapObjectBox.appendChild(mapObjectImage);
        mapObjectBox.appendChild(mapObjectText);

        mapMovingBox.appendChild(mapObjectBox);
      }
    }

  }


  //パッシブでない関数を呼び出す
  const circleRef = useRef(null);
  useEffect(() => {
    circleRef.current.addEventListener("touchstart", SetPrePos, { passive: false });
    circleRef.current.addEventListener("touchmove", ScrollMap, { passive: false });
    circleRef.current.addEventListener("touchend", SetEndPos, { passive: false });

    circleRef.current.addEventListener("wheel", ZoomMap_mouse, { passive: false });
    return (() => {
      circleRef.current.removeEventListener("touchstart", SetPrePos);
      circleRef.current.removeEventListener("touchmove", ScrollMap);
      circleRef.current.removeEventListener("touchend", SetEndPos);

      circleRef.current.removeEventListener("wheel", ZoomMap_mouse);
    });
  });


  //企画詳細ページに移動
  function ToProjectDetail() {
    const ab = this.id.split("-");
    window.location.assign(Pages.projectDetail.path + "?a=" + ab[0] + "&b=" + ab[1]);
  }


  return (
    <>
      <div id="mapCanvas" className="mapCanvas" ref={circleRef} onMouseDown={SetPrePos_mouse} onMouseMove={ScrollMap_mouse} onMouseUp={SetEndPos_mosue} onMouseLeave={SetEndPos_mosue}>
        <div id="mapMovingBox" className="mapMovingBox">
          <img id="campusMap_1" className="campusMap_1" src={campusMap_1} />
        </div>
      </div>

      <img src={backGround} className="backGroundImage responsiveWidth" />
      <div className="contents">
        <div className="contents_innerBlock">
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

      </div>
    </>
  );
}

export default Map;