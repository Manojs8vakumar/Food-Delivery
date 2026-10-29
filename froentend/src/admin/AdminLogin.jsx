import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  ArrowLeft, 
  AlertCircle, 
  Sparkles,
  KeyRound
} from 'lucide-react';

export default function AdminLogin({ 
  onLoginSuccess, 
  onBackToStorefront,
  theme,
  toggleTheme 
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Default credentials for Crave Foodie Super Admin
  const ADMIN_EMAIL = 'admin@cravefoodie.com';
  const ADMIN_PASS = 'admin123';

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password) {
      setError('Please provide both admin username/email and password.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      // Validate credentials
      const cleanEmail = email.trim().toLowerCase();
      const isValid = (cleanEmail === ADMIN_EMAIL || cleanEmail === 'admin') && password === ADMIN_PASS;

      if (isValid) {
        onLoginSuccess({
          email: ADMIN_EMAIL,
          name: 'Super Admin',
          role: 'ADMIN_OPERATIONS',
          token: `crave_adm_${Date.now()}`
        });
      } else {
        setError('Invalid admin credentials. Use admin@cravefoodie.com / admin123 or click "Auto-fill Demo Credentials".');
        setIsLoading(false);
      }
    }, 400);
  };

  const handleFillDemo = () => {
    setEmail(ADMIN_EMAIL);
    setPassword(ADMIN_PASS);
    setError('');
  };

  return (
    <div className="admin-login-fullscreen animate-fade-in">
      
      {/* Top Bar with Back and Theme */}
      <div className="admin-login-topbar">
        <button className="admin-back-storefront-btn" onClick={onBackToStorefront} style={{ width: 'auto' }}>
          <ArrowLeft size={16} />
          <span>Return to Storefront</span>
        </button>

        <div className="admin-brand-text" style={{ alignItems: 'center' }}>
          <span className="admin-brand-title" style={{ fontSize: 18 }}>crave foodie</span>
          <span className="admin-badge">Admin Gateway</span>
        </div>

        <button 
          onClick={toggleTheme} 
          className="admin-icon-btn"
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Central Login Card */}
      <div className="admin-login-card-wrapper">
        <div className="admin-login-card">
          
          {/* Header */}
          <div className="admin-login-card-header">
            <div className="admin-security-shield-bubble">
              <ShieldCheck size={32} />
            </div>
            <h2>Admin Portal Login</h2>
            <p>Enter your verified credentials to access the central management suite</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="admin-login-error-banner animate-fade-in">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          {/* One-click Demo Credentials Helper */}
          <div className="admin-demo-creds-banner" onClick={handleFillDemo}>
            <div className="demo-banner-content">
              <Sparkles size={16} color="var(--zomato-red)" />
              <div>
                <strong>Auto-fill Admin Credentials</strong>
                <p>Email: admin@cravefoodie.com | Pass: admin123</p>
              </div>
            </div>
            <button type="button" className="admin-fill-demo-btn">
              Fill
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="admin-login-form">
            <div className="admin-login-input-group">
              <label>Admin Email or Username</label>
              <div className="admin-login-input-wrap">
                <Mail size={18} className="input-icon" />
                <input 
                  type="text" 
                  placeholder="admin@cravefoodie.com or admin"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="username"
                  required
                />
              </div>
            </div>

            <div className="admin-login-input-group">
              <label>Password</label>
              <div className="admin-login-input-wrap">
                <KeyRound size={18} className="input-icon" />
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="Enter administrator password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />
                <button 
                  type="button" 
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              className="admin-login-submit-btn"
              disabled={isLoading}
            >
              {isLoading ? (
                <span>Authenticating Admin...</span>
              ) : (
                <>
                  <Lock size={16} />
                  <span>Authenticate & Enter Portal</span>
                </>
              )}
            </button>
          </form>

          {/* Security Notice Footer */}
          <div className="admin-login-footer-notice">
            <ShieldCheck size={14} color="var(--zomato-green)" />
            <span>Authorized personnel only. Sessions are encrypted and activity logged.</span>
          </div>

        </div>
      </div>

    </div>
  );
}
