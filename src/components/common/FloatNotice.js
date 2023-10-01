import { Pages } from "../Pages";
import './commonStyle.css';

function FloatNotice({ children }) {
    function closeFloatNotice(){
        const target = document.getElementById("floatNotice");
        target.classList.add("invisible");
    }

    return (
        <div id="floatNotice" className="floatNotice" onTouchEnd={closeFloatNotice}>
            <h3 className="floatNoticeText">
                {children}
            </h3>
        </div>
    )
}

export default FloatNotice;