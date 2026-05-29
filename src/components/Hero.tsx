import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Shield, Lock, Unlock, AlertTriangle, Play, Sparkles, RefreshCw } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const [activeTab, setActiveTab] = useState<'vault' | 'eraseme'>('vault');
  const [vaultStatus, setVaultStatus] = useState<'blocked' | 'approved'>('blocked');
  const [brokers, setBrokers] = useState([
    { id: 1, name: 'Acxiom', cat: 'Marketing', status: 'pending' },
    { id: 2, name: 'Experian', cat: 'Credit Broker', status: 'pending' },
    { id: 3, name: 'Equifax', cat: 'Demographics', status: 'pending' },
  ]);
  const [isEraseTriggered, setIsEraseTriggered] = useState(false);
  const [isErasing, setIsErasing] = useState(false);

  const handleVaultApprove = () => {
    setVaultStatus('approved');
    setTimeout(() => {
      setVaultStatus('blocked');
    }, 4000);
  };

  const handleTriggerErase = () => {
    setIsEraseTriggered(true);
    setIsErasing(true);
    
    brokers.forEach((broker, index) => {
      setTimeout(() => {
        setBrokers(prev => prev.map(b => b.id === broker.id ? { ...b, status: 'erasing' } : b));
      }, index * 800 + 400);

      setTimeout(() => {
        setBrokers(prev => prev.map(b => b.id === broker.id ? { ...b, status: 'erased' } : b));
      }, index * 800 + 1200);
    });

    setTimeout(() => {
      setIsErasing(false);
    }, 3200);
  };

  const handleResetErase = () => {
    setBrokers([
      { id: 1, name: 'Acxiom', cat: 'Marketing', status: 'pending' },
      { id: 2, name: 'Experian', cat: 'Credit Broker', status: 'pending' },
      { id: 3, name: 'Equifax', cat: 'Demographics', status: 'pending' },
    ]);
    setIsEraseTriggered(false);
    setIsErasing(false);
  };

  return (
    <section 
      id="hero" 
      className="constrained-box animate-fade-in" 
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '48px',
        paddingTop: '100px',
        paddingBottom: '120px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <img
        src="/logo.png"
        alt=""
        aria-hidden="true"
        className="hero-logo-watermark"
      />

      {/* Hero Content */}
      <div style={{
        flex: '1 1 50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
      }}>
        {/* Glow Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          borderRadius: '30px',
          background: 'rgba(229, 195, 151, 0.05)',
          border: '1px solid rgba(229, 195, 151, 0.25)',
          marginBottom: '28px',
          boxShadow: '0 0 20px rgba(229, 195, 151, 0.08)',
        }}>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--cyan-primary)',
            boxShadow: '0 0 8px var(--cyan-primary)',
          }} className="animate-pulse" />
          <span style={{
            fontFamily: 'var(--font-tech)',
            fontSize: '11px',
            letterSpacing: '1.5px',
            color: 'var(--cyan-primary)',
            fontWeight: 700,
            textTransform: 'uppercase',
          }}>
            {t('heroBadge')}
          </span>
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(38px, 4rem, 64px)',
          lineHeight: 1.1,
          fontFamily: 'var(--font-title)',
          fontWeight: 800,
          letterSpacing: '0',
          marginBottom: '24px',
          color: 'var(--text-primary)',
        }}>
          <span style={{
            display: 'block',
            color: 'var(--text-primary)',
          }}>
            {t('heroTitle1')}
          </span>
          <span style={{
            display: 'block',
            color: 'var(--text-secondary)',
            fontSize: '80%',
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            margin: '6px 0',
          }}>
            {t('heroTitle2')}
          </span>
          <span style={{
            display: 'block',
            background: 'linear-gradient(90deg, var(--cyan-primary) 20%, var(--blue-accent) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 60px rgba(229, 195, 151, 0.15)',
          }}>
            {t('heroTitle3')}
          </span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '17px',
          color: 'var(--text-secondary)',
          lineHeight: '1.65',
          maxWidth: '540px',
          marginBottom: '40px',
          fontWeight: 400,
        }}>
          {t('heroSubtitle')}
        </p>

        <div className="name-explainer" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '10px',
          width: '100%',
          maxWidth: '570px',
          marginBottom: '34px',
        }}>
          {t('heroNameExplainer').split('. ').map((part) => (
            <div key={part} style={{
              padding: '12px 14px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.025)',
              border: '1px solid rgba(229, 195, 151, 0.14)',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-tech)',
              fontSize: '11px',
              lineHeight: 1.45,
            }}>
              {part.replace(/\.$/, '')}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
        }}>
          <a 
            href="#tools" 
            style={{
              padding: '14px 28px',
              borderRadius: '8px',
              color: theme === 'dark' ? '#000' : '#fff',
              fontWeight: 600,
              fontSize: '15px',
              boxShadow: theme === 'dark' ? '0 4px 20px rgba(229, 195, 151, 0.2)' : '0 4px 20px rgba(134, 104, 64, 0.25)',
              transition: 'var(--transition-fast)',
            }}
            className="action-button-primary"
          >
            {t('heroButtonTools')}
          </a>
          <a 
            href="#vision" 
            style={{
              padding: '14px 28px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              color: 'var(--text-primary)',
              fontWeight: 500,
              fontSize: '15px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              transition: 'var(--transition-fast)',
            }}
            className="action-button-secondary"
          >
            {t('heroButtonVision')}
          </a>
        </div>
      </div>

      {/* Interactive Trust Deck Dashboard */}
      <div 
        style={{
          flex: '1 1 45%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          width: '100%',
        }}
      >
        <div className="trust-deck-container animate-float">
          {/* Header */}
          <div className="deck-header">
            <span style={{
              fontFamily: 'var(--font-tech)',
              fontSize: '10px',
              color: 'var(--cyan-primary)',
              letterSpacing: '1px',
              fontWeight: 600,
            }}>
              SYM.CONTROL_DECK // v1.0
            </span>
            <div className="deck-tabs">
              <button 
                className={`deck-tab-btn ${activeTab === 'vault' ? 'active' : ''}`}
                onClick={() => setActiveTab('vault')}
              >
                {t('deckVaultTab')}
              </button>
              <button 
                className={`deck-tab-btn ${activeTab === 'eraseme' ? 'active' : ''}`}
                onClick={() => setActiveTab('eraseme')}
              >
                {t('deckEraseTab')}
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="deck-body">
            {activeTab === 'vault' ? (
              <>
                {/* Vault Tab */}
                <div className="deck-status-line">
                  <span>{t('deckVaultStatus')}</span>
                  <span className="deck-status-indicator">
                    <span className={`status-dot ${vaultStatus === 'blocked' ? 'blocked' : 'success'}`} />
                    {vaultStatus === 'blocked' ? t('deckStatusBlocked') : t('deckStatusApproved')}
                  </span>
                </div>

                <div className={`vault-card-visual ${vaultStatus === 'approved' ? 'approved' : ''}`}>
                  {vaultStatus === 'blocked' ? (
                    <div className="vault-request-overlay">
                      <div className="vault-request-header">
                        <AlertTriangle size={10} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                        {t('deckAgentRequest').toUpperCase()}
                      </div>
                      <div className="vault-request-body">
                        <div className="vault-agent-badge">
                          <Shield size={16} style={{ color: 'var(--cyan-primary)' }} />
                          <div>
                            <div style={{ fontSize: '12px', fontWeight: 600 }}>{t('deckAgentName')}</div>
                            <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Action: read_secret</div>
                          </div>
                        </div>
                        <div className="vault-key-visual">
                          <Lock size={14} className="vault-key-icon" />
                          <span>{t('deckRequestedItem')}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="vault-secure-tunnel">
                      <Unlock size={24} style={{ color: '#10b981' }} />
                      <span style={{ fontSize: '12px', fontWeight: 600, color: '#10b981' }}>
                        {t('deckStatusApproved')}
                      </span>
                      <div className="tunnel-line">
                        <div className="tunnel-pulse" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="vault-action-footer">
                  {vaultStatus === 'blocked' ? (
                    <button className="vault-approve-btn" onClick={handleVaultApprove}>
                      {t('deckButtonApprove')}
                    </button>
                  ) : (
                    <div style={{ textAlign: 'center', fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-tech)' }}>
                      Resetting simulation...
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                {/* EraseMe Tab */}
                <div className="deck-status-line">
                  <span>{t('deckEraseStatus')}</span>
                  <span className="deck-status-indicator">
                    <span className={`status-dot ${isEraseTriggered ? (isErasing ? 'active' : 'success') : 'active'}`} />
                    {isEraseTriggered ? (isErasing ? t('deckStatusErasing') : 'COMPLETED') : t('deckBrokerStatusScan')}
                  </span>
                </div>

                <div className="eraseme-list">
                  {brokers.map((broker) => (
                    <div key={broker.id} className={`eraseme-row ${broker.status}`}>
                      <Shield size={12} style={{ 
                        color: broker.status === 'erased' ? '#10b981' : (broker.status === 'erasing' ? 'var(--blue-accent)' : 'var(--text-muted)') 
                      }} />
                      <div className="broker-name">{broker.name}</div>
                      <div className="broker-category">{broker.cat}</div>
                      <div className={`broker-status-badge ${broker.status}`}>
                        {broker.status === 'erased' && <Sparkles size={8} style={{ display: 'inline-block', marginRight: '4px', verticalAlign: 'middle' }} />}
                        {broker.status === 'erased' ? t('deckStatusErased') : (broker.status === 'erasing' ? t('deckStatusErasing') : t('deckStatusPending'))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="vault-action-footer">
                  {!isEraseTriggered ? (
                    <button className="eraseme-action-btn" onClick={handleTriggerErase}>
                      <Play size={12} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} />
                      {t('deckButtonTriggerErase')}
                    </button>
                  ) : (
                    <button className="eraseme-action-btn" onClick={handleResetErase} disabled={isErasing}>
                      <RefreshCw size={12} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} />
                      Reset Simulation
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #hero {
            flex-direction: column !important;
            padding-top: 40px !important;
            padding-bottom: 60px !important;
            text-align: center !important;
          }
          #hero h1 {
            font-size: 46px !important;
          }
          #hero > div {
            align-items: center !important;
            text-align: center !important;
          }
          #hero p {
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
