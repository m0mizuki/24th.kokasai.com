import "../homeStyle.css";
import "../../../css/pageStyle.css";
import kokasaiPoster from "../../../img/poster/kokasaiPoster.jpg";

function Credit() {
  return (
    <>
      <div className="backGroundImage responsiveWidth">
        <img src={kokasaiPoster} className="kokasaiPoster_noAnimation" />
        <img src={kokasaiPoster} className="kokasaiPoster_mirror" />
      </div>

      <div className="posterArea_noPosterText"></div>

      <div className="contents contents_whitesmoke noPosterText">
        <div className="contents_innerBlock">
          <br />
          <h2>工華祭実行委員長</h2>
          <p>高専 大郎</p>

          <h2>各課長</h2>
          <h3>〇〇課長</h3>
          <p>高専 大郎</p>
          <h3>〇〇課長</h3>
          <p>高専 大郎</p>
          <h3>〇〇課長</h3>
          <p>高専 大郎</p>
          <h3>〇〇課長</h3>
          <p>高専 大郎</p>

          <h2>各課役員</h2>

          <h3>〇〇課</h3>
          <p>高専 大郎</p>
          <p>高専 大郎</p>
          <p>高専 大郎</p>
          <p>高専 大郎</p>
          <p>高専 大郎</p>

          <h3>〇〇課</h3>
          <p>高専 大郎</p>
          <p>高専 大郎</p>
          <p>高専 大郎</p>
          <p>高専 大郎</p>
          <p>高専 大郎</p>

          <h3>〇〇課</h3>
          <p>高専 大郎</p>
          <p>高専 大郎</p>
          <p>高専 大郎</p>
          <p>高専 大郎</p>
          <p>高専 大郎</p>

          <h3>〇〇課</h3>
          <p>高専 大郎</p>
          <p>高専 大郎</p>
          <p>高専 大郎</p>
          <p>高専 大郎</p>
          <p>高専 大郎</p>
        </div>

        <br />
        <br />
      </div>
    </>
  );
}

export default Credit;