import React from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

const highlights = [
  { icon: '🎤', title: 'Karaoke', text: 'Sing your heart out with the best vibe.' },
  { icon: '🎮', title: 'Gaming', text: 'Challenge friends in the gaming zone.' },
  { icon: '😂', title: 'Funny moments', text: 'Laugh nonstop with unforgettable memories.' },
  { icon: '✨', title: 'More fun', text: 'Dancing, music, food and nonstop energy.' },
];

const Home = () => {
  const history = useHistory();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const getTargetDate = () => {
      const now = new Date();
      const target = new Date(now.getFullYear(), 11, 28);

      if (target.getTime() <= now.getTime()) {
        target.setFullYear(now.getFullYear() + 1);
      }

      return target;
    };

    const targetDate = getTargetDate();

    const updateCountdown = () => {
      const difference = Math.max(targetDate.getTime() - Date.now(), 0);
      const totalSeconds = Math.floor(difference / 1000);

      setTimeLeft({
        days: Math.floor(totalSeconds / 86400),
        hours: Math.floor((totalSeconds % 86400) / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
      });
    };

    updateCountdown();
    const timer = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">December • New Year • House Party</p>
          <h1>House party of the season.</h1>
          <p>
            Music, good vibes, dancing, fun, and a night to remember with your crew.
          </p>
          <div className="countdown" aria-label="Countdown to 28 December">
            <p className="countdown__label">Countdown to 28 December</p>
            <div className="countdown__grid">
              <div><strong>{timeLeft.days}</strong><span>Days</span></div>
              <div><strong>{String(timeLeft.hours).padStart(2, '0')}</strong><span>Hours</span></div>
              <div><strong>{String(timeLeft.minutes).padStart(2, '0')}</strong><span>Minutes</span></div>
              <div><strong>{String(timeLeft.seconds).padStart(2, '0')}</strong><span>Seconds</span></div>
            </div>
          </div>
          <div className="hero__actions">
            <button className="primary-btn" onClick={() => history.push('/event/new-year-night')}>
              Get Ticket
            </button>
            <button className="secondary-btn" onClick={() => history.push('/checkout')}>
              Pay Now
            </button>
          </div>
        </div>
      </section>

      <section className="highlight-section">
        <div className="section-title">
          <p className="eyebrow">What to expect</p>
          <h2>Fun for everyone</h2>
        </div>

        <div className="highlight-grid">
          {highlights.map((item) => (
            <div key={item.title} className="highlight-card">
              <div className="highlight-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;