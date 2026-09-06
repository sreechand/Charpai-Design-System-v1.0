import React from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { DocumentaryLine } from '../foundation/Documentary';
import { schoolDocument } from '../../data/story';

/**
 * Folded in four for sixty years. Unfolding is the verb; the fold is kept
 * because the fold is information.
 */
export function SchoolDocument({
  open,
  onOpen,
  printed = false





}: {open: boolean;onOpen: (next: boolean) => void; /** In the printed book the reproduction is simply folded and pocketed. */printed?: boolean;}) {
  const reduceMotion = useReducedMotion();

  return (
    <figure className="w-full max-w-[30rem]">
      <div className="relative bg-[#EFE9D6] p-6 shadow-loose">
        {/* the crease that survives folding */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-[#C9BE9F]" />
        
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-[#C9BE9F]/70" />
        

        <p className="font-doc text-doc uppercase text-ink-faint">
          Govt. Girls High School · Governorpet
        </p>
        <p className="mt-1 font-story text-[1.05rem] text-penblue">
          Progress Record · Std. VIII · 1964–65
        </p>

        <AnimatePresence initial={false}>
          {open &&
          <motion.div
            key="body"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden">
            
              <dl className="mt-thought border-t border-[#C9BE9F] pt-object">
                {[
              ['Name', 'Sarojini Devi, D/o Venkateswara Rao'],
              ['Class', 'VIII — B'],
              ['Attendance', '203 / 214'],
              ['Telugu', '62'],
              ['Arithmetic', '71'],
              ['Conduct', 'Good']].
              map(([label, value]) =>
              <div
                key={label}
                className="flex items-baseline justify-between gap-object border-b border-dotted border-[#C9BE9F] py-1.5">
                
                    <dt className="font-doc text-doc uppercase text-ink-faint">{label}</dt>
                    <dd className="font-story text-[1rem] text-penblue">{value}</dd>
                  </div>
              )}
              </dl>
              <p className="mt-object text-right font-hand text-[1.5rem] leading-none text-ink/70">
                Head Mistress
              </p>
            </motion.div>
          }
        </AnimatePresence>

        {!printed &&
        <button
          type="button"
          onClick={() => onOpen(!open)}
          aria-expanded={open}
          className="mt-object font-ui text-[0.8rem] text-ink-soft underline decoration-ink-rule underline-offset-4 transition-colors duration-150 hover:text-ink">
          
            {open ? 'Fold it back' : 'Unfold the record'}
          </button>
        }
      </div>

      <figcaption className="mt-object">
        <DocumentaryLine meta={schoolDocument} />
      </figcaption>
    </figure>);

}