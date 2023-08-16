import { Pages } from "../Pages";
import "./homeStyle.css";
import "../../css/pageStyle.css";
import poster from "../../img/backGround/poster.jpg";
import portrait_sakana from "../../img/portrait/portrait_sakana.png";
import portraitArrow from "../../img/portraitArrow.png";


function Home() {
  return (
    <>
      <img src={poster} className="backGroundImage responsiveWidth" />
      <div id="posterArea"></div>

      <div className="contents">
        <h2>詳細情報</h2>
        <h3>開催日時</h3>
        <p>11月4日(土) 9:00～17:00<br />
          11月5日(日) 9:00～17:00</p>

        <h3>開催場所</h3>
        <p>群馬工業高等専門学校</p>
        <p><a href="https://www.gunma-ct.ac.jp/" target="_blank" rel="noreferrer noopener">公式HPはこちら</a></p>

        <h3>注意事項</h3>
        <p>酒類の持ち込みはご遠慮ください</p>

        <h2>役員あいさつ</h2>
        <details className="portraitDetails">
          <summary className="portraitSummary">
            <div className="portraitFrame">
              <img className="portraitImage" src={portrait_sakana} />
            </div>
            <div className="portraitTitle">
              <p>工華祭実行委員長 本島琉矢</p>
              <h4>タイトル</h4>
            </div>
            <img className="portraitArrow" src={portraitArrow} />
          </summary>
          <p>こんにちはこんにちはこんにちはこんにちはこんにちはこんにちは
            こんにちはこんにちはこんにちはこんにちはこんにちはこんにちは</p>
        </details>

        <details className="portraitDetails">
          <summary className="portraitSummary">
            <div className="portraitFrame">
              <img className="portraitImage" src={portrait_sakana} />
            </div>
            <div className="portraitTitle">
              <p>工華祭実行委員長 本島琉矢</p>
              <h4>タイトル</h4>
            </div>
            <img className="portraitArrow" src={portraitArrow} />
          </summary>
          <p>こんにちはこんにちはこんにちはこんにちはこんにちはこんにちは
            こんにちはこんにちはこんにちはこんにちはこんにちはこんにちは</p>
        </details>

        <details className="portraitDetails">
          <summary className="portraitSummary">
            <div className="portraitFrame">
              <img className="portraitImage" src={portrait_sakana} />
            </div>
            <div className="portraitTitle">
              <p>工華祭実行委員長 本島琉矢</p>
              <h4>タイトル</h4>
            </div>
            <img className="portraitArrow" src={portraitArrow} />
          </summary>
          <p>こんにちはこんにちはこんにちはこんにちはこんにちはこんにちは
            こんにちはこんにちはこんにちはこんにちはこんにちはこんにちは</p>
        </details>

        <details className="portraitDetails">
          <summary className="portraitSummary">
            <div className="portraitFrame">
              <img className="portraitImage" src={portrait_sakana} />
            </div>
            <div className="portraitTitle">
              <p>工華祭実行委員長 本島琉矢</p>
              <h4>タイトル</h4>
            </div>
            <img className="portraitArrow" src={portraitArrow} />
          </summary>
          <p>こんにちはこんにちはこんにちはこんにちはこんにちはこんにちは
            こんにちはこんにちはこんにちはこんにちはこんにちはこんにちは</p>
        </details>

      </div>
    </>
  );
}

export default Home;