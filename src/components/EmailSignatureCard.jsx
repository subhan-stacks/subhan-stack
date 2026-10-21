import React, { useState } from 'react';

const EmailSignatureCard = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('Shiekhsubhan62@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="email-signature-card-wrap">
      <div className="sig-glow-wrap">
        <div className="sig-card">
          <div className="sig-card-body">
            {/* Left Panel */}
            <div className="sig-panel-left">
              <div className="sig-avatar-ring">
                <img
                  src="/images/profile.png"
                  alt="Subhan Ahmad"
                  onError={(e) => {
                    e.currentTarget.src = '/images/img.jpg';
                  }}
                />
              </div>
              <div className="sig-left-meta">
                <h3 className="sig-name">Subhan Ahmad</h3>
                <span className="sig-role-tag">Full Stack Developer</span>
                <p className="sig-role-sub">AI Integration Specialist</p>
                <div className="sig-accent-line" />
                <p className="sig-location">
                  <strong>Gulberg III, Lahore</strong>
                  <span className="sig-location-break">, </span>
                  <span className="sig-country">Pakistan</span>
                </p>
              </div>
            </div>

            {/* Right Panel */}
            <div className="sig-panel-right">
              <p className="sig-intro">
                I build <strong>fast, modern web apps</strong> with AI built in.
              </p>
              <div className="sig-chips">
                <span className="sig-chip">React</span>
                <span className="sig-chip">JavaScript</span>
                <span className="sig-chip">Firebase</span>
                <span className="sig-chip">AI APIs</span>
                <span className="sig-chip">RAG</span>
                <span className="sig-chip">Next.js</span>
                <span className="sig-chip">Node.js</span>
              </div>

              <div className="sig-divider" />

              <div className="sig-contact-list">
                <div className="sig-contact-row">
                  <span className="sig-contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </span>
                  <span className="sig-contact-label">Phone</span>
                  <a href="tel:+923711441930">0371 1441930</a>
                </div>

                <div className="sig-contact-row">
                  <span className="sig-contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <span className="sig-contact-label">Email</span>
                  <a href="mailto:Shiekhsubhan62@gmail.com">Shiekhsubhan62@gmail.com</a>
                </div>

                <div className="sig-contact-row">
                  <span className="sig-contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                  </span>
                  <span className="sig-contact-label">Web</span>
                  <a href="https://subhan-ahmad.netlify.app/" target="_blank" rel="noreferrer">
                    subhan-ahmad.netlify.app
                  </a>
                </div>
              </div>

              <div className="sig-actions">
                <button
                  type="button"
                  className="sig-btn sig-btn-primary"
                  onClick={handleCopyEmail}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                  </svg>
                  {copied ? 'Copied Email!' : 'Copy Email'}
                </button>

                <a
                  href="mailto:Shiekhsubhan62@gmail.com?subject=Project%20Inquiry%20-%20Subhan%20Ahmad"
                  className="sig-btn sig-btn-ghost"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Email Me
                </a>

                <a
                  href="https://wa.me/923711441930"
                  target="_blank"
                  rel="noreferrer"
                  className="sig-btn sig-btn-ghost"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  WhatsApp
                </a>

                <a
                  href="https://www.linkedin.com/in/subhan-shiekh12345"
                  target="_blank"
                  rel="noreferrer"
                  className="sig-btn sig-btn-ghost"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/subhan-stacks"
                  target="_blank"
                  rel="noreferrer"
                  className="sig-btn sig-btn-ghost"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                  </svg>
                  GitHub
                </a>
              </div>

              <p className="sig-collab">
                Let's collaborate! I am always open to discussing exciting projects and new opportunities.
              </p>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="sig-footer">
            <span className="sig-footer-dot" />
            Open to developer roles &amp; freelance projects
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSignatureCard;
