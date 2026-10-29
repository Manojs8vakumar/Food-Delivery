import React, { useState } from 'react';
import { X, Mail, Phone, Lock, Sparkles, Check } from 'lucide-react';

export default function AuthModal({ isOpen, mode = 'login', onClose, onLoginSuccess }) {
  const [currentMode, setCurrentMode] = useState(mode);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otpSent) {
      if (!phone || phone.length < 10) {
        alert('Please enter a valid 10-digit mobile number');
        return;
      }
      setOtpSent(true);
    } else {
      // Complete login
      onLoginSuccess({
        name: name || (phone ? `User-${phone.slice(-4)}` : 'Gourmet Foodie'),
        phone: `+91 ${phone}`,
        email: 'user@cravefoodie-demo.com'
      });
      onClose();
    }
  };

  const handleDemoLogin = () => {
    onLoginSuccess({
      name: 'Aditya Verma',
      phone: '+91 98765 43210',
      email: 'aditya.verma@example.com'
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="auth-modal-card animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="auth-modal-header">
          <h2>{currentMode === 'login' ? 'Log in' : 'Sign up'}</h2>
          <button className="auth-close-btn" onClick={onClose} aria-label="Close auth dialog">
            <X size={20} />
          </button>
        </div>

        {/* Quick Demo Login Pill Banner */}
        <div className="demo-login-banner" onClick={handleDemoLogin}>
          <div className="demo-banner-left">
            <Sparkles size={16} className="sparkle-icon" />
            <div>
              <strong>Instant Demo Login</strong>
              <p>Click here to test logged-in profile instantly</p>
            </div>
          </div>
          <button type="button" className="demo-action-btn">
            Demo Login
          </button>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {currentMode === 'signup' && (
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your full name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label>Phone Number</label>
            <div className="phone-input-wrap">
              <span className="country-code">+91</span>
              <input 
                type="tel" 
                placeholder="Enter 10-digit mobile number" 
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                required
                disabled={otpSent}
              />
            </div>
          </div>

          {otpSent && (
            <div className="form-group animate-fade-in">
              <label>Enter 4-digit OTP</label>
              <input 
                type="text" 
                placeholder="Enter any 4 digits (e.g. 1234)" 
                value={otp}
                onChange={(e) => setOtp(e.target.value.slice(0, 4))}
                required
                autoFocus
              />
              <span className="otp-hint-text">OTP sent to +91 {phone} (Demo: enter 1234)</span>
            </div>
          )}

          <button type="submit" className="auth-submit-btn">
            {otpSent ? 'Verify & Continue' : 'Send One Time Password'}
          </button>
        </form>

        <div className="auth-or-divider">
          <span>or</span>
        </div>

        <div className="social-auth-options">
          <button 
            type="button" 
            className="social-btn google-btn"
            onClick={() => {
              onLoginSuccess({
                name: 'Google User',
                email: 'google.user@gmail.com',
                phone: '+91 99887 76655'
              });
              onClose();
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
            <span>Continue with Google</span>
          </button>

          <button 
            type="button" 
            className="social-btn email-btn"
            onClick={handleDemoLogin}
          >
            <Mail size={18} />
            <span>Continue with Email</span>
          </button>
        </div>

        <div className="auth-switch-mode">
          {currentMode === 'login' ? (
            <p>
              New to Crave Foodie?{' '}
              <button 
                type="button" 
                className="switch-mode-btn"
                onClick={() => { setCurrentMode('signup'); setOtpSent(false); }}
              >
                Create account
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button 
                type="button" 
                className="switch-mode-btn"
                onClick={() => { setCurrentMode('login'); setOtpSent(false); }}
              >
                Log in
              </button>
            </p>
          )}
        </div>

        <p className="auth-disclaimer">
          By continuing, you agree to our Terms of Service, Privacy Policy and Content Policies.
        </p>

      </div>
    </div>
  );
}
