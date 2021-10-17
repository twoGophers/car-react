

function CompttitionItem (props) {

    let { img,  carName, carData} = props
    

    return(
        <div className="competitionItem latestWinnersItem" >
            <div className="competitionItem__img catalog-images latestWinnersItem-img">
{/* Картинки локально через require('img').default */}
                <img className="catalog-images__images latestWinnersItem-images" src={img} alt={img} />
            </div>
            <div className="competitionItem__content latestWinnersItem__content">
                <div className="competitionItem__content-haracter price-item">
                    <p className="price-item__name latestWinnersItem-name">{carName}</p>
                    <p className="price-item__tickets latestWinnersItem-tickets">
                        {carData}
                    </p>
                </div>
                <div className="competitionItem__content-button">
                    
                    <span></span>
                </div>
            </div>
        </div>
    )
}
export default CompttitionItem;