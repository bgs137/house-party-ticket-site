import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; {new Date().getFullYear()} HouseParty Dodoma </p>
        <div className="footer__links">
          <a href="/">Contact</a>
          <a href="/">Privacy</a>
          <a href="/">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;