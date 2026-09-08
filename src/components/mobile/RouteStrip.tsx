import React, { useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { RouteDrawing } from '../reconstruction/RouteDrawing';
import { ConfidenceKey } from '../reconstruction/ConfidenceKey';
import { DocumentaryLine } from '../foundation/Documentary';
import { routeMap, routeStops } from '../../data/story';

/**
 * The desktop map is one composition taken in at a glance. On a phone that
 * would be an unreadable miniature, so the same drawing becomes the walk
 * itself: you drag along the road, and the stops arrive in her order.
 */
export function RouteStrip() {
  const scroller = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const goTo = (percent: number) => {
    const el = scroller.current;
    if (!el) return;
    const target = el.scrollWidth * percent / 100 - el.clientWidth / 2;
    el.scrollTo({
      left: Math.max(0, target),
      behavior: reduceMotion ? 'auto' : 'smooth'
    });
  };

  return (
    <figure>
      <div className="flex items-baseline justify-between gap-object">
        <p className="font-doc text-doc uppercase text-ink-soft">The walk · drag along the road</p>
      </div>

      <div
        ref={scroller}
        tabIndex={0}
        role="region"
        aria-label="The walk to school, drawn from narration. Scroll sideways to follow the road."
        className="-mx-6 mt-object overflow-x-auto overscroll-x-contain"
        style={{ scrollbarWidth: 'none' }}>
        
        <div className="relative h-[52svh]" style={{ width: 'calc(52svh * 1.913)' }}>
          <RouteDrawing draw instant={false} className="absolute inset-0 h-full w-full" />
        </div>
      </div>

      <ul className="mt-object flex flex-wrap gap-x-object gap-y-touch">
        {routeStops.map((stop) =>
        <li key={stop.id}>
            <button
            type="button"
            onClick={() => goTo(stop.at)}
            className="font-ui text-[0.8rem] text-ink-soft underline decoration-ink-rule underline-offset-4 transition-colors duration-150 hover:text-ink">
            
              {stop.label}
            </button>
          </li>
        )}
      </ul>

      <figcaption className="mt-thought space-y-object">
        <DocumentaryLine meta={routeMap} />
        <ConfidenceKey />
      </figcaption>
    </figure>);

}