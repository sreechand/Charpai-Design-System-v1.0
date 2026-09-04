import React, { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { DocumentaryLine } from '../foundation/Documentary';
import { testCard } from '../../data/television';

/**
 * Memory motion: the picture does not appear, it opens out from a line —
 * the way he describes it. Drawn, not simulated, so it cannot be mistaken
 * for a recording of a broadcast.
 */
export function TestCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const [replay, setReplay] = useState(0);
  const open = reduceMotion ? true : inView;

  return (
    <figure ref={ref} className="w-full max-w-[34rem]">
      <svg
        key={replay}
        viewBox="0 0 480 360"
        className="ink-on-paper h-auto w-full"
        role="img"
        aria-label="A drawn reconstruction of a television test pattern opening outward from a single horizontal line.">
        
        <defs>
          <clipPath id="warmup">
            <motion.rect
              x="0"
              width="480"
              initial={reduceMotion ? { y: 0, height: 360 } : { y: 179, height: 2 }}
              animate={open ? { y: 0, height: 360 } : { y: 179, height: 2 }}
              transition={{ duration: reduceMotion ? 0 : 1.3, ease: [0.23, 1, 0.32, 1] }} />
            
          </clipPath>
        </defs>

        <g clipPath="url(#warmup)">
          <g
            stroke="var(--memory-deep)"
            fill="none"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.9">
            
            {/* the frame of the picture */}
            <path d="M14 12 H466 V348 H14 Z" strokeWidth="2" />
            {/* grid — drawn by hand, so the lines are not quite parallel */}
            <path d="M92 12 V348 M170 13 V347 M248 12 V348 M326 13 V347 M404 12 V348" opacity="0.45" />
            <path d="M14 68 H466 M14 124 H465 M14 180 H466 M14 236 H465 M14 292 H466" opacity="0.45" />
            {/* the circle */}
            <path
              d="M240 34 C328 34, 392 100, 392 180 C392 262, 328 326, 240 326 C152 326, 88 262, 88 180 C88 100, 152 34, 240 34 Z"
              strokeWidth="2" />
            
            {/* centre cross and resolution wedges */}
            <path d="M240 140 V220 M200 180 H280" strokeWidth="1.6" />
            <path d="M188 96 L292 96 M188 108 L292 108" opacity="0.7" />
            <path d="M150 264 L330 264" opacity="0.7" />
            <g strokeWidth="1">
              <path d="M196 250 V282 M206 250 V282 M216 250 V282 M228 250 V282 M242 250 V282 M258 250 V282 M276 250 V282" />
            </g>
          </g>
          {/* the grey step wedge */}
          <g>
            {[0.08, 0.16, 0.26, 0.38, 0.52, 0.68].map((o, i) =>
            <rect
              key={o}
              x={132 + i * 36}
              y={300}
              width="34"
              height="20"
              fill="var(--memory-deep)"
              opacity={o} />

            )}
          </g>
        </g>

        {/* the line it opens out from */}
        <motion.path
          d="M14 180 H466"
          stroke="var(--memory-deep)"
          strokeWidth="2.4"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 1.1, delay: reduceMotion ? 0 : 0.5 }} />
        
      </svg>

      <figcaption className="mt-object">
        <DocumentaryLine meta={testCard} />
        <button
          type="button"
          onClick={() => setReplay((n) => n + 1)}
          className="mt-touch font-ui text-[0.8rem] text-ink-soft underline decoration-ink-rule underline-offset-4 transition-colors duration-150 hover:text-ink">
          
          Switch it on again
        </button>
      </figcaption>
    </figure>);

}