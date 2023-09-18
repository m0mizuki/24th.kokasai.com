import { Pages } from "../Pages";
import "./commonStyle.css";
import "../../css/pageStyle.css";
import xIcon from "../../img/snsIcon/twitterIcon.svg";
import instagramIcon from "../../img/snsIcon/instagramIcon.svg";

function Footer() {

    return (
        <div className="footer">
            <div className="pageListArea">
                <p className="heading3 textWhite">ページ一覧</p>
                <p><a href={Pages.access.path} className="pathStyle">{Pages.access.displayName}</a></p>
                <p><a href={Pages.event.path} className="pathStyle">{Pages.event.displayName}</a></p>
                <p><a href={Pages.home.path} className="pathStyle">{Pages.home.displayName}</a></p>
                <p><a href={Pages.map.path} className="pathStyle">{Pages.map.displayName}</a></p>
                <p><a href={Pages.project.path} className="pathStyle">{Pages.project.displayName}</a></p>
                <p><a href={Pages.credit.path} className="pathStyle">{Pages.credit.displayName}</a></p>
            </div>
            <div className="snsListArea">
                <p className="heading3 textWhite">公式SNS</p>
                <a href="https://twitter.com/nitgc_kokasai" target="_blank" rel="noreferrer noopener"><img src={xIcon} className="snsIcon" /></a>
                <a href="https://instagram.com/nitgc_kokasai" target="_blank" rel="noreferrer noopener"><img src={xIcon} className="snsIcon" /></a>
            </div>

            <p className="copyrightMark">© 2023 工華祭実行委員会</p>
        </div>
    )
}

export default Footer;