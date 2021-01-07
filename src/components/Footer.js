import github from "../assets/github-brands.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="github-button">
                <img className="github-button-icon" src={github} alt="Github logo"></img>
                <p className="github-button-text">View code on GitHub</p>
            </div>
        </div>
    );
};

export default Footer;
