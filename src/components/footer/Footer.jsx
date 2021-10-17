import { BrowserRouter as Link } from "react-router-dom";

function Footer() {
    const navHeader = [
        { id: 1, name: "How it Works", adress: "/howitworks" },
        { id: 2, name: "Gift Cards", adress: "/giftcards" },
        { id: 3, name: "Winners", adress: "/winners" },
        { id: 4, name: "Live Draws", adress: "/livedraws" },
        { id: 5, name: "Entry Lists", adress: "/entrylists" },
        { id: 6, name: "Latest Competitions", adress: "/latestcompetitions" },
    ];
    const navHeaderLink = navHeader.map((item) => <ul key={item.id}><li ><Link to={item.adress}>{item.name}</Link></li></ul>)


    return (
        <div className="footer-main">
            <div className="_container">
                <header className="header footer">
                    <div className="header__logo footer__footer-logo">
                        LOGOOAUTO
                    </div>
                    <div className="header__link footer__footer-link">
                        {navHeaderLink}
                    </div>

                </header>
            </div>
        </div>
    )
}

export default Footer;