import {
  useEffect,
  useRef,
  useCallback,
  useState,
} from 'react';
import { animationConfig } from '../../config/clientConfig';
import styles from './Hero3DAnimation.module.css';

const {
  totalFrames,
  getFramePath,
  frameAspectRatio,
} = animationConfig;

// Preload configuration
const STAGE1_FRAMES = [1]; // Load immediately
const PRELOAD_WINDOW = 12; // Frames to preload around current position
const MAX_DPR = 2; // Cap device pixel ratio to avoid huge canvases

export default function Hero3DAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const loadingRef = useRef<Set<number>>(new Set());
  const currentFrameRef = useRef<number>(1);
  const targetFrameRef = useRef<number>(1);
  const rafRef = useRef<number>(0);
  const isVisibleRef = useRef<boolean>(true);
  const lastDrawnFrameRef = useRef<number>(-1);

  const [loadedCount, setLoadedCount] = useState(0);
  const [firstFrameReady, setFirstFrameReady] = useState(false);

  // --- Canvas drawing ---
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current.get(frameIndex);
    if (!img || !img.complete) {
      // Fallback: find nearest loaded frame
      let fallback = frameIndex - 1;
      while (fallback >= 1 && !imagesRef.current.get(fallback)?.complete) {
        fallback--;
      }
      if (fallback >= 1) {
        const fbImg = imagesRef.current.get(fallback);
        if (fbImg?.complete) {
          ctx.drawImage(fbImg, 0, 0, canvas.width, canvas.height);
          lastDrawnFrameRef.current = fallback;
        }
      }
      return;
    }

    if (lastDrawnFrameRef.current === frameIndex) return; // No change
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    lastDrawnFrameRef.current = frameIndex;
  }, []);

  // --- Canvas resize ---
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    const containerW = container.clientWidth;
    const containerH = container.clientHeight;

    // Compute display size respecting aspect ratio
    let displayW = containerW;
    let displayH = containerW / frameAspectRatio;

    // Use cover logic instead of contain, so animation fills entire screen on mobile
    if (displayH < containerH) {
      displayH = containerH;
      displayW = containerH * frameAspectRatio;
    }

    // Set CSS size
    canvas.style.width = `${displayW}px`;
    canvas.style.height = `${displayH}px`;

    // Set actual pixel size
    canvas.width = Math.round(displayW * dpr);
    canvas.height = Math.round(displayH * dpr);

    const ctx = canvas.getContext('2d');
    if (ctx) ctx.scale(dpr, dpr);

    lastDrawnFrameRef.current = -1; // Force redraw
    drawFrame(currentFrameRef.current);
  }, [drawFrame]);

  // --- Load a single frame ---
  const loadFrame = useCallback((index: number): Promise<void> => {
    if (index < 1 || index > totalFrames) return Promise.resolve();
    if (imagesRef.current.has(index)) return Promise.resolve();
    if (loadingRef.current.has(index)) return Promise.resolve();

    loadingRef.current.add(index);

    return new Promise((resolve) => {
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => {
        imagesRef.current.set(index, img);
        loadingRef.current.delete(index);
        setLoadedCount((c) => c + 1);
        if (index === 1) setFirstFrameReady(true);
        resolve();
      };
      img.onerror = () => {
        loadingRef.current.delete(index);
        resolve();
      };
      img.src = getFramePath(index);
    });
  }, []);

  // --- Progressive loading strategy ---
  const schedulePreload = useCallback(
    (currentFrame: number) => {
      // Stage 2: load window around current frame
      const windowFrames: number[] = [];
      for (let i = -PRELOAD_WINDOW; i <= PRELOAD_WINDOW; i++) {
        const f = currentFrame + i;
        if (f >= 1 && f <= totalFrames) windowFrames.push(f);
      }

      windowFrames.sort((a, b) => Math.abs(a - currentFrame) - Math.abs(b - currentFrame));

      let idx = 0;
      const loadNext = () => {
        if (idx >= windowFrames.length) {
          // Stage 3: load remaining frames
          loadRemainingFrames();
          return;
        }
        const frame = windowFrames[idx++];
        loadFrame(frame).then(() => {
          setTimeout(loadNext, 0);
        });
      };
      loadNext();
    },
    [loadFrame]
  );

  const loadRemainingFrames = useCallback(() => {
    let idx = 1;
    const loadNext = () => {
      while (idx <= totalFrames && imagesRef.current.has(idx)) idx++;
      if (idx > totalFrames) return;
      const frame = idx++;
      loadFrame(frame).then(() => {
        // Small delay to not block rendering
        setTimeout(loadNext, 8);
      });
    };
    // Slight delay before starting background loading
    setTimeout(loadNext, 500);
  }, [loadFrame]);

  // --- rAF loop for smooth interpolation ---
  const startRenderLoop = useCallback(() => {
    const loop = () => {
      if (isVisibleRef.current) {
        const curr = currentFrameRef.current;
        const target = targetFrameRef.current;

        if (curr !== target) {
          // Lerp toward target
          const diff = target - curr;
          const step = diff > 0
            ? Math.max(1, Math.floor(diff * 0.25))
            : Math.min(-1, Math.ceil(diff * 0.25));

          currentFrameRef.current = Math.max(1, Math.min(totalFrames, curr + step));
          drawFrame(currentFrameRef.current);
        }
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
  }, [drawFrame]);

  // --- Scroll handler (uses passive listener + rAF for smoothness) ---
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // The scrollable element is the page itself
    const handleScroll = () => {
      const section = container.closest('[data-hero-section]') as HTMLElement | null;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportH = window.innerHeight;

      // Progress: 0 when section top is at viewport bottom, 1 when section bottom is at viewport top
      // We want 0 at start and 1 at end of sticky scroll section
      const scrolled = -rect.top;
      const scrollRange = sectionHeight - viewportH;

      if (scrollRange <= 0) return;

      const progress = Math.max(0, Math.min(1, scrolled / scrollRange));
      const frame = Math.round(1 + progress * (totalFrames - 1));
      targetFrameRef.current = frame;

      // Preload around current position
      schedulePreload(frame);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [schedulePreload]);

  // --- IntersectionObserver to pause rendering when off-screen ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const observer = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0].isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  // --- Resize handler ---
  useEffect(() => {
    resizeCanvas();
    const ro = new ResizeObserver(() => resizeCanvas());
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [resizeCanvas]);

  // --- Initial load: Stage 1 ---
  useEffect(() => {
    const initLoad = async () => {
      // Load first frame immediately
      await loadFrame(1);
      drawFrame(1);
      // Then load stage-1 frames and start preloading window
      for (const f of STAGE1_FRAMES) {
        await loadFrame(f);
      }
      schedulePreload(1);
    };
    initLoad();
    startRenderLoop();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [loadFrame, drawFrame, schedulePreload, startRenderLoop]);

  const progressPct = Math.round((loadedCount / totalFrames) * 100);

  return (
    <div className={styles.canvasWrapper} ref={containerRef}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        aria-label="3D bath fittings product animation"
        role="img"
      />
      {!firstFrameReady && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingSpinner} />
          <span className={styles.loadingText}>Loading experience…</span>
        </div>
      )}
      {firstFrameReady && progressPct < 100 && (
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progressPct}%` }}
          />
        </div>
      )}
    </div>
  );
}
