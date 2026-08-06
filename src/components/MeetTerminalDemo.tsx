import React from 'react';
import { Mic } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

/**
 * Terminal-style demo block for the Meet product (aria-hidden).
 * Shared by the tools grid (Tools.tsx) and the Meet product page
 * (ToolPage.tsx) so the demo markup stays in one place.
 */
export const MeetTerminalDemo: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="product-demo product-demo-terminal" aria-hidden="true">
      <div className="demo-header">
        <div className="demo-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="demo-title">
          <Mic size={12} />
          {t('meetDemoTitle')}
        </div>
      </div>
      <div className="terminal-lines" style={{ padding: '14px 18px 18px' }}>
        <p><span>$</span> symmeet record</p>
        <p>{t('meetDemoLine1')}</p>
        <p>{t('meetDemoLine2')}</p>
        <p>{t('meetDemoLine3')}</p>
        <p className="success">{t('meetDemoLine4')}</p>
      </div>
    </div>
  );
};
