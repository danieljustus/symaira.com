import { useEffect, useRef } from 'react';
// Vendored from symaira-appkit design/liquid-topography (source of truth, see
// src/liquid-topography/README.md). Do not edit the vendored files here.
import { mountTopo } from '../liquid-topography/symaira-topo.js';
import params from '../liquid-topography/topo.json';

// Text and controls stay line-free at their own bounds (never whole stacks);
// opaque cards act as hills the contours wrap around.
const PROTECT = 'h1, h2, h3, p, .back-link, .product-badge, .product-status-badge, .site-nav, .action-button-primary, .action-button-secondary, .icon-button, .language-toggle';
const HILL = '.glass-panel:not(.site-nav), .maintainer-panel, .brand-meaning-panel, .tools-console-workspace, .console-sidebar-item, .stack-install-block';

export function TopoBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    const topo = mountTopo(host, {
      params,
      theme: () => document.documentElement.dataset.theme,
      pointerTarget: window,
      root: document,
      protect: PROTECT,
      hill: HILL,
    });
    // The hero logo click already emits this event for the old background.
    const onShock = (e: Event) => {
      const { x, y } = (e as CustomEvent<{ x: number; y: number }>).detail;
      topo.ripple([x, y], 1);
    };
    window.addEventListener('logo-shockwave', onShock);
    return () => {
      window.removeEventListener('logo-shockwave', onShock);
      topo.destroy();
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none' }}
    />
  );
}
