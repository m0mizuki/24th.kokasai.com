import "../homeStyle.css";
import "../../../css/pageStyle.css";

function Apologize() {
  return (
    <>
      <div className="backGroundImage responsiveWidth">
        <img src={`${process.env.PUBLIC_URL}/img/poster/kokasaiPoster.jpg`} className="kokasaiPoster_noAnimation" />
        <img src={`${process.env.PUBLIC_URL}/img/poster/kokasaiPoster.jpg`} className="kokasaiPoster_mirror" />
      </div>

      <div className="posterArea_noPosterText"></div>

      <div className="contents contents_whitesmoke noPosterText">
        <div className="contents_innerBlock apologize_center">
          <br />
          <br />
          <br />
          <br />
          <p>このページは近日公開予定です</p>
          <p>公開まで今しばらくお待ちください</p>
          <br />
          <br />
          <br />
          <br />
        </div>
        <br />
      </div>
    </>
  );
}

export default Apologize;