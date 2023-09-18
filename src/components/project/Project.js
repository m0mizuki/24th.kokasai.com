import { Pages } from "../Pages";
import backGround from "../../img/backGround/space.png"
import rope from "../../img/rope.png";
import "../../css/pageStyle.css";
import "./projectStyle.css";
import projectData from "../../json/projectData.json";

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function Project() {

  //クエリを取得
  const quely = new URLSearchParams(useLocation().search);
  var initGalNum = quely.get("num"); //初期の星を指定
  if (initGalNum == null) initGalNum = 1;


  //1度だけ実行
  //2回実行されないよう一時的にindex.jsの<React.StrictMode>を外している
  useEffect(() => {

    let parent = document.getElementById("projectSelectBar");
    for (let i in projectData) {
      if (i == 0) continue;

      let element = document.createElement("button"); //divとかでもいい
      element.classList.add("projectSelectButton");
      element.innerText = projectData[i][0];
      element.addEventListener("click", () => changeGalaxy(i));
      parent.appendChild(element);
    }

    CreatePlanets(initGalNum); //初期設定:1年生の星を表示
    //ラベルを表示
    setTimeout(() => {
      let planetText = document.getElementsByClassName("planetText");
      for (let i = 0; i < planetText.length; i++) {
        planetText[i].classList.remove("invisible");
      }

      //セレクトバーを表示
      let projectSelectBar = document.getElementById("projectSelectBar");
      projectSelectBar.classList.remove("invisible");
    }, 1400);


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
      planetBox[i].style.animationDelay = 0 + "s";
      planetBox[i].style.animationName = "boxAnimation_out" + ((i % (planetBox.length/2)) + 1);
      //console.log((i % (planetBox.length/2)) + 1);
    }

    setTimeout(() => {
      CreatePlanets(galaxyNum);
    }, 700);

    setTimeout(() => {
      //ラベルを表示
      planetText = document.getElementsByClassName("planetText");
      for (let i = 0; i < planetText.length; i++) {
        planetText[i].classList.remove("invisible");
      }
    }, 2300);

  }

  function CreatePlanets(galaxyNum) {
    const planetArea = document.getElementById("planetArea");

    //既存の星を削除
    const removeTarget = document.getElementsByClassName("planetBox");
    while (removeTarget.length > 0) {
      removeTarget[0].remove();
    }

    //新たな星を作成

    var leftRatio = new Array(galaxyNum);
    for (let i = 1; i < projectData[galaxyNum].length; i++) {
      //planetImage,planetTextはplanetBoxの子要素
      //planetBoxがplanetAreaの子要素になる
      let planetBox = document.createElement("div");
      planetBox.classList.add("planetBox");
      planetBox.classList.add("boxMotion" + i);
      leftRatio[i - 1] = 1 + 17 * (i - 1) + Math.random() * 10 - 5;
      planetBox.style.left = leftRatio[i - 1] + "%";

      let planetRope = document.createElement("img");
      planetRope.src = rope;
      planetRope.classList.add("planetRope");
      planetRope.style.animationDelay = parseInt(4000 * i / (projectData[galaxyNum].length - 1)) + "ms";

      planetBox.appendChild(planetRope);

      planetArea.appendChild(planetBox);
    }

    for (let i = 1; i < projectData[galaxyNum].length; i++) {
      //planetImage,planetTextはplanetBoxの子要素
      //planetBoxがplanetAreaの子要素になる
      let planetBox = document.createElement("div");
      planetBox.classList.add("planetBox");
      planetBox.classList.add("boxMotion" + i);
      planetBox.style.left = leftRatio[i - 1] + "%";

      let planetImageHref = document.createElement("a");
      const path = Pages.projectDetail.path + "?a=" + galaxyNum + "&b=" + i;
      planetImageHref.href = path;

      let planetImage = document.createElement("img");
      //planetImage.src = planet_1;
      const planetNum = (i * 13 + galaxyNum*9) % 7;
      planetImage.src = "./img/planet/planet_" + planetNum + ".png";
      planetImage.classList.add("planetImage");
      planetImage.style.animationDelay = parseInt(4000 * i / (projectData[galaxyNum].length - 1)) + "ms";
      planetImage.id = galaxyNum + "-" + i;

      let planetText = document.createElement("p");
      planetText.classList.add("planetText");
      planetText.innerText = projectData[galaxyNum][i].groupName;
      //ラベルを非表示
      planetText.classList.add("invisible");

      planetImageHref.appendChild(planetImage);
      planetBox.appendChild(planetImageHref);
      planetBox.appendChild(planetText);

      planetArea.appendChild(planetBox);
    }

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