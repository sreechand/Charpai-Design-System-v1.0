import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PageSheet } from './Spread';

/**
 * The walk is longer than the page, so the page has to open. Closed, the
 * outer panel sits inside the trim; opened, the spread is wider than the book
 * and the reader has to hold it differently.
 */
export function Gatefold({
  open,
  onToggle,
  verso,
  panel,
  folios






}: {open: boolean;onToggle: () => void;verso: React.ReactNode;panel: React.ReactNode;folios: [string, string];}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative">
      <div
        className="overflow-x-clip transition-[aspect-ratio] duration-300 ease-material"
        style={{ aspectRatio: open ? '18 / 7' : '12 / 7' }}>
        
        <motion.div
          className="flex w-[150%] origin-top-left shadow-lifted"
          animate={{ scale: open ? 2 / 3 : 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.23, 1, 0.32, 1] }}>
          
          <div className="w-1/3">
            <PageSheet folio={folios[0]} side="verso">
              {verso}
            </PageSheet>
          </div>

          <div className="relative w-2/3 bg-paper" style={{ aspectRatio: '12 / 7' }}>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-[4%]"
              style={{
                background:
                'linear-gradient(to left, rgba(36,31,27,0) 0%, rgba(36,31,27,0.10) 100%)'
              }} />
            
            <div className="h-full w-full p-[4%]">{panel}</div>
            {/* the fold the route has to cross */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-[#C9BE9F]" />
            
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-1/2 w-[3%]"
              style={{
                background:
                'linear-gradient(to right, rgba(36,31,27,0.07) 0%, rgba(36,31,27,0) 100%)'
              }} />
            
            <span className="absolute bottom-[3%] right-[3%] font-doc text-doc text-ink-faint">
              {folios[1]}
            </span>
          </div>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={onToggle}
        aria-pressed={open}
        className="mt-object rounded-sm border border-ink-rule bg-paper/90 px-2.5 py-1 font-ui text-[0.75rem] text-ink-soft transition-colors duration-150 hover:border-ink-faint hover:text-ink">
        
        {open ? 'Fold the gatefold back' : 'Open the gatefold'}
      </button>
    </div>);

}