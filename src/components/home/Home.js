import { Pages } from "../Pages";
import "./homeStyle.css";
import "../../css/pageStyle.css";
import poster from "../../img/backGround/poster.jpg";


function Home() {
  return (
    <>
      <img src={poster} className="backGroundImage" />
      <div id="posterArea"></div>
      <div className="contents">
        <h4>開催日時</h4>
        <p>あいうえお</p>
        <p>かきくけこ</p>
        <p>さしすせそ</p>

        <h4>ニュース</h4>
        <p>たちつてと</p>
        <p>なにぬねの</p>
        <p>はひふへほ</p>

        <h4>あいさつ</h4>
        <p>まみむめも</p>
        <p>やゆよ</p>

        <h4>その他</h4>
        <p>らりるれろ</p>
        <p>わをん</p>

      </div>
    </>
  );
}

export default Home;