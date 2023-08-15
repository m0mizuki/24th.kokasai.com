import { Pages } from "../Pages";
import backGround from "../../img/backGround/space.jpg"
import "../../css/pageStyle.css";

function Project() {
  function getApi(){
    //var voteData=fetch("https://forms.googleapis.com/v1/forms/XYP-cpVeEkWK4KezivJfyHxakDBs24lNpXOoUtJPL1RUMUpCN0lWTUZaWUg1OEgxRlc4NkNJTEtDRi4u/responses").json;
    
    const request = new XMLHttpRequest();
    request.open("GET", "https://forms.googleapis.com/v1/forms/XYP-cpVeEkWK4KezivJfyHxakDBs24lNpXOoUtJPL1RUMUpCN0lWTUZaWUg1OEgxRlc4NkNJTEtDRi4u/responses",true);
    
    request.send();

    request.addEventListener("load",function(){
      alert(this.responseText);
    });
  }

  return (
    <>
      <h1>{Pages.project.displayName}</h1>
      <img src={backGround} className="backGroundImage" />
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