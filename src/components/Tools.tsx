import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Shield, ArrowRight, MessageSquare, Workflow, Terminal } from 'lucide-react';

export const Tools: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const commandToCopy = 'npm install @symaira/vault-sdk';

  const copyCommand = () => {
    navigator.clipboard.writeText(commandToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="tools" 
      className="constrained-box" 
      style={{
        paddingTop: '80px',
        paddingBottom: '100px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Headings */}
      <div style={{
        textAlign: 'center',
        marginBottom: '60px',
      }}>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontFamily: 'var(--font-tech)',
          fontWeight: 700,
          letterSpacing: '-0.5px',
          marginBottom: '16px',
          background: 'linear-gradient(180deg, #fff 0%, #a1a1aa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          {t('toolsTitle')}
        </h2>
        <p style={{
          fontSize: '16px',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          {t('toolsSubtitle')}
        </p>
      </div>

      {/* Flagship: Symaira Vault Showcase */}
      <div 
        className="glass-panel flagship-showcase" 
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '40px',
          padding: '48px',
          marginBottom: '50px',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '24px',
          alignItems: 'center',
        }}
      >
        {/* Glow backdrop behind Vault */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(212, 165, 116, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 0,
        }} />

        {/* Content Section */}
        <div style={{
          flex: '1 1 50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'left',
          position: 'relative',
          zIndex: 1,
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '4px 12px',
            borderRadius: '4px',
            backgroundColor: 'rgba(212, 165, 116, 0.12)',
            border: '1px solid rgba(212, 165, 116, 0.3)',
            marginBottom: '20px',
          }}>
            <span style={{
              fontFamily: 'var(--font-tech)',
              fontSize: '10px',
              fontWeight: 800,
              color: 'var(--gold-primary)',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}>
              {t('vaultBadge')}
            </span>
          </div>

          <h3 style={{
            fontSize: '32px',
            fontFamily: 'var(--font-tech)',
            fontWeight: 700,
            marginBottom: '18px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            color: 'var(--text-primary)',
          }}>
            <Shield size={28} style={{ color: 'var(--gold-primary)' }} />
            {t('vaultTitle')}
          </h3>

          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
            marginBottom: '28px',
          }}>
            {t('vaultDesc')}
          </p>

          {/* Features Checklist */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            marginBottom: '36px',
            width: '100%',
          }}>
            {[1, 2, 3].map((num) => (
              <div key={num} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{
                  color: 'var(--gold-primary)',
                  fontFamily: 'var(--font-tech)',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  marginTop: '2px',
                }}>
                  //
                </span>
                <span style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.4',
                }}>
                  {t(`vaultFeature${num}` as any)}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', width: '100%' }}>
            <a 
              href="https://github.com/danieljustus/symaira-vault"
              target="_blank"
              rel="noopener noreferrer"
              className="action-button-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 24px',
                borderRadius: '8px',
                backgroundColor: 'var(--gold-primary)',
                color: '#000',
                fontWeight: 600,
                fontSize: '14px',
                transition: 'var(--transition-fast)',
              }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
              {t('vaultBtn')}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Mock Interactive Terminal / Tech Display */}
        <div style={{
          flex: '1 1 50%',
          position: 'relative',
          zIndex: 1,
          width: '100%',
        }}>
          {/* Terminal Box */}
          <div style={{
            fontFamily: 'Consolas, Monaco, "Andale Mono", monospace',
            fontSize: '13px',
            backgroundColor: 'rgba(5, 5, 8, 0.95)',
            border: '1px solid rgba(212, 165, 116, 0.15)',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(212, 165, 116, 0.05)',
          }}>
            {/* Terminal Header */}
            <div style={{
              backgroundColor: 'rgba(15, 15, 20, 0.8)',
              padding: '12px 16px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#eab308' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
              </div>
              <span style={{
                fontSize: '10px',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-tech)',
                letterSpacing: '1px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}>
                <Terminal size={10} />
                symaira-agent-runtime
              </span>
            </div>

            {/* Terminal Code Panel */}
            <div style={{
              padding: '20px',
              textAlign: 'left',
              color: 'rgb(226, 232, 240)',
              lineHeight: '1.7',
            }}>
              {/* Copy Install Command Row */}
              <div 
                onClick={copyCommand}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'rgba(212, 165, 116, 0.05)',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid rgba(212, 165, 116, 0.1)',
                  cursor: 'pointer',
                  marginBottom: '16px',
                  transition: 'var(--transition-fast)',
                }}
                className="terminal-install"
              >
                <span style={{ color: 'var(--gold-primary)' }}>{commandToCopy}</span>
                <span style={{ fontSize: '11px', color: copied ? '#22c55e' : 'var(--text-muted)' }}>
                  {copied ? 'Copied! ✓' : 'Click to copy'}
                </span>
              </div>

              {/* Mock Command execution */}
              <div style={{ color: 'var(--text-muted)' }}># Decrypt secrets dynamically for AI Agent</div>
              <div>
                <span style={{ color: 'var(--purple-accent)' }}>$</span> symaira-vault get db_uri --agent <span style={{ color: 'var(--gold-primary)' }}>"nexus-07"</span>
              </div>
              <div style={{ color: 'var(--text-muted)', paddingLeft: '8px' }}>
                &gt; Authorization check: agent_signature verified. <br />
                &gt; Policy check: [nexus-07] has read scope for [db_uri]...
              </div>
              <div style={{ color: '#22c55e', fontWeight: 600 }}>
                ✓ Access granted. Injecting secret securely into environment variable...
              </div>
              <div style={{ color: 'var(--text-muted)', paddingLeft: '8px' }}>
                DB_URI="postgresql://db.symaira.internal:5432/main?ssl=true"
              </div>
              <div style={{ marginTop: '14px', borderTop: '1px dashed rgba(255,255,255,0.05)', paddingTop: '10px' }} />
              <div>
                <span style={{ color: 'var(--purple-accent)' }}>$</span> symaira-vault status
              </div>
              <div>
                <span style={{ color: 'var(--gold-primary)' }}>Vault Status:</span> Online [Active Clusters: 3]
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Tools pipeline grid */}
      <h4 style={{
        fontSize: '20px',
        fontFamily: 'var(--font-tech)',
        color: 'var(--text-secondary)',
        marginBottom: '28px',
        textAlign: 'center',
      }}>
        {t('upcomingTitle')}
      </h4>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
      }}>
        {/* Symaira Connect */}
        <div 
          className="glass-panel" 
          style={{
            padding: '32px',
            opacity: 0.75,
            borderStyle: 'dashed',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginBottom: '20px',
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '8px',
              backgroundColor: 'rgba(139, 92, 246, 0.08)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <MessageSquare size={22} style={{ color: 'var(--purple-accent)' }} />
            </div>
            <span style={{
              fontSize: '9px',
              fontFamily: 'var(--font-tech)',
              letterSpacing: '1px',
              padding: '3px 8px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'var(--text-muted)',
            }}>
              {t('comingSoon')}
            </span>
          </div>

          <h5 style={{
            fontSize: '18px',
            fontFamily: 'var(--font-tech)',
            fontWeight: 600,
            marginBottom: '10px',
            color: 'var(--text-primary)',
          }}>
            {t('connectTitle')}
          </h5>
          <p style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            lineHeight: '1.5',
          }}>
            {t('connectDesc')}
          </p>
        </div>

        {/* Symaira Flow */}
        <div 
          className="glass-panel" 
          style={{
            padding: '32px',
            opacity: 0.75,
            borderStyle: 'dashed',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginBottom: '20px',
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '8px',
              backgroundColor: 'rgba(212, 165, 116, 0.08)',
              border: '1px solid rgba(212, 165, 116, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Workflow size={22} style={{ color: 'var(--gold-primary)' }} />
            </div>
            <span style={{
              fontSize: '9px',
              fontFamily: 'var(--font-tech)',
              letterSpacing: '1px',
              padding: '3px 8px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'var(--text-muted)',
            }}>
              {t('comingSoon')}
            </span>
          </div>

          <h5 style={{
            fontSize: '18px',
            fontFamily: 'var(--font-tech)',
            fontWeight: 600,
            marginBottom: '10px',
            color: 'var(--text-primary)',
          }}>
            {t('flowTitle')}
          </h5>
          <p style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            lineHeight: '1.5',
          }}>
            {t('flowDesc')}
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .flagship-showcase {
            flex-direction: column !important;
            padding: 24px !important;
          }
          .flagship-showcase > div {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
