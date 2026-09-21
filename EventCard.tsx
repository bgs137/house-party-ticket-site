import React from 'react';

interface EventCardProps {
  title: string;
  date: string;
  venue: string;
  price: string;
  onViewDetails: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, venue, price, onViewDetails }) => {
  return (
    <article className="event-card">
      <div className="event-card__meta">House Party</div>
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{venue}</p>
      <div className="event-card__footer">
        <span>{price}</span>
        <button onClick={onViewDetails}>View Details</button>
      </div>
    </article>
  );
};

export default EventCard;