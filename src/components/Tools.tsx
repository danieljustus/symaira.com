import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Shield, ArrowRight, MessageSquare, Workflow, Terminal, ShieldCheck, Eye } from 'lucide-react';

export const Tools: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
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
        paddingTop: '100px',
        paddingBottom: '120px',
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
          fontSize: 'clamp(28px, 4vw, 40px)',
          fontFamily: 'var(--font-title)',
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
          marginBottom: '60px',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '24px',
          alignItems: 'stretch',
          border: '1px solid rgba(229, 195, 151, 0.15)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(229, 195, 151, 0.02)',
        }}
      >
        {/* Glow backdrop behind Vault */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, var(--cyan-glow) 0%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 0,
        }} />

        {/* Content Section */}
        <div style={{
          flex: '1 1 45%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          textAlign: 'left',
          position: 'relative',
          zIndex: 1,
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '5px 12px',
            borderRadius: '4px',
            backgroundColor: 'rgba(229, 195, 151, 0.08)',
            border: '1px solid rgba(229, 195, 151, 0.25)',
            marginBottom: '20px',
          }}>
            <span style={{
              fontFamily: 'var(--font-tech)',
              fontSize: '10px',
              fontWeight: 800,
              color: 'var(--cyan-primary)',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}>
              {t('vaultBadge')}
            </span>
          </div>

          <h3 style={{
            fontSize: '30px',
            fontFamily: 'var(--font-title)',
            fontWeight: 700,
            marginBottom: '18px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            color: 'var(--text-primary)',
          }}>
            <Shield size={26} style={{ color: 'var(--cyan-primary)', filter: 'drop-shadow(0 0 6px rgba(229, 195, 151, 0.3))' }} />
            {t('vaultTitle')}
          </h3>

          <p style={{
            fontSize: '14.5px',
            color: 'var(--text-secondary)',
            lineHeight: '1.65',
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
                  color: 'var(--cyan-primary)',
                  fontFamily: 'var(--font-tech)',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  marginTop: '2px',
                }}>
                  //
                </span>
                <span style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.45',
                }}>
                  {t(`vaultFeature${num}` as 'vaultFeature1' | 'vaultFeature2' | 'vaultFeature3')}
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
                color: theme === 'dark' ? '#000' : '#fff',
                fontWeight: 600,
                fontSize: '14px',
                transition: 'var(--transition-fast)',
              }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
              {t('vaultBtn')}
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Mock Interactive Console & Agent Sandbox Diff Visualizer */}
        <div style={{
          flex: '1 1 55%',
          position: 'relative',
          zIndex: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          {/* Console / Terminal simulation panel */}
          <div style={{
            fontFamily: 'var(--font-tech)',
            fontSize: '12px',
            backgroundColor: 'rgba(5, 5, 8, 0.95)',
            border: '1px solid rgba(229, 195, 151, 0.2)',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(229, 195, 151, 0.03)',
            display: 'flex',
            flexDirection: 'column',
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
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
              </div>
              <span style={{
                fontSize: '10px',
                color: 'var(--text-secondary)',
                letterSpacing: '1px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}>
                <Terminal size={12} style={{ color: 'var(--cyan-primary)' }} />
                symaira-vault-sdk --bash
              </span>
            </div>

            {/* Terminal Code Panel */}
            <div style={{
              padding: '20px',
              textAlign: 'left',
              color: '#e5e7eb',
              lineHeight: '1.65',
            }}>
              {/* Copy Install Command Row */}
              <div 
                onClick={copyCommand}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'rgba(229, 195, 151, 0.04)',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid rgba(229, 195, 151, 0.15)',
                  cursor: 'pointer',
                  marginBottom: '16px',
                  transition: 'var(--transition-fast)',
                }}
                className="terminal-install"
              >
                <span style={{ color: 'var(--cyan-primary)' }}>{commandToCopy}</span>
                <span style={{ fontSize: '11px', color: copied ? '#10b981' : 'var(--text-muted)' }}>
                  {copied ? 'Copied! ✓' : 'Click to copy'}
                </span>
              </div>

              {/* Mock Command execution */}
              <div style={{ color: 'var(--text-muted)' }}># Decrypt credentials dynamically inside LLM context</div>
              <div>
                <span style={{ color: 'var(--blue-accent)' }}>$</span> symaira-vault get db_uri --agent <span style={{ color: 'var(--cyan-primary)' }}>"nexus-07"</span>
              </div>
              <div style={{ color: 'var(--text-secondary)', paddingLeft: '8px', opacity: 0.8 }}>
                &gt; Authorization check: agent_signature verified. <br />
                &gt; Policy check: [nexus-07] has read scope for [db_uri]...
              </div>
              <div style={{ color: '#10b981', fontWeight: 600 }}>
                ✓ Access granted. Injecting secret securely into environment variable...
              </div>
              <div style={{ color: 'var(--text-muted)', paddingLeft: '8px' }}>
                DB_URI="postgresql://db.symaira.internal:5432/main?ssl=true"
              </div>
            </div>
          </div>

          {/* Visual Sandbox QA Screen Diff Panel - Antigravity inspired */}
          <div style={{
            fontFamily: 'var(--font-tech)',
            fontSize: '11px',
            backgroundColor: 'rgba(5, 5, 8, 0.95)',
            border: '1px solid rgba(174, 200, 230, 0.2)',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(174, 200, 230, 0.02)',
            display: 'flex',
            flexDirection: 'column',
          }}>
            {/* Header */}
            <div style={{
              backgroundColor: 'rgba(15, 15, 20, 0.8)',
              padding: '10px 16px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Eye size={12} style={{ color: 'var(--blue-accent)' }} />
                <span style={{ color: 'var(--text-secondary)' }}>agent-sandbox-visual-qa</span>
              </div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '2px 8px',
                borderRadius: '10px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                color: '#10b981',
                fontSize: '9px',
                fontWeight: 'bold',
              }}>
                <ShieldCheck size={10} /> INTEGRITY MATCHED 100%
              </div>
            </div>

            {/* Split Screenshot diff view */}
            <div style={{
              padding: '16px',
              display: 'flex',
              gap: '14px',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              {/* Original Screen */}
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ color: 'var(--text-muted)', fontSize: '9px' }}>[1] EXPECTED (REFERENCE)</div>
                <div style={{
                  height: '60px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: 'rgba(255, 255, 255, 0.01)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {/* Mock dashboard wires */}
                  <div style={{ width: '80%', height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', position: 'absolute', top: '12px' }} />
                  <div style={{ width: '40%', height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', position: 'absolute', top: '24px', left: '10%' }} />
                  <div style={{ width: '12px', height: '12px', background: 'var(--blue-accent)', borderRadius: '50%', position: 'absolute', bottom: '10px', right: '12px', opacity: 0.6 }} />
                </div>
              </div>

              {/* Slider / Diff Divider */}
              <div style={{
                height: '50px',
                width: '1px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '8px',
                  height: '8px',
                  background: 'var(--cyan-primary)',
                  borderRadius: '50%',
                  boxShadow: '0 0 6px var(--cyan-primary)',
                }} />
              </div>

              {/* Agent Rendered Screen */}
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ color: 'var(--cyan-primary)', fontSize: '9px' }}>[2] RENDERED (AGENT EXECUTION)</div>
                <div style={{
                  height: '60px',
                  borderRadius: '6px',
                  border: '1px solid var(--cyan-glow-intense)',
                  background: 'rgba(229, 195, 151, 0.02)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {/* Mock dashboard wires */}
                  <div style={{ width: '80%', height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', position: 'absolute', top: '12px' }} />
                  <div style={{ width: '40%', height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', position: 'absolute', top: '24px', left: '10%' }} />
                  <div style={{ width: '12px', height: '12px', background: 'var(--cyan-primary)', borderRadius: '50%', position: 'absolute', bottom: '10px', right: '12px', filter: 'drop-shadow(0 0 4px var(--cyan-primary))' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Tools pipeline grid */}
      <h4 style={{
        fontSize: '18px',
        fontFamily: 'var(--font-tech)',
        color: 'var(--text-secondary)',
        marginBottom: '32px',
        textAlign: 'center',
        letterSpacing: '1px',
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
            padding: '36px 32px',
            opacity: 0.85,
            borderStyle: 'dashed',
            borderColor: 'rgba(174, 200, 230, 0.35)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
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
              width: '42px',
              height: '42px',
              borderRadius: '8px',
              backgroundColor: 'rgba(174, 200, 230, 0.08)',
              border: '1px solid rgba(174, 200, 230, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <MessageSquare size={20} style={{ color: 'var(--blue-accent)' }} />
            </div>
            <span style={{
              fontSize: '9px',
              fontFamily: 'var(--font-tech)',
              letterSpacing: '1px',
              padding: '3px 8px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'var(--text-muted)',
              fontWeight: 700,
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
            lineHeight: '1.55',
          }}>
            {t('connectDesc')}
          </p>
        </div>

        {/* Symaira Flow */}
        <div 
          className="glass-panel" 
          style={{
            padding: '36px 32px',
            opacity: 0.85,
            borderStyle: 'dashed',
            borderColor: 'rgba(229, 195, 151, 0.35)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
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
              width: '42px',
              height: '42px',
              borderRadius: '8px',
              backgroundColor: 'rgba(229, 195, 151, 0.08)',
              border: '1px solid rgba(229, 195, 151, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Workflow size={20} style={{ color: 'var(--cyan-primary)' }} />
            </div>
            <span style={{
              fontSize: '9px',
              fontFamily: 'var(--font-tech)',
              letterSpacing: '1px',
              padding: '3px 8px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'var(--text-muted)',
              fontWeight: 700,
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
            lineHeight: '1.55',
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
