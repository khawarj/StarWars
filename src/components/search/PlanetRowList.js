import React from "react";

const renderCard = (card) => {
    return  <div className="col-sm-4 p-n"> <JSONTree data={card} /> </div>;
};

const PlanetRowList = (props) => {
    let { cards } = props;
    if(cards && cards.length) {
        return (
            <div className="background-gray">
                {cards.map(renderCard)}
            </div>
        );
    }else{
        return null;
    }
};

export default PlanetRowList;