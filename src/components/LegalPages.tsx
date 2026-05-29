import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, Scale, Shield } from 'lucide-react';

interface SafeContactInfoProps {
  type: 'name' | 'address' | 'email';
  lang?: 'de' | 'en';
}

const SafeContactInfo: React.FC<SafeContactInfoProps> = ({ type, lang = 'en' }) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    if (type === 'email') {
      return <span style={{ opacity: 0.8 }}>info [at] symaira.com</span>;
    }
    return (
      <span style={{ opacity: 0.5, fontSize: '13px', fontStyle: 'italic' }}>
        {lang === 'de' ? '[Lade Kontaktdaten...]' : '[Loading contact details...]'}
      </span>
    );
  }

  // Base64 decoded at client side to avoid crawler/scraper harvests
  const name = atob('RGFuaWVsIEp1c3R1cw=='); // Daniel Justus
  const street = atob('SW0gS29ycmVzZ2FydGVuIDM3'); // Im Korresgarten 37
  const city = atob('NTM3OTcgTG9obWFy'); // 53797 Lohmar
  const country = lang === 'de' ? atob('RGV1dHNjaGxhbmQ=') : atob('R2VybWFueQ=='); // Deutschland / Germany
  const email = atob('aW5mb0BzeW1haXJhLmNvbQ=='); // info@symaira.com

  if (type === 'email') {
    return (
      <a 
        href={`mailto:${email}`}
        className="nav-link"
        style={{ 
          color: 'var(--cyan-primary)', 
          textDecoration: 'underline',
          display: 'inline-flex',
          alignItems: 'center',
          transition: 'var(--transition-fast)'
        }}
      >
        {email}
      </a>
    );
  }

  if (type === 'name') {
    return <span>{name}</span>;
  }

  if (type === 'address') {
    return (
      <span>
        {street}<br />
        {city}<br />
        {country}
      </span>
    );
  }

  return null;
};

interface LegalPagesProps {
  view: 'impressum' | 'privacy';
}

export const LegalPages: React.FC<LegalPagesProps> = ({ view }) => {
  const { language } = useLanguage();

  const handleBackToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="constrained-box" style={{ padding: '40px 24px', minHeight: '80vh', position: 'relative', zIndex: 10 }}>
      {/* Back Button */}
      <div style={{ marginBottom: '40px' }}>
        <a
          href="#"
          onClick={handleBackToHome}
          className="action-button-secondary"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 18px',
            borderRadius: '8px',
            border: '1px solid rgba(229, 195, 151, 0.15)',
            background: 'rgba(255, 255, 255, 0.02)',
            color: 'var(--cyan-primary)',
            fontSize: '14px',
            fontFamily: 'var(--font-tech)',
            fontWeight: 650,
            cursor: 'pointer',
          }}
        >
          <ArrowLeft size={16} />
          {language === 'de' ? 'Zurück zur Startseite' : 'Back to Home'}
        </a>
      </div>

      {view === 'impressum' ? (
        <article className="glass-panel animate-fade-in" style={{ padding: '40px', borderRadius: '16px' }}>
          <header style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px', borderBottom: '1px solid rgba(229, 195, 151, 0.15)', paddingBottom: '20px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(229, 195, 151, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cyan-primary)', border: '1px solid rgba(229, 195, 151, 0.2)' }}>
              <Scale size={24} />
            </div>
            <div>
              <h1 style={{ fontSize: '28px', fontWeight: 700, fontFamily: 'var(--font-title)' }}>
                {language === 'de' ? 'Impressum' : 'Imprint (Legal Notice)'}
              </h1>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-tech)', marginTop: '4px' }}>
                {language === 'de' ? 'Angaben gemäß § 5 DDG' : 'Required disclosures under German law'}
              </p>
            </div>
          </header>

          <div className="legal-content" style={{ display: 'flex', flexDirection: 'column', gap: '28px', color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.7' }}>
            {language === 'de' ? (
              <>
                <section>
                  <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>Dienstanbieter</h2>
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                    <SafeContactInfo type="name" lang="de" />
                  </p>
                  <div style={{ marginTop: '4px', lineHeight: '1.6' }}>
                    <SafeContactInfo type="address" lang="de" />
                  </div>
                </section>

                <section>
                  <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>Kontakt</h2>
                  <p>
                    E-Mail:{' '}
                    <SafeContactInfo type="email" lang="de" />
                  </p>
                </section>

                <section>
                  <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>Verantwortlich für den Inhalt nach § 18 MStV</h2>
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                    <SafeContactInfo type="name" lang="de" />
                  </p>
                  <div style={{ marginTop: '4px', lineHeight: '1.6' }}>
                    <SafeContactInfo type="address" lang="de" />
                  </div>
                </section>

                <section style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '20px', marginTop: '20px' }}>
                  <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>Streitschlichtung</h2>
                  <p>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                    <a 
                      href="https://ec.europa.eu/consumers/odr/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: 'var(--cyan-primary)', textDecoration: 'underline' }}
                    >
                      https://ec.europa.eu/consumers/odr
                    </a>.
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                  </p>
                  <p style={{ marginTop: '10px' }}>
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>Service Provider</h2>
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                    <SafeContactInfo type="name" lang="en" />
                  </p>
                  <div style={{ marginTop: '4px', lineHeight: '1.6' }}>
                    <SafeContactInfo type="address" lang="en" />
                  </div>
                </section>

                <section>
                  <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>Contact</h2>
                  <p>
                    Email:{' '}
                    <SafeContactInfo type="email" lang="en" />
                  </p>
                </section>

                <section>
                  <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>Responsible for Editorial Content (under § 18 MStV)</h2>
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                    <SafeContactInfo type="name" lang="en" />
                  </p>
                  <div style={{ marginTop: '4px', lineHeight: '1.6' }}>
                    <SafeContactInfo type="address" lang="en" />
                  </div>
                </section>

                <section style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '20px', marginTop: '20px' }}>
                  <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>Consumer Dispute Resolution</h2>
                  <p>
                    The European Commission provides a platform for online dispute resolution (ODR):{' '}
                    <a 
                      href="https://ec.europa.eu/consumers/odr/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: 'var(--cyan-primary)', textDecoration: 'underline' }}
                    >
                      https://ec.europa.eu/consumers/odr
                    </a>.
                    You can find our email address at the top of this legal notice.
                  </p>
                  <p style={{ marginTop: '10px' }}>
                    We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.
                  </p>
                </section>
              </>
            )}
          </div>
        </article>
      ) : (
        <article className="glass-panel animate-fade-in" style={{ padding: '40px', borderRadius: '16px' }}>
          <header style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px', borderBottom: '1px solid rgba(229, 195, 151, 0.15)', paddingBottom: '20px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(229, 195, 151, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cyan-primary)', border: '1px solid rgba(229, 195, 151, 0.2)' }}>
              <Shield size={24} />
            </div>
            <div>
              <h1 style={{ fontSize: '28px', fontWeight: 700, fontFamily: 'var(--font-title)' }}>
                {language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
              </h1>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-tech)', marginTop: '4px' }}>
                {language === 'de' ? 'Informationen zur Datenverarbeitung nach DSGVO' : 'Data processing information under GDPR'}
              </p>
            </div>
          </header>

          <div className="legal-content" style={{ display: 'flex', flexDirection: 'column', gap: '28px', color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.7' }}>
            {language === 'de' ? (
              <>
                <section>
                  <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>1. Datenschutz auf einen Blick</h2>
                  <p>
                    Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie darüber, 
                    welche Daten bei der Nutzung unserer Website verarbeitet werden.
                  </p>
                </section>

                <section>
                  <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>2. Verantwortlicher</h2>
                  <p>
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                  </p>
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginTop: '8px' }}>
                    <SafeContactInfo type="name" lang="de" />
                  </p>
                  <div style={{ lineHeight: '1.6' }}>
                    <SafeContactInfo type="address" lang="de" />
                  </div>
                  <p style={{ marginTop: '8px' }}>
                    E-Mail: <SafeContactInfo type="email" lang="de" />
                  </p>
                </section>

                <section>
                  <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>3. Bereitstellung der Website und Server-Logfiles</h2>
                  <p>
                    Bei jedem Aufruf unserer Website erfasst unser System automatisiert Daten und Informationen vom Computersystem des aufrufenden Rechners. 
                    Diese werden in den Logfiles des Servers gespeichert:
                  </p>
                  <ul style={{ paddingLeft: '20px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>Browsertyp und Browserversion</li>
                    <li>Verwendetes Betriebssystem</li>
                    <li>Referrer URL (die zuvor besuchte Seite)</li>
                    <li>Hostname des zugreifenden Rechners (IP-Adresse in anonymisierter Form)</li>
                    <li>Uhrzeit der Serveranfrage</li>
                  </ul>
                  <p style={{ marginTop: '12px' }}>
                    Die Rechtsgrundlage für die vorübergehende Speicherung dieser Daten ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). 
                    Unser berechtigtes Interesse besteht in der fehlerfreien und sicheren Bereitstellung unserer Website. Eine Zusammenführung dieser Daten 
                    mit anderen Datenquellen wird nicht vorgenommen.
                  </p>
                </section>

                <section>
                  <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>4. Local Storage (Lokaler Speicher)</h2>
                  <p>
                    Um Ihre Präferenzen (wie die ausgewählte Sprache und den Farbmodus) bei späteren Besuchen der Website zu erhalten, 
                    nutzt diese Website die Local-Storage-Funktion Ihres Browsers. Diese Einstellungen werden lokal auf Ihrem Gerät gespeichert. 
                    Es werden keine personenbezogenen Profile erstellt und keine dieser Daten an Server oder Dritte übertragen.
                  </p>
                  <p style={{ marginTop: '8px' }}>
                    Die Rechtsgrundlage für diese Speicherung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer nutzerfreundlichen Bedienbarkeit). 
                    Sie können den lokalen Speicher jederzeit über Ihre Browsereinstellungen löschen oder deaktivieren.
                  </p>
                </section>

                <section>
                  <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>5. Cookies und Web-Analyse</h2>
                  <p>
                    Um Ihre Privatsphäre bestmöglich zu schützen, verzichten wir standardmäßig auf das Laden von Analyse-Diensten. 
                    Wir setzen <strong>Google Analytics 4 (GA4)</strong>, einen Webanalysedienst der Google Ireland Limited, erst dann ein, wenn Sie dem aktiv über unser Cookie-Banner zugestimmt haben (<strong>Opt-In</strong>).
                  </p>
                  <p style={{ marginTop: '8px' }}>
                    Sollten Sie Ihre Zustimmung erteilen, werden mithilfe von Cookies Informationen über Ihre Nutzung dieser Website (einschließlich Ihrer gekürzten und somit anonymisierten IP-Adresse) erhoben und an Server von Google übertragen, um anonyme Berichte über die Webseitenaktivitäten zu erstellen.
                  </p>
                  <p style={{ marginTop: '8px' }}>
                    Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Klicken Sie dazu auf den folgenden Button, um Ihre Einstellungen zurückzusetzen:
                  </p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.dispatchEvent(new CustomEvent('reset-cookie-consent'));
                    }}
                    className="action-button-secondary"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 14px',
                      borderRadius: '6px',
                      border: '1px solid rgba(229, 195, 151, 0.15)',
                      background: 'rgba(255, 255, 255, 0.02)',
                      color: 'var(--cyan-primary)',
                      fontSize: '13px',
                      fontFamily: 'var(--font-tech)',
                      fontWeight: 600,
                      cursor: 'pointer',
                      marginTop: '10px'
                    }}
                  >
                    Einwilligung widerrufen / Einstellungen zurücksetzen
                  </button>
                </section>

                <section>
                  <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>6. Ihre Rechte</h2>
                  <p>Sie haben im Rahmen der gesetzlichen Bestimmungen der DSGVO folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
                  <ul style={{ paddingLeft: '20px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li><strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie können Auskunft darüber verlangen, ob und welche Daten wir verarbeiten.</li>
                    <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie können unvollständige oder unrichtige Daten korrigieren lassen.</li>
                    <li><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer Daten beantragen.</li>
                    <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie können die Einschränkung der Verarbeitung verlangen.</li>
                    <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie können Ihre bereitgestellten Daten in einem strukturierten Format erhalten.</li>
                    <li><strong>Recht auf Widerspruch (Art. 21 DSGVO):</strong> Sie können der Verarbeitung widersprechen.</li>
                  </ul>
                  <p style={{ marginTop: '12px' }}>
                    Wenden Sie sich zur Ausübung dieser Rechte einfach an die oben im Impressum genannte E-Mail-Adresse. 
                    Des Weiteren steht Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu (Art. 77 DSGVO).
                  </p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>1. Privacy at a Glance</h2>
                  <p>
                    The protection of your personal data is a key concern for us. Below, we inform you about the details of how 
                    data is processed when you use our website.
                  </p>
                </section>

                <section>
                  <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>2. Data Controller</h2>
                  <p>
                    The controller responsible for data processing on this website is:
                  </p>
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginTop: '8px' }}>
                    <SafeContactInfo type="name" lang="en" />
                  </p>
                  <div style={{ lineHeight: '1.6' }}>
                    <SafeContactInfo type="address" lang="en" />
                  </div>
                  <p style={{ marginTop: '8px' }}>
                    Email: <SafeContactInfo type="email" lang="en" />
                  </p>
                </section>

                <section>
                  <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>3. Website Provision and Server Log Files</h2>
                  <p>
                    Whenever our website is accessed, our hosting server automatically collects data and information from the system of the accessing device. 
                    These are stored in the server log files:
                  </p>
                  <ul style={{ paddingLeft: '20px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>Browser type and version</li>
                    <li>Operating system used</li>
                    <li>Referrer URL (the previously visited page)</li>
                    <li>Hostname of the accessing computer (anonymized IP address)</li>
                    <li>Time of the server request</li>
                  </ul>
                  <p style={{ marginTop: '12px' }}>
                    The legal basis for the temporary storage of this data is Art. 6 (1) (f) GDPR (legitimate interests). 
                    Our legitimate interest lies in the secure and error-free operation of our website. This data is not merged with 
                    other data sources.
                  </p>
                </section>

                <section>
                  <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>4. Local Storage</h2>
                  <p>
                    To preserve your selected preferences (such as language selection and color theme) between sessions, this website 
                    uses your browser's local storage function. These settings are stored locally on your device. No personal profiles 
                    are created, and no data is sent to servers or third-party entities.
                  </p>
                  <p style={{ marginTop: '8px' }}>
                    The legal basis for this is Art. 6 (1) (f) GDPR (legitimate interest in providing a smooth user experience). 
                    You can clear or disable local storage in your browser settings at any time.
                  </p>
                </section>

                <section>
                  <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>5. Cookies and Web Analytics</h2>
                  <p>
                    To protect your privacy, we block all third-party analytics by default. We only utilize <strong>Google Analytics 4 (GA4)</strong>, 
                    a web analytics service provided by Google Ireland Limited, if you actively grant consent via our cookie preferences banner (<strong>Opt-In</strong>).
                  </p>
                  <p style={{ marginTop: '8px' }}>
                    If consent is given, cookies are used to gather information about your website usage (including your shortened and anonymized IP address) and transfer it to Google servers to build anonymous traffic reports.
                  </p>
                  <p style={{ marginTop: '8px' }}>
                    You can withdraw your consent at any time with future effect. Click the button below to reset your preferences and change your choice:
                  </p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.dispatchEvent(new CustomEvent('reset-cookie-consent'));
                    }}
                    className="action-button-secondary"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 14px',
                      borderRadius: '6px',
                      border: '1px solid rgba(229, 195, 151, 0.15)',
                      background: 'rgba(255, 255, 255, 0.02)',
                      color: 'var(--cyan-primary)',
                      fontSize: '13px',
                      fontFamily: 'var(--font-tech)',
                      fontWeight: 600,
                      cursor: 'pointer',
                      marginTop: '10px'
                    }}
                  >
                    Withdraw Consent / Reset Cookie Choices
                  </button>
                </section>

                <section>
                  <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>6. Your Rights</h2>
                  <p>Under the provisions of the GDPR, you have the following rights regarding your personal data:</p>
                  <ul style={{ paddingLeft: '20px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li><strong>Right of Access (Art. 15 GDPR):</strong> You have the right to request information about the data we process.</li>
                    <li><strong>Right to Rectification (Art. 16 GDPR):</strong> You have the right to correct inaccurate or incomplete data.</li>
                    <li><strong>Right to Erasure (Art. 17 GDPR):</strong> You have the right to request deletion of your data.</li>
                    <li><strong>Right to Restriction (Art. 18 GDPR):</strong> You have the right to limit how your data is processed.</li>
                    <li><strong>Right to Data Portability (Art. 20 GDPR):</strong> You have the right to receive your data in a structured format.</li>
                    <li><strong>Right to Object (Art. 21 GDPR):</strong> You have the right to object to data processing.</li>
                  </ul>
                  <p style={{ marginTop: '12px' }}>
                    To exercise any of these rights, please contact us at the email address provided above. 
                    You also have the right to lodge a complaint with a data protection supervisory authority (Art. 77 GDPR).
                  </p>
                </section>
              </>
            )}
          </div>
        </article>
      )}
    </div>
  );
};
