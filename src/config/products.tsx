import type { ReactNode } from 'react';
import type { TranslationMap } from '../context/LanguageContext';
import {
  Shield,
  Brain,
  Globe,
  Eye,
  Cpu,
  Router,
  Layout,
} from 'lucide-react';

export interface Product {
  cmd: string;
  badge: string;
  status: string;
  title: string;
  desc: string;
  bestFor: string;
  automates: string;
  features: string[];
  href: string;
  button: string;
  icon: ReactNode;
  tone: string;
  demoType: string;
  category: 'context' | 'security' | 'system';
}

export const getRouteForCmd = (cmd: string): string => {
  if (cmd === 'symeraseme') return 'eraseme';
  if (cmd === 'symdesk') return 'desktop';
  return cmd.replace(/^sym/, '');
};

export const getProducts = (t: (key: keyof TranslationMap) => string): Product[] => [
  {
    cmd: 'symvault',
    badge: t('vaultBadge'),
    status: t('vaultStatus'),
    title: t('vaultTitle'),
    desc: t('vaultDesc'),
    bestFor: t('vaultBestFor'),
    automates: t('vaultAutomates'),
    features: [t('vaultFeature1'), t('vaultFeature2'), t('vaultFeature3'), t('vaultFeature4')],
    href: 'https://github.com/danieljustus/symaira-vault',
    button: t('vaultBtn'),
    icon: <Shield size={24} />,
    tone: 'gold',
    demoType: 'vault',
    category: 'security',
  },
  {
    cmd: 'symbrain',
    badge: t('brainBadge'),
    status: t('brainStatus'),
    title: t('brainTitle'),
    desc: t('brainDesc'),
    bestFor: t('brainBestFor'),
    automates: t('brainAutomates'),
    features: [
      t('brainFeature1'),
      t('brainFeature2'),
      t('brainFeature3'),
      t('brainFeature4'),
      t('brainFeature5'),
      t('brainFeature6'),
    ],
    href: 'https://github.com/danieljustus/symaira-brain',
    button: t('brainBtn'),
    icon: <Brain size={24} />,
    tone: 'violet',
    demoType: 'brain',
    category: 'context',
  },
  {
    cmd: 'symdesk',
    badge: t('desktopBadge'),
    status: t('desktopStatus'),
    title: t('desktopTitle'),
    desc: t('desktopDesc'),
    bestFor: t('desktopBestFor'),
    automates: t('desktopAutomates'),
    features: [
      t('desktopFeature1'),
      t('desktopFeature2'),
      t('desktopFeature3'),
      t('desktopFeature4'),
      t('desktopFeature5'),
      t('desktopFeature6'),
    ],
    href: 'https://github.com/danieljustus/symaira-desktop',
    button: t('desktopBtn'),
    icon: <Layout size={24} />,
    tone: 'amber',
    demoType: 'desktop',
    category: 'context',
  },
  {
    cmd: 'symbrowse',
    badge: t('browseBadge'),
    status: t('browseStatus'),
    title: t('browseTitle'),
    desc: t('browseDesc'),
    bestFor: t('browseBestFor'),
    automates: t('browseAutomates'),
    features: [
      t('browseFeature1'),
      t('browseFeature2'),
      t('browseFeature3'),
      t('browseFeature4'),
      t('browseFeature5'),
    ],
    href: 'https://github.com/danieljustus/symaira-browse',
    button: t('browseBtn'),
    icon: <Globe size={24} />,
    tone: 'sky',
    demoType: 'browse',
    category: 'context',
  },
  {
    cmd: 'symeraseme',
    badge: t('erasemeBadge'),
    status: t('erasemeStatus'),
    title: t('erasemeTitle'),
    desc: t('erasemeDesc'),
    bestFor: t('erasemeBestFor'),
    automates: t('erasemeAutomates'),
    features: [t('erasemeFeature1'), t('erasemeFeature2'), t('erasemeFeature3'), t('erasemeFeature4')],
    href: 'https://github.com/danieljustus/symaira-eraseme',
    button: t('erasemeBtn'),
    icon: <Eye size={24} />,
    tone: 'ice',
    demoType: 'eraseme',
    category: 'security',
  },
  {
    cmd: 'symcockpit',
    badge: t('cockpitBadge'),
    status: t('cockpitStatus'),
    title: t('cockpitTitle'),
    desc: t('cockpitDesc'),
    bestFor: t('cockpitBestFor'),
    automates: t('cockpitAutomates'),
    features: [
      t('cockpitFeature1'),
      t('cockpitFeature2'),
      t('cockpitFeature3'),
      t('cockpitFeature4'),
      t('cockpitFeature5'),
      t('cockpitFeature6'),
    ],
    href: 'https://github.com/danieljustus/symaira-cockpit',
    button: t('cockpitBtn'),
    icon: <Cpu size={24} />,
    tone: 'indigo',
    demoType: 'cockpit',
    category: 'system',
  },
  {
    cmd: 'symfritz',
    badge: t('fritzBadge'),
    status: t('fritzStatus'),
    title: t('fritzTitle'),
    desc: t('fritzDesc'),
    bestFor: t('fritzBestFor'),
    automates: t('fritzAutomates'),
    features: [t('fritzFeature1'), t('fritzFeature2'), t('fritzFeature3'), t('fritzFeature4')],
    href: 'https://github.com/danieljustus/symaira-fritz',
    button: t('fritzBtn'),
    icon: <Router size={24} />,
    tone: 'sky',
    demoType: 'fritz',
    category: 'system',
  },
];
