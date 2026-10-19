import React from 'react';
import { Globe, ChevronDown, Linkedin, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="zomato-footer">
      <div className="content-wrapper">
        
        {/* Top Branding & Selectors */}
        <div className="footer-top-row">
          <div className="footer-brand">
            <span className="brand-text">zomato</span>
            <span className="brand-dot"></span>
          </div>

          <div className="footer-selectors">
            <div className="footer-select-pill">
              <span className="flag-icon">🇮🇳</span>
              <span>India</span>
              <ChevronDown size={14} />
            </div>
            <div className="footer-select-pill">
              <Globe size={15} />
              <span>English</span>
              <ChevronDown size={14} />
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="footer-links-grid">
          
          <div className="footer-column">
            <h4>ABOUT ZOMATO</h4>
            <ul>
              <li><a href="#about">Who We Are</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#careers">Work With Us</a></li>
              <li><a href="#investor">Investor Relations</a></li>
              <li><a href="#fraud">Report Fraud</a></li>
              <li><a href="#press">Press Kit</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>ZOMAVERSE</h4>
            <ul>
              <li><a href="#zomato">Zomato</a></li>
              <li><a href="#blinkit">Blinkit</a></li>
              <li><a href="#feeding">Feeding India</a></li>
              <li><a href="#hyperpure">Hyperpure</a></li>
              <li><a href="#zomlive">Zomato Live</a></li>
              <li><a href="#zomaland">Zomaland</a></li>
              <li><a href="#weather">Weather Union</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>FOR RESTAURANTS</h4>
            <ul>
              <li><a href="#partner">Partner With Us</a></li>
              <li><a href="#apps">Apps For You</a></li>
            </ul>
            <h4 style={{ marginTop: '24px' }}>FOR ENTERPRISES</h4>
            <ul>
              <li><a href="#enterprise">Zomato For Enterprise</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>LEARN MORE</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#sitemap">Sitemap</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>SOCIAL LINKS</h4>
            <div className="footer-social-icons">
              <a href="#linkedin" className="social-icon-box" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href="#instagram" className="social-icon-box" aria-label="Instagram"><Instagram size={16} /></a>
              <a href="#twitter" className="social-icon-box" aria-label="Twitter"><Twitter size={16} /></a>
              <a href="#youtube" className="social-icon-box" aria-label="YouTube"><Youtube size={16} /></a>
              <a href="#facebook" className="social-icon-box" aria-label="Facebook"><Facebook size={16} /></a>
            </div>

            <div className="footer-app-badges">
              <div className="app-badge-box">
                <div className="app-badge-text">
                  <span className="badge-small">Download on the</span>
                  <span className="badge-big">App Store</span>
                </div>
              </div>
              <div className="app-badge-box">
                <div className="app-badge-text">
                  <span className="badge-small">GET IT ON</span>
                  <span className="badge-big">Google Play</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-divider"></div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="footer-bottom-copy">
          <p>
            By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2026 © Zomato™ Ltd. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
