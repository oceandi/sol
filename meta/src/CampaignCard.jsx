import React from 'react';
import { Camera, MoreHorizontal } from 'lucide-react';

const CampaignCard = ({
  title,
  badge1,
  badge2,
  speedValue,
  speedText,
  commitment1,
  commitment2,
  price,
  priceAction,
}) => {
  return (
    <div className="campaign-card">
      <div className="campaign-card__header campaign-card__header--primary">
        <h2 className="campaign-card__title">{title}</h2>
        <div className="campaign-card__header-badges">
          <span className="campaign-card__header-badge campaign-card__header-badge--left">{badge1}</span>
          <span className="campaign-card__header-badge campaign-card__header-badge--right">{badge2}</span>
        </div>
      </div>
      <div className="campaign-card__content">
        <div className="campaign-card__speed">
          <span className="campaign-card__speed-value">{speedValue}</span>
          <span className="campaign-card__speed-text">{speedText}</span>
        </div>
        <div className="campaign-card__commitment">
          <span>{commitment1}</span>
          <span>{commitment2}</span>
        </div>
      </div>
      <div className="campaign-card__footer">
        <div className="campaign-card__price">
          <span className="campaign-card__price-value">{price}</span>
          <a href={priceAction} className="campaign-card__price-action">
            İncele
          </a>
        </div>
        <div className="campaign-card__details-toggle">
          <MoreHorizontal />
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;