import Vector from '../../assets/images/Vector.png';

function CompttitionItem (props) {

    const {name, price, images, priceNew, tickets} = props;
    

    return(
        <div className="competitionItem" >
            <div className="competitionItem__img catalog-images">
{/* Картинки локально через require('img').default */}
                <img className="catalog-images__images" src={require('../../assets/images/'+ images).default}/>
            </div>
            <div className="competitionItem__content">
                <div className="competitionItem__content-haracter price-item">
                    <p className="price-item__name">{name}</p>
                    <div className="price-item__price">
                        <div className="price-item__hard">
                            {priceNew}
                        </div>
                        <div className="price-item__small">
                            {price}
                        </div>
                    </div>
                    <p className="price-item__tickets">
                        {tickets} tickets remaining
                    </p>
                </div>
                <div className="competitionItem__content-button">
                    <div className="competitionItem__but">
                        <img className="competitionItem__button" src={Vector} alt={Vector} />
                    </div>
                    <span></span>
                </div>
            </div>
        </div>
    )
}
export default CompttitionItem;