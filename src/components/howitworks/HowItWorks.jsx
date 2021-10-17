import touchscreen1 from '../../assets/images/touchscreen1.svg';
import onlinepayment1 from '../../assets/images/online-payment11.svg';
import tickets3 from '../../assets/images/movie-ticket1.svg';
import winner from '../../assets/images/winner1.svg';
import Vector11 from '../../assets/images/Vector11.svg';

import HowItWorksItem from './HowItWorks-item';

function HowItWorks () {
    const how = [
        { id: 1, vector: Vector11, img: touchscreen1, text: 'Choose a competition and how many entries you would like'},
        { id: 2, vector: Vector11, img: onlinepayment1, text: 'Answer the qualifying question (be sure to answer correctly!) and complete payment' },
        { id: 3, vector: Vector11, img: tickets3, text: 'Tickets for all correct answers are entered into the draw, streamed LIVE on Facebook using Google’s random number generator' },
        { id: 4, img: winner, text: 'If you win, we may try to contact you whilst live on Facebook, so be prepared!' },
    ]


    return(
        <div className="_container">
            <div className="how-it-works">
                <div className="how-it-works__title">
                    <p className="how-it-works__title-title">
                        How it works
                    </p>
                </div>
                <div className="how-it-works__block">
                    <HowItWorksItem data={how} />     
        <span></span>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;