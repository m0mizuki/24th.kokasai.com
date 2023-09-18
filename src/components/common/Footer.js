import { Pages } from "../Pages";
import './commonStyle.css';

function Footer() {

    return (
        <div className="footer">
            <p><a href={Pages.access.path} className="pathStyle">{Pages.access.displayName}</a></p>
            <p><a href={Pages.event.path} className="pathStyle">{Pages.event.displayName}</a></p>
            <p><a href={Pages.home.path} className="pathStyle">{Pages.home.displayName}</a></p>
            <p><a href={Pages.map.path} className="pathStyle">{Pages.map.displayName}</a></p>
            <p><a href={Pages.project.path} className="pathStyle">{Pages.project.displayName}</a></p>
            <p><a href={Pages.credit.path} className="pathStyle">{Pages.credit.displayName}</a></p>
            <p className="copyrightMark">© 2023 工華祭実行委員会</p>
        </div>
    )
}

export default Footer;