import { Pages } from "../Pages";
import "./homeStyle.css";
import "../../css/pageStyle.css";
import poster from "../../img/backGround/poster.jpg";
import portrait_sakana from "../../img/portrait/portrait_sakana.png";


function Home() {
  return (
    <>
      <img src={poster} className="backGroundImage responsiveWidth" />
      <div className="posterArea">
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
        </div>


      </div>
    </>
  );
}

export default Home;