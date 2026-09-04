import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

/**
 * Objects are narrative threads. The bicycle is not an illustration of this
 * story — it runs through seven of them, and keeps its own biography.
 */
export function ObjectThread({
  label,
  count,
  span,
  note





}: {label: string;count: string;span: string;note: string;}) {
  return (
    <aside className="border-t border-ink-rule pt-object">
      <p className="font-doc text-doc uppercase text-ink-soft">
        {count} · {span}
      </p>
      <h2 className="mt-touch font-story text-[1.35rem] text-ink">{label}</h2>
      <p className="mt-touch max-w-[44ch] font-story text-[1rem] leading-relaxed text-ink-soft">
        {note}
      </p>
      <button
        type="button"
        className="mt-object inline-flex items-center gap-1.5 font-ui text-[0.8rem] text-ink-soft underline decoration-ink-rule underline-offset-4 transition-colors duration-150 hover:text-ink">
        
        Follow it through his life
        <ArrowRightIcon aria-hidden="true" className="h-3.5 w-3.5" />
      </button>
    </aside>);

}