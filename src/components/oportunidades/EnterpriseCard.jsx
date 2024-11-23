import React from 'react';


const EnterpriseCard = ({ logo, name, onViewMore, onViewOpportunities }) => {
    return (
        <div className="enterprise-card">
            <img src={logo} alt={`${name} logo`} className="enterprise-card__logo" />
            <h2 className="enterprise-card__name">{name}</h2>
            <div className="enterprise-card__buttons">
                <button className="enterprise-card__button" onClick={onViewMore}>
                    Ver más
                </button>
                <button className="enterprise-card__button enterprise-card__button--secondary" onClick={onViewOpportunities}>
                    Ver oportunidades
                </button>
            </div>
        </div>
    );
};

export default EnterpriseCard;