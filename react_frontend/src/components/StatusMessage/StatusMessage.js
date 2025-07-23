import React from 'react';
import './StatusMessage.css';

const StatusMessage = ({ winner, isXNext }) => {
  const message = winner
    ? `Winner: ${winner}`
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  return <div className="status-message">{message}</div>;
};

export default StatusMessage;
