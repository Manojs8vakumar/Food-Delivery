import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose }) {
  if (!message) return null;

  const icons = {
    success: <CheckCircle2 size={18} className="toast-icon success" />,
    error: <AlertCircle size={18} className="toast-icon error" />,
    info: <Info size={18} className="toast-icon info" />
  };

  return (
    <div className={`toast-notification toast-${type}`}>
      {icons[type] || icons.success}
      <span className="toast-message">{message}</span>
      <button onClick={onClose} className="toast-close-btn" aria-label="Close notification">
        <X size={15} />
      </button>
    </div>
  );
}
