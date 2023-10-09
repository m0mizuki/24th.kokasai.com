import './accessStyle.css';

function AccessContent({ children }) {
    return (
        <div className="accessContent">
            <div className="accessContent_innerBlock">
                {children}
            </div>
        </div>
    )
}

export default AccessContent;