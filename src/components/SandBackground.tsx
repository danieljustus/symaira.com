import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  size: number;
  baseOpacity: number;
  opacity: number;
  z: number; // Parallax depth: 0.5 (background) to 2.0 (foreground)
  highlight: number; // Glow boost: 0 to 1
  hue: number;
  sat: number;
  light: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  speed: number;
  strength: number;
  thickness: number;
  opacity: number;
}

export const SandBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Track cursor position with smooth interpolation (lerping)
  const cursorRef = useRef({
    currentX: -1000,
    currentY: -1000,
    targetX: -1000,
    targetY: -1000,
    active: false,
    radius: 60, // Interaction radius in pixels (halved from 120 for a more subtle smudge)
  });

  // Track active shockwave ripples
  const ripplesRef = useRef<Ripple[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId = 0;
    let particles: Particle[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = window.devicePixelRatio || 1;

    // Adjust canvas resolution for high-DPI displays
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      
      // Initialize or scale particle distribution based on screensize
      initParticles();
    };

    const initParticles = () => {
      // Density-based particle count: increased by 30% for high visual richness
      const area = width * height;
      const count = Math.min(Math.floor(area / 1150), 1430);
      
      particles = [];
      for (let i = 0; i < count; i++) {
        const z = 0.5 + Math.random() * 1.5; // Foreground particles are larger and faster
        const baseSize = 0.35 + Math.random() * 0.45;
        const size = baseSize * z;
        const baseOpacity = 0.05 + Math.random() * 0.22;
        
        // Anti-gravity theme: drift upwards slowly
        const baseVy = -0.12 - Math.random() * 0.16;
        const baseVx = (Math.random() - 0.5) * 0.06;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: baseVx,
          vy: baseVy,
          baseVx,
          baseVy,
          size,
          baseOpacity,
          opacity: baseOpacity,
          z,
          highlight: 0,
          // Golden warm champagne hues
          hue: 33 + Math.floor(Math.random() * 6), // 33-39
          sat: 40 + Math.floor(Math.random() * 16), // 40-56%
          light: 70 + Math.floor(Math.random() * 15), // 70-85%
        });
      }
    };

    // Track mouse global coordinates
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current.targetX = e.clientX;
      cursorRef.current.targetY = e.clientY;
      cursorRef.current.active = true;
    };

    const handleMouseLeave = () => {
      cursorRef.current.active = false;
      cursorRef.current.targetX = -1000;
      cursorRef.current.targetY = -1000;
    };

    // Touch interaction
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        cursorRef.current.targetX = e.touches[0].clientX;
        cursorRef.current.targetY = e.touches[0].clientY;
        cursorRef.current.active = true;
      }
    };

    const handleTouchEnd = () => {
      cursorRef.current.active = false;
      cursorRef.current.targetX = -1000;
      cursorRef.current.targetY = -1000;
    };

    // Global listener for the logo shockwave convergence event
    const handleLogoShockwave = (e: CustomEvent<{ x: number; y: number }>) => {
      const { x, y } = e.detail;
      
      // Spawn a single high-performance impact ripple (halved count from 2 to 1)
      ripplesRef.current.push({
        x,
        y,
        radius: 0,
        maxRadius: Math.max(width, height) * 0.9, // Expands to cover most of viewport
        speed: 7.0, // Radial expansion speed in pixels per frame
        strength: 2.8, // Physical push force (reduced from 22 for a much gentler displacement/shimmer)
        thickness: 100, // Wavefront physical width
        opacity: 0.24,
      });
    };

    // Bind event listeners
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('logo-shockwave', handleLogoShockwave as EventListener);

    // Initial trigger to configure size and particles
    resizeCanvas();

    // High performance animation loop
    let time = 0;
    let lastScrollY = window.scrollY;

    const updateAndRender = () => {
      time += 0.005;
      ctx.clearRect(0, 0, width, height);

      // Track vertical scroll displacement for 3D parallax shifting
      const currentScrollY = window.scrollY;
      const deltaScrollY = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // 1. Lerp cursor coordinates for visual inertia and smoothness
      const cursor = cursorRef.current;
      if (cursor.active) {
        if (cursor.currentX === -1000) {
          cursor.currentX = cursor.targetX;
          cursor.currentY = cursor.targetY;
        } else {
          cursor.currentX += (cursor.targetX - cursor.currentX) * 0.08;
          cursor.currentY += (cursor.targetY - cursor.currentY) * 0.08;
        }
      } else {
        cursor.currentX += (-1000 - cursor.currentX) * 0.08;
        cursor.currentY += (-1000 - cursor.currentY) * 0.08;
      }

      // 2. Update shockwave ripples
      const ripples = ripplesRef.current;
      for (let r = ripples.length - 1; r >= 0; r--) {
        const ripple = ripples[r];
        ripple.radius += ripple.speed;
        
        // Shift the ripple's center coordinate along with scrolls to keep it locked to the physical logo
        ripple.y -= deltaScrollY;
        
        // Draw the visual pulse shockwave expanding on canvas
        const currentFade = 1.0 - ripple.radius / ripple.maxRadius;
        if (currentFade <= 0) {
          ripples.splice(r, 1);
          continue;
        }

        // Draw soft golden glowing shockwave ring
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        
        const grad = ctx.createRadialGradient(
          ripple.x, ripple.y, Math.max(0, ripple.radius - ripple.thickness / 2),
          ripple.x, ripple.y, ripple.radius + ripple.thickness / 2
        );
        
        const baseColorOpacity = ripple.opacity * currentFade;
        grad.addColorStop(0, 'rgba(229, 195, 151, 0)');
        grad.addColorStop(0.5, `rgba(229, 195, 151, ${baseColorOpacity})`);
        grad.addColorStop(1, 'rgba(229, 195, 151, 0)');
        
        ctx.strokeStyle = grad;
        ctx.lineWidth = ripple.thickness;
        ctx.stroke();
      }

      // 3. Render and animate particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Apply scroll displacement scaled by particle depth 'z' for a rich 3D parallax scrolling feel
        // We use a factor of 0.42 to ensure scrolling feels completely natural and tactile
        p.y -= deltaScrollY * 0.42 * p.z;

        // Wave lateral drift motion (gentle wind currents simulation)
        const windX = Math.sin(time + p.y * 0.01) * 0.08 * p.z;
        
        // Apply restoring friction force dragging velocity back to base drift speeds
        p.vx += (p.baseVx + windX - p.vx) * 0.04;
        p.vy += (p.baseVy - p.vy) * 0.04;

        // Mouse Smudge: deflect and swirl particles close to cursor
        if (cursor.currentX !== -1000) {
          const dx = p.x - cursor.currentX;
          const dy = p.y - cursor.currentY;
          const distSq = dx * dx + dy * dy;
          const rSq = cursor.radius * cursor.radius;
          
          if (distSq < rSq) {
            const dist = Math.sqrt(distSq);
            const force = (cursor.radius - dist) / cursor.radius; // Peak at cursor (1.0)
            
            // Push away (Repulsion)
            const angle = Math.atan2(dy, dx);
            const pushFactor = force * 0.28 * p.z;
            p.vx += Math.cos(angle) * pushFactor;
            p.vy += Math.sin(angle) * pushFactor;

            // Swirl / Vortex drift (Tangential deflection)
            const swirlFactor = force * 0.16 * p.z;
            p.vx += -Math.sin(angle) * swirlFactor;
            p.vy += Math.cos(angle) * swirlFactor;
            
            // Slight friction thermal increase
            p.vx *= 0.98;
            p.vy *= 0.98;
          }
        }

        // Logo Shockwave Physical Ripple Push
        for (let r = 0; r < ripples.length; r++) {
          const ripple = ripples[r];
          const rx = p.x - ripple.x;
          const ry = p.y - ripple.y;
          const rdist = Math.sqrt(rx * rx + ry * ry);
          const distFromWave = Math.abs(rdist - ripple.radius);

          if (distFromWave < ripple.thickness) {
            const waveIntensity = (1 - distFromWave / ripple.thickness) * (1 - ripple.radius / ripple.maxRadius);
            const angle = Math.atan2(ry, rx);
            const pushForce = waveIntensity * ripple.strength * 0.5 * p.z;
            
            // Accelerate particles outward along the radial wave vector
            p.vx += Math.cos(angle) * pushForce;
            p.vy += Math.sin(angle) * pushForce;
            
            // Boost glow highlight
            p.highlight = Math.max(p.highlight, waveIntensity * 1.6);
          }
        }

        // Apply velocities to coordinates
        p.x += p.vx;
        p.y += p.vy;

        // Decay the glow highlight highlight
        p.highlight *= 0.93;

        // Grains wrapping boundaries
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
          p.vx = p.baseVx;
          p.vy = p.baseVy;
        } else if (p.y > height + 10) {
          p.y = -10;
          p.x = Math.random() * width;
        }

        if (p.x < -10) {
          p.x = width + 10;
        } else if (p.x > width + 10) {
          p.x = -10;
        }

        // Render Sand Grain
        const activeOpacity = Math.min(
          p.baseOpacity + (p.highlight * 0.55), 
          0.85
        );
        
        // Build HSL color
        // Boost lightness and shift towards white/silver when highlighted
        const activeLight = Math.min(
          p.light + (p.highlight * 25), 
          100
        );
        const activeSat = Math.max(
          p.sat - (p.highlight * 20), 
          0
        );
        
        ctx.beginPath();
        // Give size a slight pulsing bump when highlighted
        const activeSize = p.size * (1.0 + p.highlight * 0.4);
        ctx.arc(p.x, p.y, activeSize, 0, Math.PI * 2);
        
        ctx.fillStyle = `hsla(${p.hue}, ${activeSat}%, ${activeLight}%, ${activeOpacity})`;
        
        // Draw elegant radial shadow for foreground elements
        if (p.z > 1.4 && p.highlight > 0.1) {
          ctx.shadowBlur = 6 * p.highlight;
          ctx.shadowColor = `rgba(229, 195, 151, ${0.4 * p.highlight})`;
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
      }
      
      // Reset shadow for subsequent canvas draws
      ctx.shadowBlur = 0;

      animationFrameId = window.requestAnimationFrame(updateAndRender);
    };

    // Run animation frame
    animationFrameId = window.requestAnimationFrame(updateAndRender);

    return () => {
      // Unbind and clear resources
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('logo-shockwave', handleLogoShockwave as EventListener);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1, // Sits on top of index.css body grid, but underneath main content (zIndex 5)
        pointerEvents: 'none', // Direct clickthrough allows navigation and UI clicks normally
        opacity: 0.95,
        mixBlendMode: 'screen', // Elegant pixel color blends
        willChange: 'transform',
      }}
    />
  );
};
