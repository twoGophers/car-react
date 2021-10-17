import revievs1 from '../../assets/images/Rectangle7.png';
import revievs2 from '../../assets/images/revievs2.jpg';
import revievs3 from '../../assets/images/revievs3.jpg';


import React, { useState, useEffect } from 'react';
function Revievs() {

    const [textItem, setTextItem] = useState('');
    const [revievsName, setrevievsName] = useState('');
    const [revievsImg, setrevievsImg] = useState('');
   
    useEffect(() => {
        
        let revievs__rectangleImg = document.querySelector('.revievs__rectangle');
        let revievs__user = document.querySelector('.revievs__user');
        let classItem = document.querySelectorAll('.revievs__eclipse-item');
        
        classItem.forEach(item => {
            item.addEventListener('click', function (e) {
                let dataItem = item.getAttribute('data');
                if (dataItem == 'one') {
                    
                        setTextItem('5');
                        setrevievsName('Danny Churchman');
                        setrevievsImg(revievs1);
                    revievs__rectangleImg.classList.toggle('revievs__rectangle-animation');
                    revievs__user.classList.toggle('revievs__rectangle-animation');

                    
                } else if (dataItem == 'two') {

                        setTextItem('2');
                        setrevievsName('Monica Ref');
                        setrevievsImg(revievs2);
                    revievs__rectangleImg.classList.toggle('revievs__rectangle-animation');
                    revievs__user.classList.toggle('revievs__rectangle-animation');

                } else {

                        setTextItem('3');
                        setrevievsName('Luiza Fox');
                        setrevievsImg(revievs3);
                    revievs__rectangleImg.classList.toggle('revievs__rectangle-animation');
                    revievs__user.classList.toggle('revievs__rectangle-animation');
                }
            })
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
                    <img className="revievs__rectangle-img" src={revievsImg || revievs1} alt={revievsImg || revievs1} />
                </div>
            </div>
    )
}

export default Revievs;