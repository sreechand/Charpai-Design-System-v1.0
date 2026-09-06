import React from 'react';
import { ChevronLeftIcon } from 'lucide-react';
import { printSpec } from '../../data/print';

/**
 * Same Foundation, different surface: this is a production view of the book,
 * so the chrome states the specification and nothing else.
 */
export function PrintBar({ onBack }: {onBack: () => void;}) {
  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-desk/95 backdrop-blur-[2px]">
      <nav
        aria-label="Print layout"
        className="mx-auto flex h-14 w-full max-w-[76rem] items-center justify-between gap-object px-6">
        
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 font-ui text-sm text-ink-soft transition-colors duration-150 hover:text-ink">
          
          <ChevronLeftIcon aria-hidden="true" className="h-4 w-4" />
          Back to reading
        </button>

        <p className="hidden font-doc text-doc uppercase text-ink-soft sm:block">
          {printSpec.title} · Print layout
        </p>

        <p className="font-doc text-doc uppercase text-ink-soft">
          {printSpec.trim} · {printSpec.extent}
        </p>
      </nav>
    </header>);

}