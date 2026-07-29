import { useState } from 'react';
import './App.css';

export default function App() {
  const [expandedSections, setExpandedSections] = useState({
    services: true,
    pricing: false,
    timeline: false,
    caseStudy: false,
    nextSteps: false,
  });

  const [selectedScope, setSelectedScope] = useState('standard');
  const [timelineMonths, setTimelineMonths] = useState(3);

  // Brand colors - CUSTOMIZE THESE
  const brandColors = {
    primary: '#1a1a2e',      // Biz Emporia Navy
    accent: '#7C5CFF',       // Purple
    highlight: '#E6499B',    // Hot Pink
    bg: '#f8f9fa',
    text: '#333',
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const scopeData = {
    starter: { title: 'Starter', price: 25000, features: ['Google Ads Setup', 'Basic Optimization', 'Monthly Reporting'] },
    standard: { title: 'Standard', price: 50000, features: ['Google Ads', 'Meta Ads', 'SEO Audit', 'CRM Setup', 'Weekly Calls', 'Monthly Strategy Review'] },
    premium: { title: 'Premium', price: 100000, features: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'SEO/GEO', 'CRM Architecture', 'AI Tools Integration', 'Bi-weekly Calls', 'Custom Dashboard', 'Quarterly Strategy'] },
  };

  const currentScope = scopeData[selectedScope];
  const estimatedROI = (currentScope.price * 3).toLocaleString();

  return (
    <div className="proposal-container" style={{ '--primary': brandColors.primary, '--accent': brandColors.accent, '--highlight': brandColors.highlight }}>
      {/* HEADER */}
      <header className="proposal-header">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo-placeholder" style={{ backgroundColor: brandColors.primary }}>
              BE
            </div>
            <div>
              <h1>Biz Emporia</h1>
              <p>Strategic Digital Growth Partner</p>
            </div>
          </div>
          <div className="client-info">
            <h2>Custom Proposal</h2>
            <p style={{ color: brandColors.highlight, fontWeight: 'bold' }}>Prepared for: [Client Name]</p>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="proposal-body">
        
        {/* SERVICES SECTION */}
        <section className="proposal-section">
          <button 
            className="section-header" 
            onClick={() => toggleSection('services')}
            style={{ backgroundColor: expandedSections.services ? brandColors.accent : '#e9ecef' }}
          >
            <span>📊 Services We'll Deliver</span>
            <span className="toggle-icon">{expandedSections.services ? '−' : '+'}</span>
          </button>
          {expandedSections.services && (
            <div className="section-content">
              <p>Based on our call, we'll focus on:</p>
              <div className="service-cards">
                {currentScope.features.map((feature, idx) => (
                  <div key={idx} className="service-card">
                    <div className="service-icon">✓</div>
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* PRICING SECTION */}
        <section className="proposal-section">
          <button 
            className="section-header" 
            onClick={() => toggleSection('pricing')}
            style={{ backgroundColor: expandedSections.pricing ? brandColors.accent : '#e9ecef' }}
          >
            <span>💰 Investment & ROI</span>
            <span className="toggle-icon">{expandedSections.pricing ? '−' : '+'}</span>
          </button>
          {expandedSections.pricing && (
            <div className="section-content">
              <div className="scope-selector">
                <p><strong>Select Your Scope:</strong></p>
                <div className="scope-buttons">
                  {Object.entries(scopeData).map(([key, data]) => (
                    <button
                      key={key}
                      className={`scope-btn ${selectedScope === key ? 'active' : ''}`}
                      onClick={() => setSelectedScope(key)}
                      style={selectedScope === key ? { backgroundColor: brandColors.highlight, color: 'white' } : {}}
                    >
                      {data.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pricing-display">
                <div className="price-card">
                  <h3>{currentScope.title} Package</h3>
                  <div className="price-amount" style={{ color: brandColors.highlight }}>
                    ₹{currentScope.price.toLocaleString()}
                  </div>
                  <p className="price-duration">3-month engagement</p>
                </div>

                <div className="roi-card" style={{ borderLeft: `4px solid ${brandColors.accent}` }}>
                  <h4>Expected ROI (Conservative)</h4>
                  <p>₹{estimatedROI}</p>
                  <p className="roi-note">Based on industry benchmarks for your vertical</p>
                </div>
              </div>

              <div className="payment-terms">
                <p><strong>Payment Terms:</strong></p>
                <ul>
                  <li>50% upfront (project kickoff)</li>
                  <li>50% at month 2 (after first optimizations)</li>
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* TIMELINE SECTION */}
        <section className="proposal-section">
          <button 
            className="section-header" 
            onClick={() => toggleSection('timeline')}
            style={{ backgroundColor: expandedSections.timeline ? brandColors.accent : '#e9ecef' }}
          >
            <span>📅 Project Timeline</span>
            <span className="toggle-icon">{expandedSections.timeline ? '−' : '+'}</span>
          </button>
          {expandedSections.timeline && (
            <div className="section-content">
              <div className="timeline-slider">
                <label>Project Duration: <strong>{timelineMonths} months</strong></label>
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={timelineMonths}
                  onChange={(e) => setTimelineMonths(parseInt(e.target.value))}
                  style={{ accentColor: brandColors.highlight }}
                />
              </div>

              <div className="timeline-milestones">
                <div className="milestone">
                  <div className="milestone-marker" style={{ backgroundColor: brandColors.accent }}></div>
                  <div>
                    <h4>Week 1-2: Strategy & Setup</h4>
                    <p>Account audit, goals definition, campaign structure</p>
                  </div>
                </div>
                <div className="milestone">
                  <div className="milestone-marker" style={{ backgroundColor: brandColors.accent }}></div>
                  <div>
                    <h4>Week 3-4: Launch & Optimization</h4>
                    <p>Campaigns live, initial optimization, A/B testing begins</p>
                  </div>
                </div>
                <div className="milestone">
                  <div className="milestone-marker" style={{ backgroundColor: brandColors.accent }}></div>
                  <div>
                    <h4>Month 2-{timelineMonths}: Scale & Refine</h4>
                    <p>Scaling winning campaigns, audience expansion, conversion optimization</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* CASE STUDY SECTION */}
        <section className="proposal-section">
          <button 
            className="section-header" 
            onClick={() => toggleSection('caseStudy')}
            style={{ backgroundColor: expandedSections.caseStudy ? brandColors.accent : '#e9ecef' }}
          >
            <span>🎯 Why We're Different</span>
            <span className="toggle-icon">{expandedSections.caseStudy ? '−' : '+'}</span>
          </button>
          {expandedSections.caseStudy && (
            <div className="section-content">
              <div className="case-study-card">
                <h4>We've Done This Before</h4>
                <p>
                  Our clients in luxury real estate, B2B SaaS, and professional services have seen:
                </p>
                <ul>
                  <li><strong>3-5x ROI</strong> within 90 days</li>
                  <li><strong>40-60% reduction</strong> in customer acquisition cost</li>
                  <li><strong>Predictable growth</strong> through data-driven optimization</li>
                </ul>
                <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#666' }}>
                  We specialize in performance marketing with real accountability.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* NEXT STEPS */}
        <section className="proposal-section">
          <button 
            className="section-header" 
            onClick={() => toggleSection('nextSteps')}
            style={{ backgroundColor: expandedSections.nextSteps ? brandColors.accent : '#e9ecef' }}
          >
            <span>✅ Next Steps</span>
            <span className="toggle-icon">{expandedSections.nextSteps ? '−' : '+'}</span>
          </button>
          {expandedSections.nextSteps && (
            <div className="section-content">
              <div className="steps-list">
                <div className="step">
                  <div className="step-number" style={{ backgroundColor: brandColors.highlight }}>1</div>
                  <div>
                    <h4>Review This Proposal</h4>
                    <p>Go through all sections above. If you have questions, reply to this email.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number" style={{ backgroundColor: brandColors.highlight }}>2</div>
                  <div>
                    <h4>Schedule Implementation Call</h4>
                    <p>Let's align on details and finalize the engagement.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number" style={{ backgroundColor: brandColors.highlight }}>3</div>
                  <div>
                    <h4>Kick Off in Week 1</h4>
                    <p>We start the strategy work and get your campaigns live.</p>
                  </div>
                </div>
              </div>

              <div className="cta-buttons">
                <button className="cta-primary" style={{ backgroundColor: brandColors.highlight }}>
                  Schedule a Call
                </button>
                <button className="cta-secondary" style={{ borderColor: brandColors.accent, color: brandColors.accent }}>
                  Questions? Reply to Email
                </button>
              </div>
            </div>
          )}
        </section>

      </main>

      {/* FOOTER */}
      <footer
