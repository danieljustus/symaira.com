import type { CSSProperties } from 'react';

// Symaira's own 2px line icons, vendored unchanged from
// symaira-appkit/Brand/Icons/dist/svg (see src/assets/appkit-icons/README.md).
// Add icons in AppKit first, then copy the generated SVG here.
const sources = import.meta.glob<string>('../assets/appkit-icons/*.svg', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const markup = (name: string): string => {
  const raw = sources[`../assets/appkit-icons/${name}.svg`];
  if (!raw) throw new Error(`Missing AppKit icon: ${name}`);
  return raw;
};

export interface IconProps {
  size?: number;
  className?: string;
  style?: CSSProperties;
}

function SymIcon({ name, size = 16, className, style }: IconProps & { name: string }) {
  return (
    <span
      aria-hidden="true"
      className={className ? `sym-icon ${className}` : 'sym-icon'}
      style={{ width: size, height: size, ...style }}
      // Static, first-party SVG bundled at build time; never user input.
      dangerouslySetInnerHTML={{ __html: markup(name) }}
    />
  );
}

// Product signets (one per product).
export const Vault = (props: IconProps) => <SymIcon name="product-vault" {...props} />;
export const Brain = (props: IconProps) => <SymIcon name="product-brain" {...props} />;
export const Layout = (props: IconProps) => <SymIcon name="product-desk" {...props} />;
export const Globe = (props: IconProps) => <SymIcon name="product-browse" {...props} />;
export const Eye = (props: IconProps) => <SymIcon name="product-eraseme" {...props} />;
export const Cpu = (props: IconProps) => <SymIcon name="product-cockpit" {...props} />;
export const Router = (props: IconProps) => <SymIcon name="product-fritz" {...props} />;

// Interface icons.
export const Shield = (props: IconProps) => <SymIcon name="shield" {...props} />;
export const ShieldCheck = (props: IconProps) => <SymIcon name="shield-check" {...props} />;
export const Zap = (props: IconProps) => <SymIcon name="energy" {...props} />;
export const Terminal = (props: IconProps) => <SymIcon name="terminal" {...props} />;
export const Workflow = (props: IconProps) => <SymIcon name="workflow" {...props} />;
export const ArrowRight = (props: IconProps) => <SymIcon name="forward" {...props} />;
export const ArrowLeft = (props: IconProps) => <SymIcon name="back" {...props} />;
export const Mail = (props: IconProps) => <SymIcon name="mail" {...props} />;
export const Copy = (props: IconProps) => <SymIcon name="copy" {...props} />;
export const Check = (props: IconProps) => <SymIcon name="confirm" {...props} />;
export const Heart = (props: IconProps) => <SymIcon name="favorite" {...props} />;
export const Settings = (props: IconProps) => <SymIcon name="settings" {...props} />;
export const ExternalLink = (props: IconProps) => <SymIcon name="open-external" {...props} />;
export const Scale = (props: IconProps) => <SymIcon name="document" {...props} />;
export const Info = (props: IconProps) => <SymIcon name="info" {...props} />;
export const Cookie = Info;
