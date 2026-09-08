import React from 'react';
import { motion } from 'framer-motion';

const ROAD_OUTER =
'M70 404 C150 398, 190 382, 236 354 S320 308, 392 298 C470 288, 520 264, 574 226 S690 170, 772 152';
const ROAD_INNER =
'M74 386 C154 380, 194 364, 240 336 S324 290, 396 280 C474 270, 524 246, 578 208 S694 152, 776 134';

/**
 * The drawing itself, shared by every format. Line completeness carries
 * recollection: the road is confident, the tree vivid, the school suggested,
 * and what she does not remember is left as paper.
 */
export function RouteDrawing({
  draw,
  instant,
  className = ''





}: {draw: boolean; /** No tracing: on paper, and under reduced motion, the route is simply there. */instant: boolean;className?: string;}) {
  const roadTransition = (delay: number) => ({
    duration: instant ? 0 : 2.1,
    delay: instant ? 0 : delay,
    ease: 'easeInOut' as const
  });
  const fade = (duration: number, delay: number) => ({
    duration: instant ? 0 : duration,
    delay: instant ? 0 : delay
  });

  return (
    <svg
      viewBox="0 0 880 460"
      className={`ink-on-paper ${className}`}
      role="img"
      aria-label="A hand-drawn map of the walk from the house, past the shop and the banyan tree, to the school. The road and the tree are drawn in detail; the school is only sketched; the surrounding streets are left blank.">
      
      {/* the road — vivid: confident, continuous, described twice */}
      <motion.path
        d={ROAD_OUTER}
        fill="none"
        stroke="#3B342C"
        strokeWidth="2.4"
        strokeLinecap="round"
        initial={{ pathLength: instant ? 1 : 0 }}
        animate={{ pathLength: draw ? 1 : 0 }}
        transition={roadTransition(0.1)} />
      
      <motion.path
        d={ROAD_INNER}
        fill="none"
        stroke="#3B342C"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity={0.75}
        initial={{ pathLength: instant ? 1 : 0 }}
        animate={{ pathLength: draw ? 1 : 0 }}
        transition={roadTransition(0.24)} />
      

      <motion.g
        initial={{ opacity: instant ? 1 : 0 }}
        animate={{ opacity: draw ? 1 : 0 }}
        transition={fade(0.6, 0.5)}>
        
        {/* the house — remembered: clear, not detailed */}
        <g stroke="#3B342C" strokeWidth="1.5" fill="none" strokeLinecap="round">
          <path d="M24 428 L24 392 L60 392 L60 428" />
          <path d="M16 393 L42 372 L68 393" />
          <path d="M36 428 L36 408 L48 408 L48 428" />
        </g>
        <text x="10" y="448" className="font-recon" fill="#554C42" fontSize="15">
          our house
        </text>

        {/* the shop — remembered: a shutter and a man who knew our names */}
        <g stroke="#3B342C" strokeWidth="1.4" fill="none" strokeLinecap="round">
          <path d="M212 300 L212 336 L272 336 L272 300 Z" />
          <path d="M206 300 L278 300" />
          <path d="M220 310 L264 310 M220 318 L264 318 M220 326 L264 326" opacity="0.6" />
        </g>
        <text x="200" y="292" className="font-recon" fill="#554C42" fontSize="15">
          the shop — chocolate in a tin
        </text>
      </motion.g>

      {/* the banyan — vivid, and drawn at the size she remembers */}
      <motion.g
        initial={{ opacity: instant ? 1 : 0 }}
        animate={{ opacity: draw ? 1 : 0 }}
        transition={fade(0.9, 1.0)}>
        
        <g stroke="#2F3A26" fill="none" strokeLinecap="round">
          <path
            d="M400 300 C398 268, 404 244, 414 226 C424 208, 428 190, 424 176"
            strokeWidth="6" />
          
          <path d="M424 176 C412 160, 396 152, 380 150" strokeWidth="3.4" />
          <path d="M424 176 C440 158, 462 150, 482 152" strokeWidth="3.4" />
          <path d="M424 176 C424 156, 430 140, 442 128" strokeWidth="3" />
          <path
            d="M330 152 C346 122, 380 104, 424 102 C470 100, 506 118, 520 148 C536 132, 560 138, 562 158 C588 158, 596 182, 578 194 C540 206, 470 210, 424 208 C376 210, 322 202, 306 190 C292 178, 306 156, 330 152 Z"
            strokeWidth="2.2" />
          
          <g strokeWidth="1.4" opacity="0.85">
            <path d="M344 192 C342 214, 346 240, 344 262" />
            <path d="M368 200 C366 224, 372 244, 368 258" />
            <path d="M462 202 C464 228, 458 250, 462 274" />
            <path d="M492 196 C494 220, 488 238, 492 254" />
            <path d="M524 188 C528 212, 522 230, 526 244" />
            <path d="M410 206 C408 224, 412 236, 410 248" />
          </g>
          <g strokeWidth="1" opacity="0.5">
            <path d="M348 172 C362 168, 374 174, 386 170" />
            <path d="M436 160 C452 156, 466 162, 480 158" />
            <path d="M498 176 C512 172, 526 178, 540 174" />
            <path d="M364 184 C378 180, 392 186, 404 182" />
          </g>
          <path d="M372 300 C392 296, 420 296, 448 302" strokeWidth="1.6" opacity="0.7" />
        </g>
        <text x="300" y="332" className="font-recon" fill="#2F3A26" fontSize="17">
          the banyan — the shade was cold
        </text>
      </motion.g>

      {/* the school — suggested */}
      <motion.g
        initial={{ opacity: instant ? 1 : 0 }}
        animate={{ opacity: draw ? 1 : 0 }}
        transition={fade(0.8, 1.5)}>
        
        <g
          stroke="#6B6154"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="14 11"
          opacity="0.85">
          
          <path d="M700 148 L700 74 L836 74 L836 148" />
          <path d="M690 74 L768 44 L846 74" />
        </g>
        {/* the gate — she remembers the gate */}
        <g stroke="#3B342C" strokeWidth="1.6" fill="none" strokeLinecap="round">
          <path d="M746 148 L746 112 L790 112 L790 148" />
          <path d="M754 148 L754 116 M764 148 L764 116 M774 148 L774 116 M784 148 L784 116" />
        </g>
        <text x="686" y="170" className="font-recon" fill="#554C42" fontSize="15">
          the school — only the gate is clear
        </text>
      </motion.g>

      {/* everything around it — lines that stop, and then paper */}
      <motion.g
        initial={{ opacity: instant ? 1 : 0 }}
        animate={{ opacity: draw ? 1 : 0 }}
        transition={fade(1.2, 1.9)}>
        
        <g stroke="#8A8074" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.55">
          <path d="M604 96 L604 62 L648 62" />
          <path d="M660 210 L706 210 L706 232" />
          <path d="M132 300 L132 274 L168 274" />
          <path d="M540 384 L586 384" />
        </g>
        <text x="150" y="196" className="font-recon" fill="#8A8074" fontSize="14">
          she does not remember what was here
        </text>
      </motion.g>
    </svg>);

}