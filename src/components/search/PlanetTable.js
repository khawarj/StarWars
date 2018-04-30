import React from "react";

const renderRow = (planet) => {
    return  (
        <tr>
            <td>{planet.name}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.population}</td>
        </tr>
    );
};

const PlanetTable = (props) => {
    let { planet } = props;
    return(
        <table className="table table-condensed">
            <thead>
            <tr>
                <th>Name</th>
                <th>Diameter</th>
                <th>Climate</th>
                <th>Gravity</th>
                <th>Terrain</th>
                <th>Population</th>
            </tr>
            </thead>
            <tbody>
             {renderRow(planet)}
            </tbody>
        </table>
    )
};

export default PlanetTable;