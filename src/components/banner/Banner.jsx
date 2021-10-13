import car from "../../assets/images/40251.png";

function Banner () {
    return (
        <div className="_container">
            <div className="banner">
                <div className="banner__title">
                    <p className="banner__title-one title-banner">Could you be our</p>
                    <p className="banner__title-two title-banner"> next winner?</p>
                    <button className="banner__button">Enter now</button>
                </div>
                <div className="banner__images">
                    <span></span>
                    <img className="banner__img" src={car} alt={car}/>
                    <div className="banner__circle"></div>
                </div>
            </div>
        </div>
    )
}

export default Banner;