
import { BrowserRouter as  Link } from "react-router-dom";
import logo from "../../assets/images/LOGOAuto.svg";

function Header() {
  const navHeader = [
    { id: 1, name: "How it Works", adress :"/howitworks" },
    { id: 2, name: "Gift Cards", adress : "/giftcards" },
    { id: 3, name: "Winners", adress : "/winners" },
    { id: 4, name: "Live Draws", adress : "/livedraws" },
    { id: 5, name: "Entry Lists", adress : "/entrylists" },
    { id: 6, name: "Latest Competitions", adress : "/latestcompetitions" },
  ];
  const navHeaderLink = navHeader.map((item) => <ul key={item.id}><li ><Link to={item.adress}>{item.name}</Link></li></ul>)


    return (
      <div className="_container">
        <header className="header ">
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="header__link">
            {navHeaderLink}
          </div>
          <div className="header__registr">
            <span></span>
            <a className="header__login" href="#">Login</a>
            <button className="header__button">Register</button>
          </div>
        </header>
      </div>
    )
}

export default Header;