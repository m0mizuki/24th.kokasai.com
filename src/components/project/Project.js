import { Pages } from "../Pages";
import backGround from "../../img/backGround/space.jpg"
import "../../css/pageStyle.css";

function Project() {
  function getApi(){
    //var voteData=fetch("https://forms.googleapis.com/v1/forms/XYP-cpVeEkWK4KezivJfyHxakDBs24lNpXOoUtJPL1RUMUpCN0lWTUZaWUg1OEgxRlc4NkNJTEtDRi4u/responses").json;
    //https://forms.googleapis.com/v1/forms/XYP-cpVeEkWK4KezivJfyHxakDBs24lNpXOoUtJPL1RUMUpCN0lWTUZaWUg1OEgxRlc4NkNJTEtDRi4u/responses
    const request = new XMLHttpRequest();
    request.open("GET", "https://dog.ceo/api/breeds/image/random",true);
    
    request.send();

    request.addEventListener("load",function(){
      console.log(this.responseText);

      const apiData=JSON.parse(this.responseText);
      let img = document.getElementById("dogImage");
      img.src=apiData.message;

    });
  }

  return (
    <>
      <h1>{Pages.project.displayName}</h1>
      <img src={backGround} className="backGroundImage responsiveWidthS" />

      <img src="" id="dogImage" />

      <div className="contents">
        <button onClick={getApi}>formsのapiを取得</button>
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