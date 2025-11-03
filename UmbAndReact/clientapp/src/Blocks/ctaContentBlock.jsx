import { Link } from "react-router";
function CtaContentBlock({ content }) {
    const link = content.link[0];
    console.log(link)
    return <div id="cta-content-block">
        <p className="big-text">{content.bigText}</p>
        {link && link.url && <p>
            <Link to={link.url} target={link.target} className="button">{link.title}</Link>
        </p>}
    </div>
}
export default CtaContentBlock;