import { Pages } from "../Pages";
import './commonStyle.css';

function Footer() {

    return (
        <div className="footer">
            <p>フッター</p>
            <p><a href={Pages.access.path}>{Pages.access.displayName}</a></p>
            <p><a href={Pages.event.path}>{Pages.event.displayName}</a></p>
            <p><a href={Pages.home.path}>{Pages.home.displayName}</a></p>
            <p><a href={Pages.map.path}>{Pages.map.displayName}</a></p>
            <p><a href={Pages.project.path}>{Pages.project.displayName}</a></p>
        </div>
    )
}

export default Footer;