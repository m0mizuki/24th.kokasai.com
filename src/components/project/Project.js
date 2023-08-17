import { Pages } from "../Pages";
import backGround from "../../img/backGround/space.jpg"
import "../../css/pageStyle.css";
import "./projectStyle.css";

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

  return (
    <>
      <img src={backGround} className="backGroundImage responsiveWidth" />

      <div className="moitonArea responsiveWidth">
        <div className="projectSelectBar">
          <button className="projectSelectButton">1年生</button>
          <button className="projectSelectButton">2年生</button>
          <button className="projectSelectButton">3年生</button>
          <button className="projectSelectButton">4年生</button>
          <button className="projectSelectButton">5年生</button>
          <button className="projectSelectButton">運動部①</button>
          <button className="projectSelectButton">運動部②</button>
          <button className="projectSelectButton">文化部①</button>
          <button className="projectSelectButton">文化部②</button>
          <button className="projectSelectButton">愛好会①</button>
          <button className="projectSelectButton">愛好会②</button>
          <button className="projectSelectButton">有志</button>
        </div>
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