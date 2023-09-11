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
      <div id="posterArea">
        <p className="posterTitle">工華祭</p>
        <p className="posterCatchphrase">～キャッチフレーズ～</p>
      </div>

      <div className="contents contents_whitesmoke">
        <div className="contents_innerBlock">
          <br />
          <p className="heading2">詳細情報</p>
          <p className="heading3">開催日時</p>
          <p>11月4日(土) 9:00～17:00<br />
            11月5日(日) 9:00～17:00</p>

          <p className="heading3">開催場所</p>
          <p>群馬工業高等専門学校</p>
          <p><a href="https://www.gunma-ct.ac.jp/" target="_blank" rel="noreferrer noopener">公式HPはこちら</a></p>

          <p className="heading3">注意事項</p>
          <p>酒類の持ち込みはご遠慮ください</p>

          <p className="heading2">役員あいさつ</p>
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

          <br />
        </div>


      </div>
    </>
  );
}

export default Home;