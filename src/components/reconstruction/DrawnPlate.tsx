import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { DocumentaryLine } from '../foundation/Documentary';
import type { ArtifactMeta } from '../../types/story';

/**
 * Reconstructions are drawn *on* the page — printed into the paper, never
 * resting on it as an object would. Nothing here survived; only the drawing
 * of what was described.
 */
export function DrawnPlate({
  src,
  alt,
  meta,
  className = '',
  rotate = 0,
  captionClassName = ''







}: {src: string;alt: string;meta: ArtifactMeta;className?: string;rotate?: number;captionClassName?: string;}) {
  const reduceMotion = useReducedMotion();
  return (
    <figure className={className}>
      <motion.img
        src={src}
        alt={alt}
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: reduceMotion ? 0 : 1.1, ease: 'easeOut' }}
        style={{ transform: `rotate(${rotate}deg)`, mixBlendMode: 'multiply' }}
        className="block h-auto w-full shadow-printed" />
      
      <figcaption className={`mt-object ${captionClassName}`}>
        <DocumentaryLine meta={meta} />
      </figcaption>
    </figure>);

}