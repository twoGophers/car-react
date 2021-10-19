import revievs1 from '../../assets/images/Rectangle7.png';
import revievs2 from '../../assets/images/revievs2.jpg';
import revievs3 from '../../assets/images/revievs3.jpg';


import React, { useState, useEffect } from 'react';
function Revievs() {

    const [textItem, setTextItem] = useState('');
    const [revievsName, setrevievsName] = useState('');
   
    useEffect(() => {

        let revievs__eclipseItem = document.querySelectorAll('.revievs__eclipse-item');
        let revievs__rectangleImg = document.querySelectorAll('.revievs__rectangle-img');
        let revievs__eclipse = document.querySelector('.revievs__eclipse');

        function hideTabsContent() {
            revievs__rectangleImg.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('revievs__rectangle-img', 'rectangle-animation');
            })

            revievs__eclipseItem.forEach(item => {
                item.classList.remove('revievs__eclipse-item-active');
            })

        }

        function showTabsContent(i = 0) {
            revievs__rectangleImg[i].classList.remove('hide');
            revievs__rectangleImg[i].classList.add('revievs__rectangle-img', 'rectangle-animation');
            revievs__eclipseItem[i].classList.add('revievs__eclipse-item-active');
        }

        hideTabsContent();
        showTabsContent();

        revievs__eclipse.addEventListener('click', (e) => {
            let target = e.target;

            if (target && target.classList.contains('revievs__eclipse-item')) {
                revievs__eclipseItem.forEach((item, i) => {
                    if(target == item) {
                        hideTabsContent();
                        showTabsContent(i);
                        if(i == 0) {
                            setTextItem('5');
                            setrevievsName('Danny Churchman');
                        } else if(i == 1) {
                            setTextItem('1');
                            setrevievsName('Liza Fox');
                        } else {
                            setTextItem('2');
                            setrevievsName('Alica Black');
                        }
                    }
                })
            }
        })

    
    }, [])

    return(
            <div className="revievs">
                <div className="revievs__slider">
                    <div className="revievs__title">
                        <p className="revievs__text">
                        "Unbelievable this is a dream come true, no way would I ever think I would own <br />a car like this. What great blokes. <br />Thank you very much! <br />{textItem || 5} star from me!!!"
                        </p>
                        <p className="revievs__user">
                            {revievsName || "Danny Churchman"}
                        </p>
                        <div className="revievs__eclipse-block">
                            <div className="revievs__eclipse" >
                                <div className="revievs__eclipse-item" data="one"></div>
                                <div className="revievs__eclipse-item" data="two"></div>
                                <div className="revievs__eclipse-item" data="three"></div>
                            </div>

                        </div>
                        
                    </div>
                </div>
                <div className="revievs__rectangle">
                    <img className="revievs__rectangle-img" src={revievs1} alt={revievs1} />
                    <img className="revievs__rectangle-img" src={revievs2} alt={revievs2} />
                    <img className="revievs__rectangle-img" src={revievs3} alt={revievs3} />
                </div>
            </div>
    )
}

export default Revievs;