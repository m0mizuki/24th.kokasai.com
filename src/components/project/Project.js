import { Pages } from "../Pages";
import backGround from "../../img/backGround/space.jpg"
import "../../css/pageStyle.css";
import "./projectStyle.css";
import projectData from "../../json/projectData.json";

import { useEffect } from "react";

function Project() {

  /*function getApi(){
    const request = new XMLHttpRequest();
    request.open("GET", "https://dog.ceo/api/breeds/image/random",true);
    
    request.send();

    request.addEventListener("load",function(){
      console.log(this.responseText);

      const apiData=JSON.parse(this.responseText);
      let img = document.getElementById("dogImage");
      img.src=apiData.message;

    });
  }*/

  useEffect(() => {
    //2回実行されないよう一時的にindex.jsの<React.StrictMode>を外している

    const parent = document.getElementById("projectSelectBar");

    for (let i in projectData) {
      if (i == 0) continue;

      const element = document.createElement("button");
      element.classList.add("projectSelectButton");
      element.innerText = projectData[i][0];
      element.addEventListener("click",changeGalaxy);
      parent.appendChild(element);
    }

  }, []);

  function changeGalaxy(){
    const target = document.getElementById("planetArea");
    target.style.animationTimingFunction="ease-in";
    target.style.animationName="fadeOut";
    setTimeout(() => {
      target.style.animationTimingFunction="ease-out";
      target.style.animationName="fadeIn";
  }, 800);
  }

  return (
    <>
      <img src={backGround} className="backGroundImage responsiveWidth" />

      <div className="moitonArea responsiveWidth">
        <div id="projectSelectBar" className="projectSelectBar"></div>
        <div id="planetArea" className="planetArea"></div>
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