import { Pages } from "../Pages";
import backGround from "../../img/backGround/space.jpg"
import planet_1 from "../../img/planet_1.png";
import planet_2 from "../../img/astronaut.png";
import "../../css/pageStyle.css";
import "./projectStyle.css";
import projectData from "../../json/projectData.json";

import { useEffect, useRef } from "react";

function Project() {

  //1度だけ実行
  useEffect(() => {
    //2回実行されないよう一時的にindex.jsの<React.StrictMode>を外している

    let parent = document.getElementById("projectSelectBar");
    for (let i in projectData) {
      if (i == 0) continue;

      let element = document.createElement("button"); //divとかでもいい
      element.classList.add("projectSelectButton");
      element.innerText = projectData[i][0];
      element.addEventListener("click", () => changeGalaxy(i));
      parent.appendChild(element);
    }

    CreatePlanets(1); //初期設定:1年生の星を表示
    //ラベルを表示
    let planetText = document.getElementsByClassName("planetText");
    for (let i = 0; i < planetText.length; i++) {
      planetText[i].classList.remove("invisible");
    }

  }, []);

  //最終的にはcreateElementではなくひとまとまりの要素を追加できるようにしたい

  function changeGalaxy(galaxyNum) {
    const planetArea = document.getElementById("planetArea");

    //ラベルを非表示
    let planetText = document.getElementsByClassName("planetText"); //競合注意
    for (let i = 0; i < planetText.length; i++) {
      planetText[i].classList.add("invisible");
    }

    planetArea.style.animationTimingFunction = "ease-in";
    planetArea.style.animationName = "fadeOut";
    setTimeout(() => {
      CreatePlanets(galaxyNum);

      planetArea.style.animationTimingFunction = "ease-out";
      planetArea.style.animationName = "fadeIn";

    }, 800);

    setTimeout(() => {
      //ラベルを表示
      planetText = document.getElementsByClassName("planetText");
      for (let i = 0; i < planetText.length; i++) {
        planetText[i].classList.remove("invisible");
      }
    }, 800+600);

  }

  function CreatePlanets(galaxyNum){
    const planetArea = document.getElementById("planetArea");

    //既存の星を削除
    const removeTarget = document.getElementsByClassName("planetBox");
    while (removeTarget.length > 0) {
      removeTarget[0].remove();
    }

    //新たな星を作成
    
    for (let i = 1; i < projectData[galaxyNum].length; i++) {
      //planetImage,planetTextはplanetBoxの子要素
      //planetBoxがplanetAreaの子要素になる
      let planetBox = document.createElement("div");
      planetBox.classList.add("planetBox");

      let planetImage = document.createElement("input");
      planetImage.type="image";
      planetImage.src=planet_1;
      planetImage.classList.add("planetImage");
      planetImage.onclick=ToProjectDetail;
      planetImage.style.animationDelay=parseInt(4000*i/(projectData[galaxyNum].length-1))+"ms";
      planetImage.id=galaxyNum + "-" + i;

      let planetText = document.createElement("p");
      planetText.classList.add("planetText");
      planetText.innerText = projectData[galaxyNum][i].groupName;
      //ラベルを非表示
      planetText.classList.add("invisible");

      planetBox.appendChild(planetImage);
      planetBox.appendChild(planetText);

      planetArea.appendChild(planetBox);
    }
    

    //位置を設定
    addRad=0;
    SetPlanets(addRad);
  }


  //星の位置を設定
  function SetPlanets(addRad) {
    let planetBox = document.getElementsByClassName("planetBox");

    if (planetBox.length == 0) {
      //console.log("ない");
    }
    else {
      for (let i = 0; i < planetBox.length; i++) {
        const rad = i * 2 * Math.PI / planetBox.length + addRad;

        const boxWidth = 30 + 10 * Math.cos(rad);

        planetBox[i].style.left = 50-boxWidth/2 + 35 * Math.sin(rad) + "%";
        planetBox[i].style.top = 45-boxWidth/2 + 15 * Math.cos(rad) + "%";

        planetBox[i].style.zIndex = 1000 + parseInt(100 * Math.cos(rad));

        planetBox[i].style.width = boxWidth + "%";
        planetBox[i].style.height = boxWidth + "%";
      }
    }

  }


  var prePos = {x:0,y:0};
  var addRad = 0; //角度(ラジアン)

  //置かれた指の位置を取得
  function SetPrePos(e){
    //e.preventDefault();
    prePos.x=e.touches[0].clientX;
    prePos.y=e.touches[0].clientY;

    SetPlanets(addRad);
  }

  //スクロールした際の星の移動
  function RotatePlanets(e) {
    e.preventDefault();
    const pos={
      x:e.touches[0].clientX,
      y:e.touches[0].clientY
    };
    
    addRad+=(pos.x-prePos.x)/100;
    prePos.x=pos.x;
    prePos.y=pos.y;
    SetPlanets(addRad);
  }


  //パッシブでない関数を呼び出す
  const circleRef = useRef(null);
  useEffect(() => {
    circleRef.current.addEventListener("touchstart",SetPrePos,{passive:false});
    circleRef.current.addEventListener("touchmove",RotatePlanets,{passive:false});
    return(() => {
      circleRef.current.removeEventListener("touchstart",SetPrePos);
      circleRef.current.removeEventListener("touchmove",RotatePlanets);
    });
  });


  //企画詳細ページに移動
  function ToProjectDetail(){
    const ab = this.id.split("-");
    window.location.assign(Pages.projectDetail.path + "?a="+ab[0]+"&b="+ab[1]);
  }

  return (
    <>
      <img src={backGround} className="backGroundImage responsiveWidth" />

      <div className="moitonArea responsiveWidth">
        <div id="projectSelectBar" className="projectSelectBar"></div>
        <div id="planetArea" className="planetArea" ref={circleRef}></div>
      </div>

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