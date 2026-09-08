import React from 'react';
import { ChevronLeftIcon } from 'lucide-react';
import { book } from '../../data/fieldbook';

/** The same quiet Foundation chrome as the stories, one level up. */
export function FieldbookBar({
  onBack,
  backLabel



}: {onBack?: () => void;backLabel?: string;}) {
  return (
    <header className="sticky top-0 z-30 border-b border-ink-rule/60 bg-paper/90 backdrop-blur-[2px]">
      <div className="mx-auto flex h-14 w-full max-w-[76rem] items-center justify-between gap-object px-6">
        {onBack ?
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 font-ui text-sm text-ink-soft transition-colors duration-150 hover:text-ink">
          
            <ChevronLeftIcon aria-hidden="true" className="h-4 w-4" />
            {backLabel ?? 'Contents'}
          </button> :

        <p className="font-story text-[1.05rem] text-ink">Charpai</p>
        }

        <p className="hidden font-doc text-doc uppercase text-ink-faint sm:block">{book.extent}</p>
      </div>
    </header>);

}