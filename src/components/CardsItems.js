const CardsItems = (props) => {
    return(
        <>
        <div className={`card ${props.bsc}`} style={{width: "18rem"}}>
            <div className="card-body">
                <h3 className="card-title">{props.header}</h3>
                <p className="card-text">{props.text}</p>
            </div>
        </div>
        </>
    )
};

export default CardsItems;