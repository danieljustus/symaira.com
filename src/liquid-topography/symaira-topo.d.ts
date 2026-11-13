// Types for the vendored Liquid Topography web component (symaira-appkit design/liquid-topography).
export type TopoState = 'idle' | 'thinking' | 'problem' | 'input';

export interface TopoHandle {
  supported: boolean;
  setState(state: TopoState, target?: Element): void;
  setMotionEnabled(enabled: boolean): void;
  ripple(target: Element | [number, number], strength?: number, key?: unknown): void;
  destroy(): void;
}

export interface TopoOptions {
  params: unknown;
  theme?: () => string | undefined;
  pointerTarget?: EventTarget;
  root?: ParentNode;
  protect?: string;
  hill?: string;
}

export function mountTopo(host: HTMLElement, options: TopoOptions): TopoHandle;
