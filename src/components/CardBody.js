import React from 'react';

function CardBody(props) {
    return (
        <div className="card-body">
            <h5 className="card-title">{props.description}</h5>
            <p className="card-text">{props.temperature}</p>
        </div>
    );
}

export default CardBody;