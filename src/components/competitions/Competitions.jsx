import magnifier from '../../assets/images/search80737.svg';
import basket from '../../assets/images/basket3081797.svg';
import CompetitionItem from './CompetitionItem';
import React, {useState, useEffect} from 'react';

function Competitions() {
    const [error, setError] = useState(null);
    const [isLoader, setIsLoader] = useState(false);
    const [items, setItems] = useState([]);

    let coll = 4;

    useEffect(() => {
        fetch("https://car-react-ba290-default-rtdb.europe-west1.firebasedatabase.app/cars/.json")
            .then(response => response.json())
            
            .then(
                (result) => {
                    setIsLoader(true);
                    setItems(result.slice(0, coll));
                    
                },
                (error) => {
                    setIsLoader(true);
                    setError(error);
                }
            )
    }, [])

    let styleLoading = [
        {
        display : "flex",
        justifyContent : "center",
        alignItem : "center"
        }
    ]


    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoader) {
        return <div >Загрузка...</div>;
    } else {
        return(
            <div className="_container">
                <div className="competitions">
                    <div className="competitions__title">
                        <p className="competitions__title-name">Latest Competitions</p>
                        <div className="competitions__title-search search">
                            <input className="search__input" type="text" placeholder="Search..." />
                            <img className="search__icon" src={magnifier} alt={magnifier}/>
                        </div>
                        <div className="competitions__cart cart">
                            <img className="cart__img" src={basket} alt={basket} />
                            <h2 className="cart__number">0</h2>
                        </div>
                    </div>
                    <div className="competitions__catalog">
                        {items.map(item => (
                            <CompetitionItem  key={item.id} {...item} />
                        ))}
                        <span></span>
                    </div>
                    <div className="competitions__still-loading still-loading">
                        <button className="still-loading__button" >Still Loading</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Competitions;