import latestWinnersImg1 from '../../assets/images/Rectangle1.png';
import latestWinnersImg2 from '../../assets/images/Rectangle2.png';
import latestWinnersImg3 from '../../assets/images/Rectangle3.png';
import latestWinnersImg4 from '../../assets/images/Rectangle44.png';

import CompetitionItem from './CompetitionItem';
function latestWinners() {

    let items = [
        { id: 1, img: latestWinnersImg1, carName: 'Ferrari 458', carData: '12 November 2020'},
        { id: 2, img: latestWinnersImg2, carName: 'Aquila Gullwing', carData: '9 November 2020' },
        { id: 3, img: latestWinnersImg3, carName: '2020 Audi S5 Coupe', carData: '5 November 2020' },
        { id: 4, img: latestWinnersImg4, carName: 'Ferrari Purosangue SUV', carData: '25 September 2020' },
    ]

    return (
        <div className="_container">
            <div className="competitions latestwinners">
                <div className="competitions__title">
                    <p className="competitions__title-name">Latest Winners</p>
                </div>
                <div className="competitions__catalog">
                    {items.map(item => (
                        <CompetitionItem key={item.id} {...item} />
                    ))}
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default latestWinners;