import React from 'react';
import { Link, useParams } from 'react-router-dom';

const eventData = {
  'new-year-night': {
    title: 'New Year House Party',
    date: 'Friday, 31 Dec 2026',
    time: '6:30 PM',
    location: 'Mikocheni, Dar es Salaam',
    description:
      'A festive December celebration full of music, dancing, gaming, food, and joyful countdown energy for the New Year.',
    ticketOptions: [{ type: 'General Entry' }],
  },
  'gaming-lounge': {
    title: 'Gaming & Chill Lounge',
    date: 'Saturday, 01 Jan 2027',
    time: '8:00 PM',
    location: 'Kijitonyama, Dar es Salaam',
    description:
      'An all-fun session with gaming, chill music, snacks, drinks, and a relaxed house-party vibe for friends.',
    ticketOptions: [{ type: 'General Entry' }],
  },
  'dj-vibes': {
    title: 'DJ Countdown Bash',
    date: 'Sunday, 02 Jan 2027',
    time: '10:00 PM',
    location: 'Mbezi Beach, Dar es Salaam',
    description:
      'A beachside DJ night with party lights, dancing, drinks, and a special countdown celebration to start the year right.',
    ticketOptions: [{ type: 'General Entry' }],
  },
};

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const event = eventData[id as keyof typeof eventData] ?? eventData['new-year-night'];

  return (
    <div className="detail-page">
      <div className="detail-card">
        <p className="eyebrow">Featured event</p>
        <h1>{event.title}</h1>
        <div className="detail-list">
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Time:</strong> {event.time}</p>
          <p><strong>Location:</strong> {event.location}</p>
        </div>
        <p className="detail-description">{event.description}</p>

        <h2>Ticket Options</h2>
        <ul className="ticket-list">
          {event.ticketOptions.map((ticket) => (
            <li key={ticket.type}>
              <span>{ticket.type}</span>
            </li>
          ))}
        </ul>

        <div className="detail-actions">
          <Link to="/checkout" className="primary-btn">
            Purchase Tickets
          </Link>
          <Link to="/" className="secondary-btn">
            Back to Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;