import { Pages } from "../Pages";
import backGround from "../../img/backGround/fantasy.jpg";
import "../../css/pageStyle.css";
import "../common/commonStyle.css";
import "./mapStyle.css";
import campusMap_1 from "../../img/campusMap_1.png";
import projectData from "../../json/projectData.json";

import { useEffect, useRef } from "react";

function Map() {
  var prePos0={x:0,y:0}; //指1本目
  var prePos1={x:0,y:0}; //指2本目
  var preDis=0; //指1本目と2本目の距離
  var preMidPos={x:0,y:0}; //指1本目と2本目の中間の座標
  var mapPos={x:0,y:0};
  const mapWidth = 390; //画像によるので読み込めるようにする
  var mapSize=mapWidth;


  //1度だけ実行
  useEffect(() => {
    //2回実行されないよう一時的にindex.jsの<React.StrictMode>を外している

    CreateMapObjects();

  }, []);


  //置かれた指の位置を取得
  function SetPrePos(e){
    //e.preventDefault();
    prePos0.x=e.touches[0].clientX;
    prePos0.y=e.touches[0].clientY;

    if(e.touches.length==2){
      prePos1.x=e.touches[1].clientX;
      prePos1.y=e.touches[1].clientY;
      preMidPos.x=(prePos0.x+prePos1.x)/2;
      preMidPos.y=(prePos0.y+prePos1.y)/2;
      preDis=Math.hypot(prePos1.x-prePos0.x,prePos1.y-prePos0.y); //2本の指の距離
    }
  }

  //マップのスクロール
  function ScrollMap(e) {
    e.preventDefault();
    if(e.touches.length==1){
      const pos={
        x:e.touches[0].clientX,
        y:e.touches[0].clientY
      };
  
      mapPos.x+=pos.x-prePos0.x;
      mapPos.y+=pos.y-prePos0.y;
      
      prePos0.x=pos.x;
      prePos0.y=pos.y;
  
      SetMapPos(mapPos.x,mapPos.y,mapSize);
    }
    else if(e.touches.length==2){

      prePos0.x=e.touches[0].clientX;
      prePos0.y=e.touches[0].clientY;
      prePos1.x=e.touches[1].clientX;
      prePos1.y=e.touches[1].clientY;
      const midPos={
        x:(prePos0.x+prePos1.x)/2,
        y:(prePos0.y+prePos1.y)/2
      }
      let dis=Math.hypot(prePos1.x-prePos0.x,prePos1.y-prePos0.y); //2本の指の距離

      let campusMap=document.getElementById("campusMap_1"); //画像によるので引数で変えられるようにする
      let campusMapBounds = campusMap.getBoundingClientRect();

      const zoomRate=2*(dis-preDis)*mapSize/mapWidth;
      mapSize+=zoomRate; //ズームイン・アウト
      
      mapPos.x+=zoomRate*(campusMapBounds.left-midPos.x)/mapSize;
      mapPos.y+=zoomRate*(campusMapBounds.top-midPos.y)/mapSize;

      preDis=dis;

      //2本指での移動
      mapPos.x+=midPos.x-preMidPos.x;
      mapPos.y+=midPos.y-preMidPos.y;
      preMidPos.x=midPos.x;
      preMidPos.y=midPos.y;

      SetMapPos(mapPos.x,mapPos.y,mapSize);
    }
  }

  //マップが瞬間移動しないようにする
  function SetEndPos(e){
    e.preventDefault();
    if(e.touches.length==1){
      prePos0.x=e.touches[0].clientX;
      prePos0.y=e.touches[0].clientY;
    }
  }

  //マップの位置,大きさを設定
  function SetMapPos(mapPosX,mapPosY,mapSize){
    let campusMap=document.getElementById("campusMap_1");
    campusMap.style.width=mapSize+"px";
    campusMap.style.left=mapPosX+"px";
    campusMap.style.top=mapPosY+"px";
  }


  function CreateMapObjects(){
    const mapCanvas = document.getElementById("mapCanvas");

    //新たな星を作成
    for(let i=1;i<projectData.length;i++){
      for(let j=1;j<projectData[i].length;j++){
        //mapObjectImage,mapObjectTextはmapObjectBoxの子要素
        //mapObjectBoxがmapCanvasの子要素になる
        let mapObjectBox = document.createElement("div");
        mapObjectBox.classList.add("mapObjectBox");

        let mapObjectImage  = document.createElement("input");
        mapObjectImage.type="image";
        mapObjectImage.classList.add("mapObjectImage");
        mapObjectImage.id=i+"-"+j;

        let mapObjectText = document.createElement("p");
        mapObjectText.classList.add("mapObjectText");
        mapObjectText.innerText = projectData[i][j].groupName;

        mapObjectBox.appendChild(mapObjectImage);
        mapObjectBox.appendChild(mapObjectText);

        mapCanvas.appendChild(mapObjectBox);
      }
    }
    
  }


  //パッシブでない関数を呼び出す
  const circleRef = useRef(null);
  useEffect(() => {
    circleRef.current.addEventListener("touchstart",SetPrePos,{passive:false});
    circleRef.current.addEventListener("touchmove",ScrollMap,{passive:false});
    circleRef.current.addEventListener("touchend",SetEndPos,{passive:false});
    return(() => {
      circleRef.current.removeEventListener("touchstart",SetPrePos);
      circleRef.current.removeEventListener("touchmove",ScrollMap);
      circleRef.current.removeEventListener("touchend",SetEndPos);
    });
  });

  return (
    <>
      <h1>{Pages.map.displayName}</h1>

      <div id="mapCanvas" ref={circleRef}>
        <img id="campusMap_1" className="campusMap_1" src={campusMap_1} />
      </div>

      <img src={backGround} className="backGroundImage responsiveWidth" />
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