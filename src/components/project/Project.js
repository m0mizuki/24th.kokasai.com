import { Pages } from "../Pages";
import backGround from "../../img/backGround/space.png"
import planet_1 from "../../img/planet_1.png";
import planet_2 from "../../img/astronaut.png";
import rope from "../../img/rope.png";
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
    setTimeout(() => {
      let planetText = document.getElementsByClassName("planetText");
      for (let i = 0; i < planetText.length; i++) {
        planetText[i].classList.remove("invisible");
      }

      //セレクトバーを表示
      let projectSelectBar = document.getElementById("projectSelectBar");
      projectSelectBar.classList.remove("invisible");
    }, 1700);


  }, []);

  //最終的にはcreateElementではなくひとまとまりの要素を追加できるようにしたい

  function changeGalaxy(galaxyNum) {

    //ラベルを非表示
    let planetText = document.getElementsByClassName("planetText"); //競合注意
    for (let i = 0; i < planetText.length; i++) {
      planetText[i].classList.add("invisible");
    }

    //アニメーションを追加

    let planetBox = document.getElementsByClassName("planetBox"); //競合注意
    for (let i = 0; i < planetBox.length; i++) {
      //planetBox[i].classList.add("boxMotion_out");
      planetBox[i].style.animationDelay = "0s";
      planetBox[i].style.animationName = "boxAnimation_out" + (i + 1);
    }

    setTimeout(() => {
      CreatePlanets(galaxyNum);
    }, 1000);

    setTimeout(() => {
      //ラベルを表示
      planetText = document.getElementsByClassName("planetText");
      for (let i = 0; i < planetText.length; i++) {
        planetText[i].classList.remove("invisible");
      }
    }, 2700);

  }

  function CreatePlanets(galaxyNum) {
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
      planetBox.classList.add("boxMotion" + i);

      let planetImage = document.createElement("input");
      planetImage.type = "image";
      planetImage.src = planet_1;
      planetImage.classList.add("planetImage");
      planetImage.onclick = ToProjectDetail;
      planetImage.style.animationDelay = parseInt(4000 * i / (projectData[galaxyNum].length - 1)) + "ms";
      planetImage.id = galaxyNum + "-" + i;

      let planetRope = document.createElement("img");
      planetRope.src = rope;
      planetRope.classList.add("planetRope");
      planetRope.style.animationDelay = parseInt(4000 * i / (projectData[galaxyNum].length - 1)) + "ms";

      let planetText = document.createElement("p");
      planetText.classList.add("planetText");
      planetText.innerText = projectData[galaxyNum][i].groupName;
      //ラベルを非表示
      planetText.classList.add("invisible");

      planetBox.appendChild(planetRope);
      planetBox.appendChild(planetImage);
      planetBox.appendChild(planetText);

      planetArea.appendChild(planetBox);
    }
  }



  //企画詳細ページに移動
  function ToProjectDetail() {
    const ab = this.id.split("-");
    window.location.assign(Pages.projectDetail.path + "?a=" + ab[0] + "&b=" + ab[1]);
  }

  return (
    <>
      <img src={backGround} className="backGroundImage responsiveWidth" />

      <div className="moitonArea responsiveWidth">
        <div id="projectSelectBar" className="projectSelectBar invisible"></div>
        <div id="planetArea" className="planetArea"></div>
      </div>

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

export default Project;