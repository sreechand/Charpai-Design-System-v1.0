import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Passage as PassageType } from '../../types/story';

/**
 * Prose respects the grid. Memory escapes it — the narrator's hand sits in
 * the margin, slightly out of true, the way a note added later would.
 */
export function Passage({
  passage,
  attribution



}: {passage: PassageType;attribution: string;}) {
  const side = passage.annotation?.side ?? 'right';
  return (
    <div className="mx-auto grid w-full max-w-[76rem] grid-cols-12 gap-x-object px-6">
      <p className="col-span-12 col-start-1 font-story text-narrative text-ink md:col-span-6 md:col-start-4">
        {passage.text}
      </p>
      {passage.annotation &&
      <aside
        className={`col-span-12 mt-object md:mt-1 ${
        side === 'right' ?
        'md:col-span-3 md:col-start-10' :
        'md:col-span-3 md:col-start-1 md:text-right'}`
        }>
        
          <p
          className="narrator-hand"
          style={{
            transform:
            side === 'right' ? 'rotate(var(--hand-tilt))' : 'rotate(calc(var(--hand-tilt) * -0.7))'
          }}>
          
            {passage.annotation.text}
          </p>
          <p className="mt-1.5 font-doc text-doc uppercase text-ink-faint">{attribution}</p>
        </aside>
      }
    </div>);

}

/**
 * StoryBreath — negative space as a component. Nothing else belongs here.
 */
export function StoryBreath({
  children,
  intensity = 'breath'



}: {children?: React.ReactNode;intensity?: 'pause' | 'breath' | 'silence';}) {
  const reduceMotion = useReducedMotion();
  const pad =
  intensity === 'pause' ?
  'py-scene' :
  intensity === 'breath' ?
  'py-breath' :
  'py-silence';

  if (!children) return <div aria-hidden="true" className={pad} />;

  return (
    <div className={`${pad} px-6`}>
      <motion.p
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.23, 1, 0.32, 1] }}
        className="mx-auto max-w-[26ch] text-center font-story text-quote italic leading-snug text-ink">
        
        {children}
      </motion.p>
    </div>);

}

export function SectionRule() {
  return (
    <div aria-hidden="true" className="mx-auto my-scene w-full max-w-[76rem] px-6">
      <div className="mx-auto h-px w-24 bg-ink-rule" />
    </div>);

}