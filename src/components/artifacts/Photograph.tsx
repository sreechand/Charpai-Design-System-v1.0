import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { RotateCcwIcon } from 'lucide-react';
import { DocumentaryLine } from '../foundation/Documentary';
import type { ArtifactMeta, MountingStyle, PhotographReverse } from '../../types/story';

interface PhotographProps {
  src: string;
  alt: string;
  meta: ArtifactMeta;
  reverse: PhotographReverse;
  mounting: MountingStyle;
  flipped: boolean;
  onFlip: (next: boolean) => void;
  className?: string;
  widthClass?: string;
  /** Photographs keep their own proportions. 4/5, 3/2, square — never a card. */
  ratio?: string;
}

/**
 * The photograph is the object, not a card containing an image of an object.
 * It keeps its own proportions, its own damage, and both of its sides.
 */
export function Photograph({
  src,
  alt,
  meta,
  reverse,
  mounting,
  flipped,
  onFlip,
  className = '',
  widthClass = 'w-[clamp(230px,30vw,340px)]',
  ratio = '4 / 5'
}: PhotographProps) {
  const [held, setHeld] = useState(false);
  const [handling, setHandling] = useState(false);
  const holdTimer = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();

  const startHold = () => {
    setHandling(true);
    holdTimer.current = window.setTimeout(() => setHeld(true), 90);
  };
  const endHold = () => {
    if (holdTimer.current) window.clearTimeout(holdTimer.current);
    setHeld(false);
    setHandling(false);
  };

  return (
    <figure className={`${className}`}>
      <div className={`relative ${widthClass}`}>
        {mounting === 'tape' &&
        <>
            <Tape className="-top-3 left-4 -rotate-6" />
            <Tape className="-bottom-3 right-5 rotate-3" />
          </>
        }
        {mounting === 'slit' && <AlbumSlits />}

        <motion.div
          className="preserve-3d relative"
          style={{ aspectRatio: ratio }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={
          reduceMotion ?
          { duration: 0 } :
          { duration: 0.42, ease: [0.23, 1, 0.32, 1] }
          }>
          
          {/* Front */}
          <button
            type="button"
            aria-pressed={flipped}
            aria-label={
            flipped ? 'Turn the photograph face up' : 'Turn the photograph over'
            }
            onClick={() => onFlip(!flipped)}
            className={`backface-hidden absolute inset-0 block cursor-pointer bg-paper-mount p-2.5 transition-shadow duration-200 ease-material ${
            handling ? 'shadow-lifted' : 'shadow-loose'}`
            }
            style={{
              clipPath:
              'polygon(0 0, 100% 0, 100% 91%, 96.5% 100%, 0 100%)'
            }}>
            
            <span className="relative block h-full w-full overflow-hidden bg-ink/5">
              <img
                src={src}
                alt={alt}
                className="h-full w-full object-cover transition-[filter] duration-[260ms] ease-out"
                style={{
                  filter: held ?
                  'contrast(1.06) brightness(1.0) saturate(0.15)' :
                  'contrast(0.86) brightness(1.07) saturate(0.05)'
                }} />
              
              {/* Damage original to the print — removed only while the reader holds. */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 transition-opacity duration-[260ms] ease-out"
                style={{
                  opacity: held ? 0 : 1,
                  backgroundImage:
                  'linear-gradient(101deg, rgba(255,252,240,0) 41%, rgba(255,252,240,0.62) 43%, rgba(150,138,112,0.30) 44.4%, rgba(255,252,240,0) 46%), radial-gradient(120% 55% at 50% -8%, rgba(191,175,140,0.55) 0%, rgba(191,175,140,0) 60%), radial-gradient(28% 20% at 88% 12%, rgba(158,120,72,0.34) 0%, rgba(158,120,72,0) 70%)'
                }} />
              
            </span>
          </button>

          {/* Reverse — Ammamma's hand */}
          <button
            type="button"
            tabIndex={flipped ? 0 : -1}
            aria-hidden={!flipped}
            aria-label="Turn the photograph face up"
            onClick={() => onFlip(false)}
            className="backface-hidden absolute inset-0 flex cursor-pointer flex-col justify-between bg-paper-deep p-6 text-left shadow-loose"
            style={{
              transform: 'rotateY(180deg)',
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 3.5% 100%, 0 91%)'
            }}>
            
            <span className="block">
              {reverse.script &&
              <span
                className={`block text-[1.1rem] leading-relaxed ${reverse.scriptClass ?? 'font-telugu'}`}
                style={{ color: 'var(--hand-ink)' }}>
                
                  {reverse.script}
                </span>
              }
              <span className="narrator-hand narrator-hand-lg mt-2 block">{reverse.hand}</span>
              <span className="narrator-hand mt-3 block opacity-80">{reverse.date}</span>
            </span>
            <span className="block font-doc text-doc uppercase text-ink-faint">
              {reverse.note}
            </span>
          </button>
        </motion.div>

        {mounting === 'corners' && <PhotoCorners />}
      </div>

      <figcaption className="mt-object max-w-[34ch]">
        <DocumentaryLine meta={meta} />
        <div className="mt-touch flex flex-wrap items-center gap-x-thought gap-y-touch">
          <button
            type="button"
            onClick={() => onFlip(!flipped)}
            className="inline-flex items-center gap-1.5 font-ui text-[0.8rem] text-ink-soft underline decoration-ink-rule underline-offset-4 transition-colors duration-150 hover:text-ink">
            
            <RotateCcwIcon aria-hidden="true" className="h-3.5 w-3.5" />
            {flipped ? 'Turn face up' : 'Turn it over'}
          </button>
          <button
            type="button"
            onPointerDown={startHold}
            onPointerUp={endHold}
            onPointerLeave={endHold}
            onPointerCancel={endHold}
            onKeyDown={(e) => {
              if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                startHold();
              }
            }}
            onKeyUp={endHold}
            onBlur={endHold}
            aria-pressed={held}
            className="font-ui text-[0.8rem] text-ink-soft underline decoration-ink-rule underline-offset-4 transition-colors duration-150 hover:text-ink">
            
            {held ? 'Release to return it' : 'Hold to see it restored'}
          </button>
        </div>
      </figcaption>
    </figure>);

}

function Tape({ className = '' }: {className?: string;}) {
  return (
    <span
      aria-hidden="true"
      className={`absolute z-10 h-7 w-20 bg-[#E8DFC4]/80 shadow-overlay ${className}`}
      style={{
        clipPath: 'polygon(2% 0, 98% 4%, 100% 96%, 1% 100%)'
      }} />);


}

function PhotoCorners() {
  return (
    <span aria-hidden="true">
      {(
      [
      'left-0 top-0',
      'right-0 top-0 rotate-90',
      'right-0 bottom-0 rotate-180',
      'left-0 bottom-0 -rotate-90'] as
      const).
      map((pos) =>
      <span key={pos} className={`absolute ${pos} h-8 w-8`}>
          <svg viewBox="0 0 32 32" className="h-full w-full">
            <path d="M0 0 H32 L0 32 Z" fill="#D8CEB4" />
            <path d="M0 0 H32 L0 32 Z" fill="none" stroke="#C3B698" strokeWidth="1" />
          </svg>
        </span>
      )}
    </span>);

}

function AlbumSlits() {
  return (
    <span aria-hidden="true">
      <span className="absolute left-2 top-6 h-14 w-2 bg-paper-edge shadow-[inset_0_0_2px_rgba(36,31,27,0.25)]" />
      <span className="absolute right-2 bottom-6 h-14 w-2 bg-paper-edge shadow-[inset_0_0_2px_rgba(36,31,27,0.25)]" />
    </span>);

}