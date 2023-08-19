import { Pages } from "../../Pages";
import backGround from "../../../img/backGround/space.jpg";
import "../../../css/pageStyle.css";
import "../projectStyle.css";
import projectData from "../../../json/projectData.json";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ProjectDetail() {
  //useEffect外で大丈夫？

  //クエリを取得
  const quely = new URLSearchParams(useLocation().search);
  var a = quely.get("a");
  var b = quely.get("b");
  if(a==null)a=1;
  if(b==null)b=1;

  //1度だけ実行
  useEffect(() => {
    //2回実行されないよう一時的にindex.jsの<React.StrictMode>を外している
    const groupName = document.getElementById("groupName");
    groupName.innerText=projectData[a][b].groupName;

    const projectName = document.getElementById("projectName");
    projectName.innerText=projectData[a][b].projectName;

    const description = document.getElementById("description");
    description.innerText=projectData[a][b].description;
  }, []);

  return (
    <>
      <img src={backGround} className="backGroundImage responsiveWidth" />


      <div className="contents">
        <h2 id="groupName"></h2>
        <h2 id="projectName"></h2>
        <p id="description"></p>
        <br />
      </div>
    </>
  );
}

export default ProjectDetail;