import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Translucent stock, bound short at the gutter. What is printed on the overlay
 * is what the narrator only suggests — lift the sheet and it is simply gone.
 */
export function TracingOverlay({
  lifted,
  onToggle,
  children,
  label





}: {lifted: boolean;onToggle: () => void;children: React.ReactNode;label: string;}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0" style={{ perspective: '1400px' }}>
      <motion.div
        className="absolute inset-0 origin-left"
        animate={{ rotateY: lifted ? -132 : 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: 'preserve-3d' }}>
        
        <div
          className="absolute inset-0 backface-hidden"
          style={{
            backgroundColor: 'rgba(242, 239, 228, 0.74)',
            boxShadow: lifted ?
            '0 18px 30px -18px rgba(36,31,27,0.45)' :
            '0 1px 1px rgba(36,31,27,0.08)'
          }}>
          
          <div className="h-full w-full p-[7%]">{children}</div>
          {/* the bound edge at the gutter */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-[3%] bg-[#DCD6C4]" />
          
        </div>
      </motion.div>

      <button
        type="button"
        onClick={onToggle}
        aria-pressed={lifted}
        className="absolute bottom-[4%] right-[6%] z-10 rounded-sm border border-ink-rule bg-paper/90 px-2.5 py-1 font-ui text-[0.75rem] text-ink-soft transition-colors duration-150 hover:border-ink-faint hover:text-ink">
        
        {lifted ? `Lay the ${label} back` : `Lift the ${label}`}
      </button>
    </div>);

}