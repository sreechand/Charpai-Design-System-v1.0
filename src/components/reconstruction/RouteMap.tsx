import React, { useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { DocumentaryLine } from '../foundation/Documentary';
import { RouteDrawing } from './RouteDrawing';
import { ConfidenceKey } from './ConfidenceKey';
import { routeMap } from '../../data/story';

/**
 * The wide format: the whole walk at once, traced as the reader arrives.
 */
export function RouteMap({ printed = false }: {printed?: boolean;}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduced = useReducedMotion();
  const instant = Boolean(reduced) || printed;
  const [replay, setReplay] = useState(0);

  return (
    <figure ref={ref} className="w-full">
      <RouteDrawing
        key={replay}
        draw={instant ? true : inView}
        instant={instant}
        className="h-auto w-full" />
      

      <div className="mt-object flex flex-wrap items-end justify-between gap-thought">
        <figcaption className="max-w-[38ch]">
          <DocumentaryLine meta={routeMap} />
        </figcaption>
        <div className="flex flex-col items-start gap-touch">
          <ConfidenceKey />
          {!printed &&
          <button
            type="button"
            onClick={() => setReplay((n) => n + 1)}
            className="font-ui text-[0.8rem] text-ink-soft underline decoration-ink-rule underline-offset-4 transition-colors duration-150 hover:text-ink">
            
              Trace the walk again
            </button>
          }
        </div>
      </div>
    </figure>);

}