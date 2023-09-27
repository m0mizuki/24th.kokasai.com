import { Pages } from "../Pages";
import { useEffect } from "react";
import "./homeStyle.css";
import "../../css/pageStyle.css";
import portrait_sakana from "../../img/portrait/portrait_sakana.png";

import kokasaiPoster from "../../img/poster/kokasaiPoster.jpg";
import kosenText from "../../img/poster/kosenText.png";
import kosenTitle from "../../img/poster/kosenTitle.png";
import mojamoja from "../../img/poster/mojamoja.png";
import mainTitle from "../../img/poster/mainTitle.png";
import subTitle from "../../img/poster/subTitle.png";
import text24th from "../../img/poster/text24th.png";

function Home() {
  //1度だけ実行
  //2回実行されないよう一時的にindex.jsの<React.StrictMode>を外している
  useEffect(() => {
    const ref = document.referrer;
    console.log(ref);

    //このページへの遷移前のパスにkokasai_demo2_reactが含まれるとき
    let kokasaiPoster = document.getElementById("kokasaiPoster");
    kokasaiPoster.style.animationDelay=0+"s";
    kokasaiPoster.style.animationDuration=0+"s";
    if(ref.indexOf("kokasai_demo2_react")!=-1){
      let posterArea = document.getElementById("posterArea");
      for(let child of posterArea.children){
        child.style.animationDelay=0+"s";
        child.style.animationDuration=0+"s";
      }
    }
  }, []);

  return (
    <>
      <div className="backGroundImage responsiveWidth">
        <img src={kokasaiPoster} id="kokasaiPoster" className="kokasaiPoster" />
      </div>
      <div id="posterArea" className="posterArea">
        <img src={kosenText} className="kosenText" />
        <img src={kosenTitle} className="kosenTitle" />
        <img src={mojamoja} className="mojamoja" />
        <img src={mainTitle} className="mainTitle" />
        <img src={subTitle} className="subTitle" />
        <img src={text24th} className="text24th" />
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

          <div className="portraitArea">
            <div className="portraitFrameTitleArea">
              <div className="portraitFrame">
                <img className="portraitImage" src={portrait_sakana} />
              </div>
              <div className="portraitTitle">
                <p>工華祭実行委員長</p>
                <p>日高 美希</p>
                <p>第23回工華祭開催！</p>
              </div>
            </div>
            <div className="portraitTextArea">
              <div className="portraitText">
                <p>まずは工華祭が無事開催できることに実行委員長としてほっとしています。今年はコロナ禍ということもあり思うように活動時間が確保できない中でしたが、開催に向けて精一杯準備を進めてまいりました。特にポスターやパンフレットなどのデザイン関係は、短時間で制作したとは思えない高クオリティなものに仕上げてもらいました。 他にも飲食企画・学科の特色を生かした体験企画・まるでライブのようなステージ企画など、ぜひ五感全てで工華祭を楽しんでください。 最後に、開催にあたり多大なるご支援ご協力をいただいた関係者の皆様に感謝申し上げます。</p>
              </div>
            </div>
          </div>

          <div className="portraitArea">
            <div className="portraitFrameTitleArea">
              <div className="portraitFrame">
                <img className="portraitImage" src={portrait_sakana} />
              </div>
              <div className="portraitTitle">
                <p>工華祭実行委員長</p>
                <p>日高 美希</p>
                <p>第23回工華祭開催！</p>
              </div>
            </div>
            <div className="portraitTextArea">
              <div className="portraitText">
                <p>まずは工華祭が無事開催できることに実行委員長としてほっとしています。今年はコロナ禍ということもあり思うように活動時間が確保できない中でしたが、開催に向けて精一杯準備を進めてまいりました。特にポスターやパンフレットなどのデザイン関係は、短時間で制作したとは思えない高クオリティなものに仕上げてもらいました。 他にも飲食企画・学科の特色を生かした体験企画・まるでライブのようなステージ企画など、ぜひ五感全てで工華祭を楽しんでください。 最後に、開催にあたり多大なるご支援ご協力をいただいた関係者の皆様に感謝申し上げます。</p>
              </div>
            </div>
          </div>

          <div className="portraitArea">
            <div className="portraitFrameTitleArea">
              <div className="portraitFrame">
                <img className="portraitImage" src={portrait_sakana} />
              </div>
              <div className="portraitTitle">
                <p>工華祭実行委員長</p>
                <p>日高 美希</p>
                <p>第23回工華祭開催！</p>
              </div>
            </div>
            <div className="portraitTextArea">
              <div className="portraitText">
                <p>まずは工華祭が無事開催できることに実行委員長としてほっとしています。今年はコロナ禍ということもあり思うように活動時間が確保できない中でしたが、開催に向けて精一杯準備を進めてまいりました。特にポスターやパンフレットなどのデザイン関係は、短時間で制作したとは思えない高クオリティなものに仕上げてもらいました。 他にも飲食企画・学科の特色を生かした体験企画・まるでライブのようなステージ企画など、ぜひ五感全てで工華祭を楽しんでください。 最後に、開催にあたり多大なるご支援ご協力をいただいた関係者の皆様に感謝申し上げます。</p>
              </div>
            </div>
          </div>

          <br />
          <br />
        </div>


      </div>
    </>
  );
}

export default Home;