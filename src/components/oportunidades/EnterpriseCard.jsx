import React from 'react';


const EnterpriseCard = ({ logo, name, onViewMore, onViewOpportunities }) => {
    return (
        <div className="enterprise-card">
            <img src={logo} alt={`${name} logo`} className="enterprise-card__logo" />
            <h2 className="enterprise-card__name">{name}</h2>
            <div className="enterprise-card__buttons">
                <a href="https://www.mojix.com/es/" target='_blank' rel="noreferrer">
                    <button className="enterprise-card__button">
                        Ver más
                    </button>
                </a>
                <a href="https://www.linkedin.com/" target='_blank' rel="noreferrer">
                    <button className="enterprise-card__button enterprise-card__button--secondary">
                        Ver oportunidades
                    </button>
                </a>
            </div>
        </div>
    );
};

export default EnterpriseCard;