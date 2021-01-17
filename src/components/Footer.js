import github from "../assets/github-brands.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div
                className="github-button"
                onClick={() => window.open("https://github.com/hk279/Solita-assignment-2020-front", "_blank")}
            >
                <img className="github-button-icon" src={github} alt="Github logo"></img>
                <p className="github-button-text">View code on GitHub</p>
            </div>
        </div>
    );
};

export default Footer;
