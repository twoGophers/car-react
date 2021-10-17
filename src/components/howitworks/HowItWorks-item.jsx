
function HowItWorksItem(props) {

    let itemData = props.data;

    return (
        <>
            {itemData.map((item) => (
                <div className="hot-it-works-item" key={item.id}>
                    <div className="hot-it-works-item__block">
                        <div className="hot-it-works-item__block-images">
                            <img className="hot-it-works-item__block-img" src={item.img} alt={item.img} />
                        </div>
                        <p className="hot-it-works-item__block-text" >{item.text}</p>
                    </div>
                    <div className="hot-it-works-item__vector">
                        <img className="hot-it-works-item__vector-img" src={item.vector} alt={item.vector} />
                    </div>
                </div>
            ))}
        </>
    )
}

export default HowItWorksItem;