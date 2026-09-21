import React, { useState } from 'react';

const TicketForm = () => {
    const [ticketCount, setTicketCount] = useState(1);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle ticket purchase logic here
        console.log(`Tickets: ${ticketCount}, Name: ${userName}, Email: ${userEmail}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="ticketCount">Number of Tickets:</label>
                <input
                    type="number"
                    id="ticketCount"
                    value={ticketCount}
                    onChange={(e) => setTicketCount(e.target.value)}
                    min="1"
                />
            </div>
            <div>
                <label htmlFor="userName">Name:</label>
                <input
                    type="text"
                    id="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="userEmail">Email:</label>
                <input
                    type="email"
                    id="userEmail"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Purchase Tickets</button>
        </form>
    );
};

export default TicketForm;