import React, { useState } from 'react';

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    paymentMethod: 'VodaCash',
    ticketType: 'Single',
    ticketPrice: '50000',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    if (name === 'ticketType') {
      const price = value === 'Single' ? '50000' : '70000';
      setUserInfo((prev) => ({ ...prev, ticketType: value, ticketPrice: price }));
      return;
    }

    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('User Info:', userInfo);

    const paymentSound = new Audio('/assets/audio/tea.mp3');
    paymentSound.volume = 0.4;
    paymentSound.play().catch(() => undefined);

    alert(`Payment instructions: send TZS ${Number(userInfo.ticketPrice).toLocaleString()} to Vodacom number 351396433 and keep the proof.`);
  };

  return (
    <div className="checkout-page">
      <div className="checkout-card">
        <p className="eyebrow">Secure payment</p>
        <h1>Checkout</h1>

        <div className="payment-box">
          <p><strong>Payment Number:</strong> 351396433</p>
          <p><strong>Network:</strong> Vodacom</p>
          <p><strong>Instruction:</strong> Pay the full amount and send proof after booking.</p>
        </div>

        <form onSubmit={handleSubmit} className="checkout-form">
          <label>
            Full Name
            <input type="text" name="name" value={userInfo.name} onChange={handleInputChange} required />
          </label>

          <label>
            Email Address
            <input type="email" name="email" value={userInfo.email} onChange={handleInputChange} required />
          </label>

          <label>
            Ticket Option
            <select name="ticketType" value={userInfo.ticketType} onChange={handleInputChange}>
              <option value="Single">Single - 50,000 TZS</option>
              <option value="Double">Double - 70,000 TZS</option>
            </select>
          </label>

          <label>
            Payment Method
            <select name="paymentMethod" value={userInfo.paymentMethod} onChange={handleInputChange} required>
              <option value="VodaCash">Vodacom / VodaCash</option>
            </select>
          </label>

          <div className="price-tag">
            Total: <strong>TZS {Number(userInfo.ticketPrice).toLocaleString()}</strong>
          </div>

          <button type="submit" className="primary-btn">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;