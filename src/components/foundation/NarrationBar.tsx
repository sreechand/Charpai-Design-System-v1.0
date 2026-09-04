import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { PauseIcon, PlayIcon, XIcon } from 'lucide-react';
import type { StoryMeta } from '../../types/story';

function clock(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function toSeconds(duration: string) {
  const [m, s] = duration.split(':').map(Number);
  return (m || 0) * 60 + (s || 0);
}

/**
 * Narration accompanies reading; it does not replace it. The controls only
 * become visible once the reader has actually asked to hear the narrator.
 */
export function NarrationBar({
  meta,
  playing,
  onTogglePlay,
  onDismiss





}: {meta: StoryMeta;playing: boolean;onTogglePlay: () => void;onDismiss: () => void;}) {
  const total = useMemo(() => toSeconds(meta.recording.duration), [meta.recording.duration]);
  const [elapsed, setElapsed] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setElapsed((e) => e >= total ? total : e + 1);
    }, 1000);
    return () => window.clearInterval(id);
  }, [playing, total]);

  return (
    <AnimatePresence>
      {(playing || elapsed > 0) &&
      <motion.div
        initial={reduceMotion ? false : { y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.23, 1, 0.32, 1] }}
        className="fixed inset-x-0 bottom-0 z-30 border-t border-ink-rule/70 bg-paper/95 backdrop-blur-[2px]"
        role="region"
        aria-label="Narration">
        
          <div className="mx-auto flex w-full max-w-[76rem] items-center gap-object px-6 py-2.5">
            <button
            type="button"
            onClick={onTogglePlay}
            aria-label={playing ? 'Pause narration' : 'Resume narration'}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink-rule text-ink-soft transition-colors duration-150 hover:border-ink-faint hover:text-ink">
            
              {playing ?
            <PauseIcon aria-hidden="true" className="h-3.5 w-3.5" /> :

            <PlayIcon aria-hidden="true" className="h-3.5 w-3.5" />
            }
            </button>

            <div className="min-w-0 flex-1">
              <p className="truncate font-ui text-[0.8rem] text-ink-soft">
                {meta.narrator} · {meta.recording.language}
              </p>
              <div
              className="mt-1.5 h-px w-full bg-ink-rule"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={total}
              aria-valuenow={elapsed}
              aria-label="Narration progress">
              
                <div
                className="h-px transition-[width] duration-1000 ease-linear"
                style={{
                  width: `${elapsed / total * 100}%`,
                  backgroundColor: 'var(--memory-accent)'
                }} />
              
              </div>
            </div>

            <p className="font-doc text-doc tabular-nums text-ink-faint">
              {clock(elapsed)} / {meta.recording.duration}
            </p>

            <button
            type="button"
            onClick={() => {
              setElapsed(0);
              onDismiss();
            }}
            aria-label="Close narration"
            className="text-ink-faint transition-colors duration-150 hover:text-ink">
            
              <XIcon aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}